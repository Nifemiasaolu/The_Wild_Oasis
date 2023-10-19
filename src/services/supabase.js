import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vnaeyyaupmjblcsqxwkr.supabase.co";
const supabaseKey = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuYWV5eWF1cG1qYmxjc3F4d2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0ODI5NDcsImV4cCI6MjAxMzA1ODk0N30.QsSLAdM4oJ2cpk3fWo23-qhG4tqTRxg2MVHjgnMqWlg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
