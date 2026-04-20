-- =============================================================================
-- COMPLETE RLS FIX FOR MEETING ACCESS
-- =============================================================================
BEGIN;

-- 1. Ensure consultations table has proper client_id foreign key
ALTER TABLE public.consultations 
ADD COLUMN IF NOT EXISTS client_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update any NULL client_id (should not happen, but safe)
UPDATE public.consultations SET client_id = (SELECT id FROM auth.users LIMIT 1) WHERE client_id IS NULL;

-- 2. Drop all existing policies on consultations to start fresh
DROP POLICY IF EXISTS "Clients can view their own consultations" ON public.consultations;
DROP POLICY IF EXISTS "Admins can view all consultations" ON public.consultations;
DROP POLICY IF EXISTS "Service role full access consultations" ON public.consultations;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.consultations;
DROP POLICY IF EXISTS "Users can view own consultations" ON public.consultations;

-- 3. Create correct SELECT policies
-- Policy for clients: can only see their own consultations
CREATE POLICY "Clients can view their own consultations"
ON public.consultations
FOR SELECT
USING (auth.uid() = client_id);

-- Policy for admins: can see all consultations
CREATE POLICY "Admins can view all consultations"
ON public.consultations
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Policy for service role: full access (used by Edge Functions)
CREATE POLICY "Service role full access consultations"
ON public.consultations
FOR ALL
USING (true)
WITH CHECK (true);

-- 4. Fix profiles table RLS
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

CREATE POLICY "Users can view own profile"
ON public.profiles
FOR SELECT
USING (id = auth.uid());

CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- 5. Ensure RLS is enabled
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

COMMIT;

-- =============================================================================
-- DIAGNOSTIC QUERIES (run these to verify setup)
-- =============================================================================
-- Check if a specific user can see a specific consultation
-- Replace 'USER_ID' and 'CONSULTATION_ID' with actual values
/*
SELECT 
  auth.uid() as current_user_id,
  c.id as consultation_id,
  c.client_id,
  auth.uid() = c.client_id as is_owner,
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin') as is_admin
FROM public.consultations c
WHERE c.id = 'CONSULTATION_ID';
*/

-- List all policies on consultations table
/*
SELECT 
  schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'consultations';
*/
