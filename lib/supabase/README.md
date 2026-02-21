# Supabase Ready Notes (Not Connected Yet)

This MVP intentionally uses mock data only.

Later integration plan:

1. Add `@supabase/supabase-js`.
2. Create `lib/supabase/client.ts` using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Replace mock data in `data/mock-data.ts` with queries from Supabase tables.
4. Add Auth flows (email/password or OAuth) in `/profile`.
5. Add Storage bucket integration for STL uploads.
