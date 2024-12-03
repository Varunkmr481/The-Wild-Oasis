import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://votfwipbktaagyrzxmei.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdGZ3aXBia3RhYWd5cnp4bWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2NzM3MjYsImV4cCI6MjA0NzI0OTcyNn0.QUaWecx4xz_bHqHDeD4HYv4EeYLVpkR6O-ykQ3dLTmI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
