-- =============================================================================
-- SAFE WHATSAPP TRIGGER FIX (IDEMPOTENT)
-- =============================================================================
-- Run this in Supabase SQL Editor. It will:
--   1. Drop and recreate the trigger function correctly.
--   2. Ensure all required extensions exist.
--   3. Grant necessary permissions.

BEGIN;

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pg_net SCHEMA extensions;

-- Drop old trigger and function to avoid conflicts
DROP TRIGGER IF EXISTS contact_whatsapp_trigger ON public.contact_messages;
DROP FUNCTION IF EXISTS public.notify_whatsapp_contact() CASCADE;

-- Create corrected trigger function
CREATE OR REPLACE FUNCTION public.notify_whatsapp_contact()
RETURNS TRIGGER AS $$
DECLARE
  v_meeting_url TEXT;
BEGIN
  -- Attempt to retrieve the most recent meeting link for this client
  SELECT c.meeting_url INTO v_meeting_url
  FROM public.consultations c
  WHERE c.client_id = (
    SELECT id FROM auth.users WHERE email = NEW.email LIMIT 1
  )
  ORDER BY c.created_at DESC
  LIMIT 1;

  -- Send HTTP request via pg_net
  PERFORM
    net.http_post(
      url := 'https://zcljqdjnxmvjfnvgagui.supabase.co/functions/v1/send-whatsapp',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjbGpxZGpueG12amZudmdhZ3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5Njk1MjcsImV4cCI6MjA5MTU0NTUyN30.psNnreV-12jwkTWxecpoST_RmS-QJ91IcsEsN47J5rQ'
      ),
      body := jsonb_build_object(
        'type', 'contact',
        'data', jsonb_build_object(
          'name', NEW.name,
          'phone', NEW.phone,
          'email', NEW.email,
          'address', NEW.address,
          'message', NEW.message,
          'layout_plan_url', NEW.layout_plan_url,
          'meeting_url', v_meeting_url
        )
      )
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate the trigger
CREATE TRIGGER contact_whatsapp_trigger
  AFTER INSERT ON public.contact_messages
  FOR EACH ROW EXECUTE FUNCTION public.notify_whatsapp_contact();

-- Grant execute permissions
GRANT USAGE ON SCHEMA net TO postgres, authenticated, service_role;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA net TO postgres, authenticated, service_role;

COMMIT;

-- =============================================================================
-- VERIFICATION QUERY (optional)
-- =============================================================================
-- SELECT proname, prosrc FROM pg_proc WHERE proname = 'notify_whatsapp_contact';
