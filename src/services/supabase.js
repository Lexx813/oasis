import { createClient } from "@supabase/supabase-js";
// import axios from "axios";

export const supabaseUrl = "https://qlfuyzitvsmgudrjaqrp.supabase.co";
// const serviceRoleKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZnV5eml0dnNtZ3VkcmphcXJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzc5OTk5NSwiZXhwIjoyMDE5Mzc1OTk1fQ.I2Bi6P1vbdDreX1Eqi_ZUbgkUnXoDeEaRMiW8ZCED_I";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZnV5eml0dnNtZ3VkcmphcXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3OTk5OTUsImV4cCI6MjAxOTM3NTk5NX0.9TQ2oomhynC_ufbZXLUI4v-nJjS-IK67rfZNs9LQd8k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// axios
//   .get(`${supabaseUrl}/auth/v1/admin/users`, {
//     headers: {
//       apikey: serviceRoleKey,
//       Authorization: `Bearer ${serviceRoleKey}`,
//     },
//   })
//   .then(response => {
//     console.log(response.data); // List of users
//   })
//   .catch(error => {
//     console.error("Error fetching users:", error);
//   });
