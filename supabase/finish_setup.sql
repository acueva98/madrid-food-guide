-- Paste into Supabase > SQL Editor > New query, then Run.
-- Adds the two "remove" functions and locks the functions down.

create or replace function public.trip_delete_booking(p text, rname text) returns void
language plpgsql security definer set search_path = '' as $$
begin
  perform private.trip_assert(p);
  delete from private.trip_bookings where name = rname;
end $$;

create or replace function public.trip_set_favorite(p text, rname text, fav boolean) returns void
language plpgsql security definer set search_path = '' as $$
begin
  perform private.trip_assert(p);
  if fav then
    insert into private.trip_favorites(name) values (left(rname, 120)) on conflict do nothing;
  else
    delete from private.trip_favorites where name = rname;
  end if;
end $$;

revoke all on function private.trip_assert(text) from public, anon, authenticated;
revoke all on function public.trip_get(text) from public;
revoke all on function public.trip_save_booking(text, text, date, text, int, text) from public;
revoke all on function public.trip_delete_booking(text, text) from public;
revoke all on function public.trip_set_favorite(text, text, boolean) from public;
grant execute on function public.trip_get(text) to anon, authenticated;
grant execute on function public.trip_save_booking(text, text, date, text, int, text) to anon, authenticated;
grant execute on function public.trip_delete_booking(text, text) to anon, authenticated;
grant execute on function public.trip_set_favorite(text, text, boolean) to anon, authenticated;
