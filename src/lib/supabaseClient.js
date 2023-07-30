import { createClient } from '@supabase/supabase-js'

const options = {
  schema: 'public',
  autoRefreshToken: true
}

export const supabase = createClient( 'https://zczqzdecymzwwawhjaeh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjenF6ZGVjeW16d3dhd2hqYWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ4NzUwNTksImV4cCI6MTk2MDQ1MTA1OX0.gf8I2zPQUDY4EriIPXypraVPxANLu_twaSy6XBNxoUI', options )


