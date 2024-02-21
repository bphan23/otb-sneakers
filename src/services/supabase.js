import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://srlwfweycsobeyeikycc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNybHdmd2V5Y3NvYmV5ZWlreWNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MDk4NjUsImV4cCI6MjAyMzk4NTg2NX0.M52FYQx17lrrrQ5S0gtJ4wq2TySWJk5j12RWhwF6Aio";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
