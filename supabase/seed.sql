-- Seed data for development

-- Insert test users (passwords will be set via Supabase Auth UI)
-- These are examples - actual user creation happens through auth flow

-- Insert test activity logs
INSERT INTO activity_logs (action, metadata) VALUES
  ('system_startup', '{"version": "1.0.0"}'),
  ('database_migrated', '{"migration": "001_initial_schema"}');

-- Note: Subscriptions and payments will be created via Stripe webhooks
-- This seed file is mainly for structure reference
