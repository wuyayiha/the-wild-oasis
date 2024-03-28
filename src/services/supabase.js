import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://stskzxnmcjghgstgfbew.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0c2t6eG5tY2pnaGdzdGdmYmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5ODg3ODcsImV4cCI6MjAyNjU2NDc4N30.mQJHSwnPfOet18DCPHZZ7TMDwkGCUmXU6upjOgD2FKQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
