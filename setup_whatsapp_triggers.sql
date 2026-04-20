-- =============================================================================
-- WHATSAPP NOTIFICATION TRIGGERS (RUN THIS IN SUPABASE SQL EDITOR)
-- =============================================================================
-- This script creates triggers that automatically send WhatsApp messages to
-- Acharya ji when:
--   1. A new contact message is inserted.
--   2. A consultation's payment_status changes to 'paid'.
--
-- Before running, replace the placeholder below with your actual anon key.
-- =============================================================================

-- Enable the http extension if not already enabled
CREATE EXTENSION IF NOT EXISTS http WITH SCHEMA extensions;

-- -----------------------------------------------------------------------------
-- Trigger function for contact messages
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.notify_whatsapp_contact()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    net.http_post(
      url := 'https://zcljqdjnxmvjfnvgagui.supabase.co/functions/v1/send-whatsapp',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjbGpxZGpueG12amZudmdhZ3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5Njk1MjcsImV4cCI6MjA5MTU0NTUyN30.psNnreV-12jwkTWxecpoST_RmS-QJ91IcsEsN47J5rQ"}'::jsonb,
      body := jsonb_build_object(
        'type', 'contact',
        'data', jsonb_build_object(
          'name', NEW.name,
          'email', NEW.email,
          'message', NEW.message
        )
      )
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS contact_whatsapp_trigger ON public.contact_messages;
CREATE TRIGGER contact_whatsapp_trigger
  AFTER INSERT ON public.contact_messages
  FOR EACH ROW EXECUTE FUNCTION public.notify_whatsapp_contact();

-- -----------------------------------------------------------------------------
-- Trigger function for consultation payments
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.notify_whatsapp_booking()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.payment_status = 'paid' AND (OLD.payment_status IS NULL OR OLD.payment_status != 'paid') THEN
    PERFORM
      net.http_post(
        url := 'https://zcljqdjnxmvjfnvgagui.supabase.co/functions/v1/send-whatsapp',
        headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjbGpxZGpueG12amZudmdhZ3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5Njk1MjcsImV4cCI6MjA5MTU0NTUyN30.psNnreV-12jwkTWxecpoST_RmS-QJ91IcsEsN47J5rQ"}'::jsonb,
        body := jsonb_build_object(
          'type', 'booking',
          'data', jsonb_build_object(
            'client_name', COALESCE(NEW.client_name, 'Client'),
            'email', NEW.client_email,
            'amount', NEW.amount,
            'scheduled_at', NEW.scheduled_at,
            'meeting_url', NEW.meeting_url
          )
        )
      );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS booking_whatsapp_trigger ON public.consultations;
CREATE TRIGGER booking_whatsapp_trigger
  AFTER UPDATE ON public.consultations
  FOR EACH ROW EXECUTE FUNCTION public.notify_whatsapp_booking();

-- -----------------------------------------------------------------------------
-- Grant necessary permissions
-- -----------------------------------------------------------------------------
GRANT USAGE ON SCHEMA net TO postgres, authenticated, service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA net TO postgres, authenticated, service_role;
