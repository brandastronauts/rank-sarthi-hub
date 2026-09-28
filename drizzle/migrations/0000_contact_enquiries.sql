CREATE TABLE public.contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  enquiry_type text NOT NULL,
  visitor_type text,
  message text NOT NULL,
  source_page text,
  client_hash text,
  delivery_status text NOT NULL DEFAULT 'stored_email_not_configured',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_enquiries TO service_role;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_enquiries_client_hash_created_idx ON public.contact_enquiries (client_hash, created_at DESC);