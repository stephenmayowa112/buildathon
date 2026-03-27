-- ============================================
-- CREATE TEST USER FOR VOLTPAY
-- ============================================
-- This script creates the test user account
-- Email: test@voltpay.com
-- Password: Test123!
-- ============================================

-- IMPORTANT: This script uses Supabase's auth.users table
-- Run this in your Supabase SQL Editor

-- Step 1: Create the test user in auth.users
-- Note: Supabase will automatically trigger the profile creation
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  invited_at,
  confirmation_token,
  confirmation_sent_at,
  recovery_token,
  recovery_sent_at,
  email_change_token_new,
  email_change,
  email_change_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  created_at,
  updated_at,
  phone,
  phone_confirmed_at,
  phone_change,
  phone_change_token,
  phone_change_sent_at,
  email_change_token_current,
  email_change_confirm_status,
  banned_until,
  reauthentication_token,
  reauthentication_sent_at,
  is_sso_user,
  deleted_at
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'test@voltpay.com',
  crypt('Test123!', gen_salt('bf')), -- Encrypts the password
  NOW(),
  NULL,
  '',
  NULL,
  '',
  NULL,
  '',
  '',
  NULL,
  NULL,
  '{"provider":"email","providers":["email"]}',
  '{"full_name":"Test User","business_name":"Test Business"}',
  FALSE,
  NOW(),
  NOW(),
  NULL,
  NULL,
  '',
  '',
  NULL,
  '',
  0,
  NULL,
  '',
  NULL,
  FALSE,
  NULL
)
ON CONFLICT (email) DO NOTHING;

-- Verify the user was created
SELECT 
  id,
  email,
  email_confirmed_at,
  created_at,
  raw_user_meta_data->>'full_name' as full_name,
  raw_user_meta_data->>'business_name' as business_name
FROM auth.users 
WHERE email = 'test@voltpay.com';

-- Check if profile was auto-created
SELECT * FROM profiles WHERE email = 'test@voltpay.com';
