-- ============================================
-- SIMPLE TEST USER CREATION
-- ============================================
-- Run this in Supabase SQL Editor
-- This creates a test user that can login
-- ============================================

-- IMPORTANT: This approach manually inserts into auth.users
-- It may not work due to Supabase security restrictions
-- If this fails, use the Supabase Dashboard method instead

-- Generate a UUID for the user
DO $$
DECLARE
  user_id uuid := gen_random_uuid();
BEGIN
  -- Insert into auth.users
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    recovery_token,
    email_change_token_new,
    email_change
  )
  VALUES (
    '00000000-0000-0000-0000-000000000000',
    user_id,
    'authenticated',
    'authenticated',
    'test@voltpay.com',
    crypt('Test123!', gen_salt('bf')),
    NOW(),
    '{"provider": "email", "providers": ["email"]}',
    '{"full_name": "Test User", "business_name": "Test Business"}',
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
  )
  ON CONFLICT (email) DO UPDATE
  SET 
    encrypted_password = EXCLUDED.encrypted_password,
    email_confirmed_at = NOW(),
    updated_at = NOW();

  -- Insert into identities table
  INSERT INTO auth.identities (
    id,
    user_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at
  )
  VALUES (
    user_id,
    user_id,
    jsonb_build_object(
      'sub', user_id::text,
      'email', 'test@voltpay.com'
    ),
    'email',
    NOW(),
    NOW(),
    NOW()
  )
  ON CONFLICT (provider, id) DO NOTHING;

  RAISE NOTICE 'User ID: %', user_id;
  RAISE NOTICE 'Test user created/updated successfully!';
  RAISE NOTICE 'Email: test@voltpay.com';
  RAISE NOTICE 'Password: Test123!';
END $$;

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

-- Check if profile exists
SELECT * FROM profiles WHERE email = 'test@voltpay.com';

-- If profile doesn't exist, create it manually
INSERT INTO profiles (id, email, full_name, business_name, created_at, updated_at)
SELECT 
  id,
  email,
  raw_user_meta_data->>'full_name',
  raw_user_meta_data->>'business_name',
  NOW(),
  NOW()
FROM auth.users
WHERE email = 'test@voltpay.com'
ON CONFLICT (id) DO NOTHING;

-- Final verification
SELECT 
  u.id,
  u.email,
  u.email_confirmed_at,
  p.full_name,
  p.business_name,
  u.created_at
FROM auth.users u
LEFT JOIN profiles p ON u.id = p.id
WHERE u.email = 'test@voltpay.com';
