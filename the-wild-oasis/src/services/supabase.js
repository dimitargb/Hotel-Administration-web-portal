import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uofzqljzwyxrzdyhpdhb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZnpxbGp6d3l4cnpkeWhwZGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3OTc0NDgsImV4cCI6MjA0MzM3MzQ0OH0.CmpsrxOIdJgkR8Igey-j2QDsDuae_Ui1OTtn15nNOn4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
