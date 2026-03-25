# 🚀 VOLTPAY Deployment Guide

## Quick Deploy to Vercel (Recommended - 5 minutes)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub** (Already done ✅)
   ```bash
   git push origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

3. **Import Project**
   - Click "Add New Project"
   - Select your GitHub repository: `stephenmayowa112/buildathon`
   - Click "Import"

4. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)

5. **Environment Variables** (Optional for now)
   - Skip for demo (Supabase not required yet)
   - Or add:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
     ```

6. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your live URL: `https://voltpay-xxx.vercel.app`

---

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? voltpay
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

## Alternative: Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

---

## Alternative: Deploy to Railway

1. **Go to Railway.app**
   - Sign in with GitHub

2. **New Project**
   - Select "Deploy from GitHub repo"
   - Choose `stephenmayowa112/buildathon`

3. **Configure**
   - Railway auto-detects Next.js
   - Click "Deploy"

4. **Get URL**
   - Railway provides a public URL

---

## Testing Your Deployment

After deployment, test these critical flows:

1. ✅ Homepage loads
2. ✅ Sign up flow works
3. ✅ Dashboard loads
4. ✅ Billing calculations work
5. ✅ Navigation between pages works

---

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error: Type errors**
```bash
# Check TypeScript
npm run build
# Fix any type errors shown
```

### Deployment Succeeds but Site Doesn't Load

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Check for console errors in browser

### Images Don't Load

- Ensure images are in `/public` folder
- Use relative paths: `/image.png` not `./image.png`

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test navigation works
- [ ] Test form submissions
- [ ] Test on mobile device
- [ ] Share URL with team
- [ ] Add URL to README
- [ ] Test demo flow end-to-end

---

## Custom Domain (Optional)

### On Vercel:
1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Update DNS records as instructed

---

## Performance Optimization

Already implemented:
- ✅ Next.js automatic code splitting
- ✅ Image optimization ready
- ✅ CSS optimization via Tailwind
- ✅ Fast page loads

---

## Monitoring

### Vercel Analytics (Free)
- Automatically enabled
- View in Vercel dashboard
- See page views, performance metrics

---

## Rollback (If Needed)

### On Vercel:
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

---

## Environment Variables for Production

If you add Supabase later:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

Add these in:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Railway: Project → Variables

---

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Deploy to Vercel
vercel --prod

# Check for errors
npm run lint
```

---

## Support

If deployment fails:
1. Check build logs
2. Test build locally: `npm run build`
3. Check GitHub Actions (if enabled)
4. Contact platform support

---

**Your app is now live! 🎉**

Share your URL and start demoing!
