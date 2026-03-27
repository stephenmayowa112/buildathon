/**
 * Create Test User Script
 * 
 * This script creates the test user account in Supabase
 * Email: test@voltpay.com
 * Password: Test123!
 * 
 * Usage:
 * 1. Make sure you have your Supabase Service Role Key
 * 2. Run: node scripts/create-test-user.js
 */

const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qfayczzgxhlmosywvnac.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SERVICE_ROLE_KEY_HERE';

// Create Supabase admin client
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Test user data
const testUser = {
  email: 'test@voltpay.com',
  password: 'Test123!',
  user_metadata: {
    full_name: 'Test User',
    business_name: 'Test Business'
  }
};

async function createTestUser() {
  console.log('🚀 Creating test user...\n');
  console.log('Email:', testUser.email);
  console.log('Password:', testUser.password);
  console.log('---\n');

  try {
    // Check if user already exists
    const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
    
    if (listError) {
      console.error('❌ Error checking existing users:', listError.message);
      console.log('\n⚠️  Make sure you have set SUPABASE_SERVICE_ROLE_KEY in your .env.local file');
      return;
    }

    const userExists = existingUsers.users.find(u => u.email === testUser.email);
    
    if (userExists) {
      console.log('ℹ️  User already exists!');
      console.log('User ID:', userExists.id);
      console.log('Email:', userExists.email);
      console.log('Created:', userExists.created_at);
      console.log('\n✅ You can now login with these credentials');
      return;
    }

    // Create the user
    const { data, error } = await supabase.auth.admin.createUser({
      email: testUser.email,
      password: testUser.password,
      email_confirm: true, // Auto-confirm email
      user_metadata: testUser.user_metadata
    });

    if (error) {
      console.error('❌ Error creating user:', error.message);
      
      if (error.message.includes('service_role')) {
        console.log('\n⚠️  You need to set your Supabase Service Role Key');
        console.log('1. Go to Supabase Dashboard → Settings → API');
        console.log('2. Copy the "service_role" key (not the anon key)');
        console.log('3. Add to .env.local: SUPABASE_SERVICE_ROLE_KEY=your_key_here');
      }
      
      return;
    }

    console.log('✅ Test user created successfully!\n');
    console.log('User Details:');
    console.log('---');
    console.log('ID:', data.user.id);
    console.log('Email:', data.user.email);
    console.log('Email Confirmed:', data.user.email_confirmed_at ? 'Yes' : 'No');
    console.log('Created At:', data.user.created_at);
    console.log('Metadata:', JSON.stringify(data.user.user_metadata, null, 2));
    console.log('---\n');

    console.log('🎉 You can now login with:');
    console.log('Email:', testUser.email);
    console.log('Password:', testUser.password);
    console.log('\n🌐 Login at: https://voltpaybuild.vercel.app/auth/signin');

  } catch (err) {
    console.error('❌ Unexpected error:', err.message);
  }
}

// Run the script
createTestUser();
