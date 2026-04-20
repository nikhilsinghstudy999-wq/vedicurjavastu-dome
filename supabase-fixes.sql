-- Run this in Supabase SQL Editor to fix missing tables/columns

-- Create testimonials table if missing
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  location TEXT,
  project_type TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  avatar_url TEXT,
  verified BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published testimonials" ON public.testimonials FOR SELECT USING (is_published = true);
CREATE POLICY "Admin full access testimonials" ON public.testimonials FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Add missing columns to site_settings
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Seed sample testimonials
INSERT INTO public.testimonials (client_name, location, project_type, rating, content, verified, is_published)
VALUES 
  ('Priya Sharma', 'London, UK', 'free_tool', 5, 'My Kundali matched my Pandit''s reading exactly! Incredible accuracy.', true, true),
  ('James Whitmore', 'New York, USA', 'free_tool', 5, 'The Vastu scan identified a problem I had felt for years. Remedies worked!', true, true),
  ('Ananya Patel', 'Dubai, UAE', 'free_tool', 5, 'Found the perfect name for my newborn. Thank you Acharya!', true, true)
ON CONFLICT DO NOTHING;

-- Add to realtime
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.testimonials;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

SELECT '✅ Database fixes applied.' AS status;
