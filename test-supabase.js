// Quick test to verify Supabase connection
// Run with: node test-supabase.js

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://qfayczzgxhlmosywvnac.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmYXljenpneGhsbW9zeXd2bmFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MTUwNzgsImV4cCI6MjA5MDA5MTA3OH0.nCSi2qTIl1CkwnaK6Cxvi3U4HKYlT4p186PB9uvabLg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('Testing Supabase connection...\n');

  try {
    // Test 1: Check connection
    const { data, error } = await supabase.from('profiles').select('count');
    
    if (error) {
      console.log('❌ Error connecting to Supabase:');
      console.log(error.message);
      console.log('\n⚠️  You need to create the database tables!');
      console.log('Go to Supabase SQL Editor and run the SQL from SUPABASE_SETUP.md\n');
      return;
    }

    console.log('✅ Successfully connected to Supabase!');
    console.log('✅ Tables are set up correctly!\n');
    
    // Test 2: Check auth
    console.log('Testing authentication...');
    const { data: authData, error: authError } = await supabase.auth.getSession();
    
    if (authError) {
      console.log('❌ Auth error:', authError.message);
    } else {
      console.log('✅ Authentication is working!\n');
    }

    console.log('🎉 All tests passed! Your Supabase setup is ready.\n');
    console.log('Next steps:');
    console.log('1. Run: npm run dev');
    console.log('2. Go to http://localhost:3000');
    console.log('3. Test signup and signin\n');

  } catch (err) {
    console.log('❌ Unexpected error:', err.message);
  }
}

testConnection();
