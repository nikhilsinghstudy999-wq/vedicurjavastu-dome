import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zcljqdjnxmvjfnvgagui.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjbGpxZGpueG12amZudmdhZ3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5Njk1MjcsImV4cCI6MjA5MTU0NTUyN30.psNnreV-12jwkTWxecpoST_RmS-QJ91IcsEsN47J5rQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
