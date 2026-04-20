-- Add created_at and updated_at columns to blog_posts if they don't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'blog_posts' AND column_name = 'created_at') THEN
        ALTER TABLE public.blog_posts ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'blog_posts' AND column_name = 'updated_at') THEN
        ALTER TABLE public.blog_posts ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
END $$;

-- Ensure other tables have created_at/updated_at as needed
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'free_tools' AND column_name = 'created_at') THEN
        ALTER TABLE public.free_tools ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
        ALTER TABLE public.free_tools ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'services' AND column_name = 'created_at') THEN
        ALTER TABLE public.services ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
        ALTER TABLE public.services ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'created_at') THEN
        ALTER TABLE public.testimonials ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
        ALTER TABLE public.testimonials ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
END $$;
