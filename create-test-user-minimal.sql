-- ============================================
-- MINIMAL TEST USER CREATION
-- ============================================
-- Run this in Supabase SQL Editor
-- If user already exists, delete first or use Dashboard
-- ============================================

-- Step 1: Create the user
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
  email_change,
  email_change_token_new,
  recovery_token
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'test@voltpay.com',
  crypt('Test123!', gen_salt('bf')),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{"full_name":"Test User","business_name":"Test Business"}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
)
RETURNING id, email;

-- Step 2: Create identity (use the ID from step 1)
INSERT INTO auth.identities (
  id,
  user_id,
  identity_data,
  provider,
  created_at,
  updated_at
)
SELECT 
  gen_random_uuid(),
  id,
  jsonb_build_object('sub', id::text, 'email', email),
  'email',
  NOW(),
  NOW()
FROM auth.users
WHERE email = 'test@voltpay.com';

-- Step 3: Verify user was created
SELECT 
  id,
  email,
  email_confirmed_at,
  'User created! Login with test@voltpay.com / Test123!' as message
FROM auth.users 
WHERE email = 'test@voltpay.com';
