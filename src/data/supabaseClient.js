import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cwyfpdtwvwunrfinlmda.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3eWZwZHR3dnd1bnJmaW5sbWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNjMxODEsImV4cCI6MjA2OTYzOTE4MX0.Dgl2HCUoe0FJtpIlSzRlgDVSGxNunWd54h3OEBb4R4M";
export const supabase = createClient(supabaseUrl, supabaseKey);
