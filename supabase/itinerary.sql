-- Already applied to the "Madrid Food Guide" Supabase project on 2026-10-28 (migration "trip_plan").
-- Kept here for reference. Itinerary items (flights, hotel, sights, events) added on itinerary.html.
-- Same pattern as trip_places: a private table reached only through passcode-checked functions,
-- and "Remove" only flags a row, so nothing is ever hard-deleted. trip_get is left untouched.

create table if not exists private.trip_plan (id uuid primary key default gen_random_uuid(), data jsonb not null, removed boolean not null default false, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
alter table private.trip_plan enable row level security;
revoke all on private.trip_plan from public, anon, authenticated;

create or replace function public.trip_get_plan(p text) returns json
language plpgsql security definer set search_path = '' as $function$
begin
  perform private.trip_assert(p);
  return coalesce((select json_agg(jsonb_build_object('id', t.id) || t.data order by t.created_at) from private.trip_plan t where not t.removed), '[]'::json);
end $function$;

create or replace function public.trip_save_item(p text, iid uuid, idata jsonb) returns uuid
language plpgsql security definer set search_path = '' as $function$
declare v uuid := iid;
begin
  perform private.trip_assert(p);
  if idata is null or jsonb_typeof(idata) <> 'object' or length(idata::text) > 4000 or coalesce(trim(idata->>'title'), '') = '' then
    raise exception 'Invalid item' using errcode = '22023';
  end if;
  if v is null then
    insert into private.trip_plan(data) values (idata) returning id into v;
  else
    update private.trip_plan set data = idata, removed = false, updated_at = now() where id = v;
    if not found then insert into private.trip_plan(id, data) values (v, idata); end if;
  end if;
  return v;
end $function$;

create or replace function public.trip_remove_item(p text, iid uuid) returns void
language plpgsql security definer set search_path = '' as $function$
begin
  perform private.trip_assert(p);
  update private.trip_plan set removed = true, updated_at = now() where id = iid;
end $function$;

revoke all on function public.trip_get_plan(text) from public;
revoke all on function public.trip_save_item(text, uuid, jsonb) from public;
revoke all on function public.trip_remove_item(text, uuid) from public;
grant execute on function public.trip_get_plan(text) to anon, authenticated;
grant execute on function public.trip_save_item(text, uuid, jsonb) to anon, authenticated;
grant execute on function public.trip_remove_item(text, uuid) to anon, authenticated;
