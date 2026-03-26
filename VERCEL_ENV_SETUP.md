# Add Environment Variables to Vercel

## Quick Steps (5 minutes)

1. Go to https://vercel.com/dashboard
2. Click on your `voltpay` project
3. Click "Settings" tab at the top
4. Click "Environment Variables" in the left sidebar
5. Add these two variables:

### Variable 1:
- **Key**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://qfayczzgxhlmosywvnac.supabase.co`
- **Environment**: Check all (Production, Preview, Development)
- Click "Save"

### Variable 2:
- **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmYXljenpneGhsbW9zeXd2bmFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MTUwNzgsImV4cCI6MjA5MDA5MTA3OH0.nCSi2qTIl1CkwnaK6Cxvi3U4HKYlT4p186PB9uvabLg`
- **Environment**: Check all (Production, Preview, Development)
- Click "Save"

6. After adding both variables, go to "Deployments" tab
7. Click the three dots (...) on the latest deployment
8. Click "Redeploy"
9. Wait 2-3 minutes for deployment to complete

## Verify It Works

1. Go to your live URL (e.g., https://voltpay-xxx.vercel.app)
2. Click "Get Started"
3. Create a new account
4. You should be redirected to plan selection
5. Check Supabase dashboard - you should see the new user

## Done! ✅

Your app now has a fully functional backend with:
- Real user authentication
- Database storage
- Secure data access
- Session management

Ready for hackathon submission! 🚀
