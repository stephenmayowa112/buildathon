# VOLTPAY Setup Instructions

## Immediate Actions Required (Before Submission)

### 1. Set Up Supabase (15 minutes)

1. Go to https://supabase.com and sign in with GitHub
2. Click "New Project"
3. Fill in:
   - Name: `voltpay`
   - Database Password: (create a strong password - save it!)
   - Region: `West EU (London)` or closest to Nigeria
4. Click "Create new project" and wait 2-3 minutes

### 2. Create Database Tables

1. In Supabase dashboard, go to "SQL Editor"
2. Click "New Query"
3. Copy and paste the entire SQL from `SUPABASE_SETUP.md`
4. Click "Run" to execute
5. Verify tables were created in "Table Editor"

### 3. Get API Keys

1. Go to Project Settings (gear icon bottom left)
2. Click "API" in sidebar
3. Copy these two values:
   - **Project URL** (looks like: https://xxx.supabase.co)
   - **anon public key** (long string starting with eyJ...)

### 4. Update Environment Variables

1. In your project root, create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=paste_your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_anon_key_here
```

2. In Vercel dashboard:
   - Go to your project settings
   - Click "Environment Variables"
   - Add both variables above
   - Redeploy the project

### 5. Test Everything

1. Run locally: `npm run dev`
2. Go to http://localhost:3000
3. Click "Get Started"
4. Create a new account with real email
5. Check Supabase dashboard - you should see:
   - New user in Authentication tab
   - New profile in profiles table
6. Test sign in with the same credentials
7. Test the dashboard features

### 6. Verify Deployment

1. Go to your Vercel deployment URL
2. Test signup/signin flow
3. Make sure everything works online

## What Was Implemented

- Real Supabase authentication (no more mock login)
- User profiles stored in database
- Usage data persistence
- Payment tracking
- Row Level Security (RLS) for data protection
- Automatic profile creation on signup
- Session management

## Troubleshooting

### "Invalid API key" error
- Check that you copied the correct anon key from Supabase
- Make sure .env.local file is in project root
- Restart dev server after adding env variables

### "Failed to create account" error
- Check Supabase project is running (not paused)
- Verify SQL tables were created correctly
- Check browser console for detailed error

### User created but can't sign in
- Check email confirmation settings in Supabase
- Go to Authentication > Settings
- Disable "Email Confirmations" for testing

### Deployment works locally but not on Vercel
- Verify environment variables are set in Vercel
- Redeploy after adding env variables
- Check Vercel deployment logs for errors

## Important Notes

- Keep your database password safe
- Don't commit .env.local to GitHub (it's in .gitignore)
- The anon key is safe to expose (it's public)
- Test thoroughly before submission deadline

## Quick Commands

```bash
# Install dependencies (if needed)
npm install @supabase/supabase-js

# Run locally
npm run dev

# Build for production
npm run build

# Deploy to Vercel
git push origin main
```

## Support

If you encounter issues:
1. Check Supabase dashboard logs
2. Check browser console for errors
3. Verify all environment variables are set
4. Test with a fresh incognito window

## Submission Checklist

- [ ] Supabase project created
- [ ] Database tables created
- [ ] Environment variables set locally
- [ ] Environment variables set in Vercel
- [ ] Tested signup flow
- [ ] Tested signin flow
- [ ] Tested dashboard features
- [ ] Verified deployment works
- [ ] Tested on mobile device
- [ ] README updated with team contributions

Good luck with your submission! 🚀
