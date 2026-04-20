-- =============================================================================
-- FIX REALTIME RLS – ALLOW AUTHENTICATED USERS TO SUBSCRIBE
-- =============================================================================
BEGIN;

-- Enable realtime for all required tables
DO $$
DECLARE
    t text;
BEGIN
    FOR t IN 
        SELECT tablename FROM pg_tables 
        WHERE schemaname = 'public' 
        AND tablename IN ('profiles', 'consultations', 'consultation_availability', 
                          'home_sections', 'services', 'free_tools', 'courses', 
                          'blog_posts', 'testimonials', 'payments', 'contact_messages')
    LOOP
        EXECUTE format('ALTER PUBLICATION supabase_realtime ADD TABLE %I', t);
    END LOOP;
END $$;

-- Ensure authenticated users can subscribe to realtime
-- The realtime system requires SELECT permission on the table
DO $$
DECLARE
    t text;
BEGIN
    FOR t IN 
        SELECT tablename FROM pg_tables 
        WHERE schemaname = 'public' 
        AND tablename IN ('profiles', 'consultations', 'consultation_availability', 
                          'home_sections', 'services', 'free_tools', 'courses', 
                          'blog_posts', 'testimonials', 'payments', 'contact_messages')
    LOOP
        EXECUTE format('GRANT SELECT ON public.%I TO authenticated', t);
        EXECUTE format('GRANT SELECT ON public.%I TO anon', t);
    END LOOP;
END $$;

-- Fix any missing RLS policies that might block realtime
-- Profiles table
DROP POLICY IF EXISTS "Authenticated users can view profiles" ON public.profiles;
CREATE POLICY "Authenticated users can view profiles" ON public.profiles
    FOR SELECT USING (true);

-- Consultations table
DROP POLICY IF EXISTS "Authenticated users can view consultations" ON public.consultations;
CREATE POLICY "Authenticated users can view consultations" ON public.consultations
    FOR SELECT USING (true);

-- Home sections
DROP POLICY IF EXISTS "Anyone can view home sections" ON public.home_sections;
CREATE POLICY "Anyone can view home sections" ON public.home_sections
    FOR SELECT USING (true);

-- Services
DROP POLICY IF EXISTS "Anyone can view services" ON public.services;
CREATE POLICY "Anyone can view services" ON public.services
    FOR SELECT USING (true);

-- Free tools
DROP POLICY IF EXISTS "Anyone can view free tools" ON public.free_tools;
CREATE POLICY "Anyone can view free tools" ON public.free_tools
    FOR SELECT USING (true);

-- Blog posts
DROP POLICY IF EXISTS "Anyone can view blog posts" ON public.blog_posts;
CREATE POLICY "Anyone can view blog posts" ON public.blog_posts
    FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can view all blog posts" ON public.blog_posts
    FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Testimonials
DROP POLICY IF EXISTS "Anyone can view testimonials" ON public.testimonials;
CREATE POLICY "Anyone can view testimonials" ON public.testimonials
    FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can view all testimonials" ON public.testimonials
    FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

COMMIT;

SELECT 'Realtime RLS fix applied.' as status;
