-- Run this in Supabase SQL Editor to create the storage bucket for layout plans

-- 1. Create the bucket (public)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'layout-plans',
  'layout-plans',
  true,
  10485760, -- 10 MB
  ARRAY['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
)
ON CONFLICT (id) DO NOTHING;

-- 2. Allow public uploads (INSERT)
CREATE POLICY "Public Upload to layout-plans"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'layout-plans');

-- 3. Allow public downloads (SELECT)
CREATE POLICY "Public Read from layout-plans"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'layout-plans');
