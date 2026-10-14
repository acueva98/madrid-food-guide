-- Already applied to the "Madrid Food Guide" Supabase project on 2026-10-13 (migration "trip_places").
-- Kept here for reference. Places added from the page live in private.trip_places;
-- "Remove from guide" only flags a row as removed, so nothing is ever hard-deleted.

create table if not exists private.trip_places (id uuid primary key default gen_random_uuid(), data jsonb not null, removed boolean not null default false, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
alter table private.trip_places enable row level security;
revoke all on private.trip_places from public, anon, authenticated;

create or replace function public.trip_save_place(p text, pid uuid, pdata jsonb) returns uuid
language plpgsql security definer set search_path = '' as $function$
declare v uuid := pid;
begin
  perform private.trip_assert(p);
  if pdata is null or jsonb_typeof(pdata) <> 'object' or length(pdata::text) > 8000 or coalesce(trim(pdata->>'n'), '') = '' then
    raise exception 'Invalid place' using errcode = '22023';
  end if;
  if v is null then
    insert into private.trip_places(data) values (pdata) returning id into v;
  else
    update private.trip_places set data = pdata, removed = false, updated_at = now() where id = v;
    if not found then insert into private.trip_places(id, data) values (v, pdata); end if;
  end if;
  return v;
end $function$;

create or replace function public.trip_remove_place(p text, pid uuid) returns void
language plpgsql security definer set search_path = '' as $function$
begin
  perform private.trip_assert(p);
  update private.trip_places set removed = true, updated_at = now() where id = pid;
end $function$;

-- trip_get now also returns 'places' (every row not marked removed).
create or replace function public.trip_get(p text) returns json
language plpgsql security definer set search_path = '' as $function$
begin
  perform private.trip_assert(p);
  return json_build_object(
    'bookings', coalesce((select json_object_agg(b.name, json_build_object('d', b.day, 't', b.time, 'p', coalesce(b.people::text, ''), 'note', coalesce(b.note, ''))) from private.trip_bookings b), '{}'::json),
    'favorites', coalesce((select json_agg(f.name order by f.created_at) from private.trip_favorites f), '[]'::json),
    'places', coalesce((select json_agg(jsonb_build_object('id', t.id) || t.data order by t.created_at) from private.trip_places t where not t.removed), '[]'::json));
end $function$;

revoke all on function public.trip_save_place(text, uuid, jsonb) from public;
revoke all on function public.trip_remove_place(text, uuid) from public;
grant execute on function public.trip_save_place(text, uuid, jsonb) to anon, authenticated;
grant execute on function public.trip_remove_place(text, uuid) to anon, authenticated;
