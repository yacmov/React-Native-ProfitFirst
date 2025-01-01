import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mlxlpvauxwmdjhnarfmb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1seGxwdmF1eHdtZGpobmFyZm1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NzI2MjcsImV4cCI6MjA1MTE0ODYyN30.Pd5DUnM3yl-GuUD1qsUPF2LKEPE3_cT7md1QYuOwGOc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
