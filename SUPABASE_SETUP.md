# Supabase Setup Guide

## Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Sign in with GitHub
3. Click "New Project"
4. Fill in:
   - Name: voltpay
   - Database Password: (generate strong password)
   - Region: Choose closest to Nigeria (e.g., eu-west-1)
5. Click "Create new project"
6. Wait 2-3 minutes for setup

## Step 2: Get API Keys

1. Go to Project Settings (gear icon)
2. Click "API" in sidebar
3. Copy these values:
   - Project URL
   - anon/public key

## Step 3: Create Database Tables

Go to SQL Editor and run this:

```sql
-- Users table (extends Supabase auth)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  business_name TEXT,
  full_name TEXT,
  plan_id TEXT DEFAULT 'basic',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Usage data table
CREATE TABLE usage_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  plan_id TEXT NOT NULL,
  daily_usage DECIMAL NOT NULL,
  monthly_usage DECIMAL NOT NULL,
  monthly_bill DECIMAL NOT NULL,
  extra_charges DECIMAL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payment data table
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  total_bill DECIMAL NOT NULL,
  amount_paid DECIMAL NOT NULL,
  remaining_balance DECIMAL NOT NULL,
  status TEXT CHECK (status IN ('paid', 'pending', 'overdue')) DEFAULT 'pending',
  due_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Policies for usage_data
CREATE POLICY "Users can view own usage" ON usage_data
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own usage" ON usage_data
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own usage" ON usage_data
  FOR UPDATE USING (auth.uid() = user_id);

-- Policies for payments
CREATE POLICY "Users can view own payments" ON payments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own payments" ON payments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own payments" ON payments
  FOR UPDATE USING (auth.uid() = user_id);

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to auto-create profile
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## Step 4: Configure Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Step 5: Test Connection

Run the app and try signing up. Check Supabase dashboard to see if user was created.

## Verification

- Go to Authentication tab - should see new users
- Go to Table Editor - should see data in tables
- Test login/logout functionality
