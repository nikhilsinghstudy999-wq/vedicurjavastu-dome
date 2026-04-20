-- =============================================================================
-- FIX RLS POLICIES FOR MEETING PAGE ACCESS
-- =============================================================================
-- This migration ensures clients can view their own consultations and admins have full access.
-- Run this in the Supabase SQL Editor or via `supabase db push`.

BEGIN;

-- 1. Drop existing restrictive policies on consultations (if any)
DROP POLICY IF EXISTS "Clients can view their own consultations" ON public.consultations;
DROP POLICY IF EXISTS "Admins can view all consultations" ON public.consultations;
DROP POLICY IF EXISTS "Service role full access consultations" ON public.consultations;

-- 2. Create correct policies
-- Allow clients to SELECT only their own consultations
CREATE POLICY "Clients can view their own consultations"
ON public.consultations
FOR SELECT
USING (auth.uid() = client_id);

-- Allow admins to SELECT all consultations
CREATE POLICY "Admins can view all consultations"
ON public.consultations
FOR SELECT
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Service role bypass (for Edge Functions and webhooks)
CREATE POLICY "Service role full access consultations"
ON public.consultations
FOR ALL
USING (true)
WITH CHECK (true);

-- 3. Ensure profiles table has correct RLS for user role checks
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
ON public.profiles
FOR SELECT
USING (id = auth.uid());

DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

COMMIT;

SELECT '✅ RLS policies fixed.' AS status;
