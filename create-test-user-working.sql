-- ============================================
-- CREATE TEST USER FOR VOLTPAY
-- ============================================
-- Run this in Supabase SQL Editor
-- Creates test@voltpay.com with password Test123!
-- ============================================

DO $$
DECLARE
  new_user_id uuid;
BEGIN
  -- Generate a new UUID for the user
  new_user_id := gen_random_uuid();
  
  -- 1. Insert into auth.users
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
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
    NOW(),
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
  ON CONFLICT (email) DO UPDATE
  SET 
    encrypted_password = EXCLUDED.encrypted_password,
    email_confirmed_at = NOW(),
    updated_at = NOW()
  RETURNING id INTO new_user_id;

  -- 2. Insert into auth.identities
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
  )
  ON CONFLICT (provider, user_id) DO NOTHING;

  -- 3. Insert into profiles (if not created by trigger)
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
  )
  ON CONFLICT (id) DO UPDATE
  SET 
    full_name = EXCLUDED.full_name,
    business_name = EXCLUDED.business_name,
    updated_at = NOW();

  -- 4. Create a subscription for the test user (Standard plan)
  INSERT INTO subscriptions (
    user_id,
    plan_type,
    status,
    start_date,
    monthly_limit,
    extra_rate,
    base_price,
    created_at,
    updated_at
  )
  VALUES (
    new_user_id,
    'standard',
    'active',
    NOW(),
    1200,
    40,
    25000,
    NOW(),
    NOW()
  )
  ON CONFLICT DO NOTHING;

  -- 5. Add some sample energy usage data for the dashboard
  INSERT INTO energy_usage (
    user_id,
    subscription_id,
    date,
    daily_usage,
    peak_usage,
    off_peak_usage,
    cost,
    created_at
  )
  SELECT 
    new_user_id,
    s.id,
    CURRENT_DATE - (n || ' days')::interval,
    20 + (random() * 15)::numeric(10,2),
    12 + (random() * 8)::numeric(10,2),
    8 + (random() * 7)::numeric(10,2),
    (20 + (random() * 15)) * 50,
    NOW()
  FROM subscriptions s, generate_series(0, 29) n
  WHERE s.user_id = new_user_id
  ON CONFLICT (user_id, date) DO NOTHING;

  -- 6. Create a completed payment record
  INSERT INTO payments (
    user_id,
    subscription_id,
    amount,
    status,
    payment_method,
    transaction_ref,
    payment_date,
    created_at,
    updated_at
  )
  SELECT 
    new_user_id,
    s.id,
    25000.00,
    'completed',
    'card',
    'TEST-' || new_user_id::text,
    NOW() - interval '5 days',
    NOW(),
    NOW()
  FROM subscriptions s
  WHERE s.user_id = new_user_id
  ON CONFLICT (transaction_ref) DO NOTHING;

  -- 7. Create an invoice
  INSERT INTO invoices (
    user_id,
    subscription_id,
    invoice_number,
    amount,
    status,
    due_date,
    paid_date,
    created_at,
    updated_at
  )
  SELECT 
    new_user_id,
    s.id,
    'INV-2026-TEST',
    25000.00,
    'paid',
    CURRENT_DATE + interval '25 days',
    NOW() - interval '5 days',
    NOW(),
    NOW()
  FROM subscriptions s
  WHERE s.user_id = new_user_id
  ON CONFLICT (invoice_number) DO NOTHING;

  RAISE NOTICE '✅ Test user created successfully!';
  RAISE NOTICE 'User ID: %', new_user_id;
  RAISE NOTICE 'Email: test@voltpay.com';
  RAISE NOTICE 'Password: Test123!';
  RAISE NOTICE 'Login at: https://voltpaybuild.vercel.app/auth/signin';
END $$;

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Check if user was created
SELECT 
  id,
  email,
  email_confirmed_at,
  created_at,
  raw_user_meta_data->>'full_name' as full_name
FROM auth.users 
WHERE email = 'test@voltpay.com';

-- Check profile
SELECT * FROM profiles WHERE email = 'test@voltpay.com';

-- Check subscription
SELECT 
  plan_type,
  status,
  monthly_limit,
  base_price
FROM subscriptions 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'test@voltpay.com');

-- Check energy usage count
SELECT COUNT(*) as usage_records
FROM energy_usage 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'test@voltpay.com');

-- Check payment
SELECT 
  amount,
  status,
  payment_method,
  payment_date
FROM payments 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'test@voltpay.com');

-- ============================================
-- SUCCESS MESSAGE
-- ============================================
SELECT '✅ Test user setup complete! You can now login with test@voltpay.com / Test123!' as message;
