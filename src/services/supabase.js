import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

export const supabaseUrl = "https://qlfuyzitvsmgudrjaqrp.supabase.co";

// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseKey = process.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
