-- =============================================================================
-- CHECK REALTIME PERMISSIONS AND RLS
-- =============================================================================
-- Run these queries in Supabase SQL Editor to verify the setup.

-- 1. Check if tables are in realtime publication
SELECT tablename FROM pg_publication_tables WHERE pubname = 'supabase_realtime';

-- 2. Check SELECT grants for anon and authenticated
SELECT grantee, table_name, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_schema = 'public' 
AND table_name IN ('home_sections', 'free_tools', 'services')
AND grantee IN ('anon', 'authenticated')
ORDER BY table_name, grantee;

-- 3. Check RLS policies on home_sections
SELECT policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE schemaname = 'public' AND tablename = 'home_sections';

-- 4. Test if anon can SELECT home_sections (run this, should return rows)
SET LOCAL ROLE anon;
SELECT * FROM home_sections LIMIT 1;
RESET ROLE;

-- 5. Check if is_admin() function works
SELECT public.is_admin();
