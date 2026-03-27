-- ============================================
-- CREATE TEST USER - SIMPLE VERSION
-- ============================================
-- Run this in Supabase SQL Editor
-- Creates test@voltpay.com with password Test123!
-- ============================================

DO $$
DECLARE
  new_user_id uuid;
  existing_user_id uuid;
BEGIN
  -- Check if user already exists
  SELECT id INTO existing_user_id
  FROM auth.users
  WHERE email = 'test@voltpay.com';

  IF existing_user_id IS NOT NULL THEN
    RAISE NOTICE '⚠️  User already exists with ID: %', existing_user_id;
    RAISE NOTICE 'You can login with: test@voltpay.com / Test123!';
    RETURN;
  END IF;

  -- Generate new UUID
  new_user_id := gen_random_uuid();
  
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
    email_change,
    email_change_token_new,
    recovery_token
  )
  VALUES (
    '00000000-0000-0000-0000-000000000000',
    new_user_id,
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
  );

  -- Insert into auth.identities
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
    gen_random_uuid(),
    new_user_id,
    jsonb_build_object(
      'sub', new_user_id::text,
      'email', 'test@voltpay.com'
    ),
    'email',
    NOW(),
    NOW(),
    NOW()
  );

  -- Insert into profiles (if not created by trigger)
  INSERT INTO profiles (
    id,
    email,
    full_name,
    business_name,
    created_at,
    updated_at
  )
  VALUES (
    new_user_id,
    'test@voltpay.com',
    'Test User',
    'Test Business',
    NOW(),
    NOW()
  );

  RAISE NOTICE '✅ Test user created successfully!';
  RAISE NOTICE 'User ID: %', new_user_id;
  RAISE NOTICE 'Email: test@voltpay.com';
  RAISE NOTICE 'Password: Test123!';
  RAISE NOTICE 'Login at: https://voltpaybuild.vercel.app/auth/signin';
  
EXCEPTION
  WHEN unique_violation THEN
    RAISE NOTICE '⚠️  User already exists!';
    RAISE NOTICE 'You can login with: test@voltpay.com / Test123!';
  WHEN OTHERS THEN
    RAISE EXCEPTION 'Error creating user: %', SQLERRM;
END $$;

-- ============================================
-- VERIFICATION
-- ============================================

-- Check if user was created
SELECT 
  id,
  email,
  email_confirmed_at,
  created_at,
  raw_user_meta_data->>'full_name' as full_name,
  raw_user_meta_data->>'business_name' as business_name
FROM auth.users 
WHERE email = 'test@voltpay.com';

-- Check profile
SELECT 
  id,
  email,
  full_name,
  business_name,
  created_at
FROM profiles 
WHERE email = 'test@voltpay.com';

-- Success message
SELECT '✅ Setup complete! Login with test@voltpay.com / Test123!' as message;
