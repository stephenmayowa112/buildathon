# ⚡ VOLTPAY - Solar Energy Subscription Platform

> Empowering businesses with clean, affordable solar energy through flexible subscription plans

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://voltpaybuild.vercel.app)
[![Built with Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Powered by Supabase](https://img.shields.io/badge/Supabase-Auth-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Interswitch Payment](https://img.shields.io/badge/Interswitch-Payment-blue?style=for-the-badge)](https://www.interswitchgroup.com/)

---

## 🌐 Live Application

**Production URL:** [https://voltpaybuild.vercel.app](https://voltpaybuild.vercel.app)

---

## 🔑 Test Credentials

### Demo User Account
```
Email: test@voltpay.com
Password: Test123!
```

### Test Payment Details
```
Card Number: 5060990580000217499
CVV: 111
Expiry: 03/50
PIN: 1111
OTP: 123456
```

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Payment Integration](#payment-integration)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Team](#team)

---

## 🎯 Overview

VOLTPAY is a comprehensive solar energy subscription platform designed for small and medium-sized businesses in Nigeria. The platform enables businesses to:

- Subscribe to flexible solar energy plans
- Track real-time energy consumption
- Manage billing and payments seamlessly
- Monitor usage analytics and forecasts
- Make secure payments via Interswitch

### Problem Statement

Many Nigerian businesses struggle with:
- High electricity costs
- Unreliable power supply
- Complex solar installation processes
- Lack of flexible payment options

### Our Solution

VOLTPAY provides a subscription-based model where businesses can:
- Choose plans that match their energy needs
- Pay monthly with transparent pricing
- Track usage in real-time
- Scale up or down as needed

---

## ✨ Features

### 🔐 Authentication & User Management
- User registration with email verification
- Secure login/logout
- Password reset functionality
- Profile management
- Session persistence

### 📊 Subscription Plans
- **Basic Plan**: 600 kWh/month - ₦15,000
- **Standard Plan**: 1200 kWh/month - ₦25,000 (Most Popular)
- **Premium Plan**: 2500 kWh/month - ₦45,000
- Flexible monthly or yearly billing (20% discount on yearly)

### 📈 Energy Monitoring
- Real-time usage tracking
- Daily and monthly consumption reports
- Usage forecasting
- Peak vs off-peak analysis
- Cost predictions

### 💳 Payment Integration
- Interswitch payment gateway integration
- Secure card payments
- Transaction history
- Invoice generation
- Payment status tracking

### 🎨 User Experience
- Beautiful glassmorphism design
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Accessible UI components
- Dark mode support

### 📱 Dashboard Features
- Usage analytics with charts
- Billing overview
- Payment history
- Plan management
- Energy simulator

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide icons
- **Animations**: CSS animations + Framer Motion concepts

### Backend & Database
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)
- **Storage**: Supabase Storage
- **Real-time**: Supabase Realtime

### Payment
- **Gateway**: Interswitch WebPAY
- **Mode**: TEST (Sandbox)

### Deployment
- **Platform**: Vercel
- **CI/CD**: Automatic deployments from main branch

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account
- Interswitch test credentials

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/[YOUR-USERNAME]/voltpay.git
cd voltpay
```

> **Note:** Replace `[YOUR-USERNAME]` with your actual GitHub username

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Interswitch Test Credentials
NEXT_PUBLIC_INTERSWITCH_MERCHANT_CODE=MX6072
NEXT_PUBLIC_INTERSWITCH_PAY_ITEM_ID=9405967
NEXT_PUBLIC_INTERSWITCH_CLIENT_ID=your_client_id
NEXT_PUBLIC_INTERSWITCH_CLIENT_SECRET=your_client_secret
```

4. **Set up the database**

Run the SQL script in your Supabase SQL Editor:
```bash
# File: supabase-setup.sql
# Copy and paste the contents into Supabase SQL Editor
```

5. **Configure Supabase Authentication**

In Supabase Dashboard:
- Go to Authentication → Settings
- Set Site URL: `http://localhost:3000`
- Add Redirect URLs (see `SUPABASE_REDIRECT_URLS.md`)
- Disable email confirmation (or configure SMTP)

6. **Run the development server**
```bash
npm run dev
```

7. **Open your browser**
```
http://localhost:3000
```

---

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | `eyJhbGc...` |
| `NEXT_PUBLIC_INTERSWITCH_MERCHANT_CODE` | Interswitch merchant code | `MX6072` |
| `NEXT_PUBLIC_INTERSWITCH_PAY_ITEM_ID` | Interswitch pay item ID | `9405967` |
| `NEXT_PUBLIC_INTERSWITCH_CLIENT_ID` | Interswitch client ID | `IKIAB...` |
| `NEXT_PUBLIC_INTERSWITCH_CLIENT_SECRET` | Interswitch client secret | `secret` |

### Getting Credentials

**Supabase:**
1. Create project at [supabase.com](https://supabase.com)
2. Go to Settings → API
3. Copy URL and anon key

**Interswitch:**
1. Register at [Interswitch Developer Portal](https://developer.interswitchgroup.com/)
2. Create test application
3. Get test credentials

---

## 🗄️ Database Setup

### Tables Created

The `supabase-setup.sql` script creates:

1. **profiles** - User profile information
2. **subscriptions** - User subscription plans
3. **energy_usage** - Daily energy consumption records
4. **payments** - Payment transactions
5. **invoices** - Billing invoices

### Row Level Security (RLS)

All tables have RLS enabled with policies ensuring users can only access their own data.

### Setup Instructions

1. Open Supabase Dashboard
2. Navigate to SQL Editor
3. Create new query
4. Copy contents from `supabase-setup.sql`
5. Execute the script
6. Verify tables are created

---

## 💳 Payment Integration

### Interswitch WebPAY Integration

The platform uses Interswitch WebPAY for secure payment processing.

**Test Mode Configuration:**
- Merchant Code: `MX6072`
- Pay Item ID: `9405967`
- Mode: TEST

**Test Cards:**
```
Verve Card:
Card: 5060990580000217499
CVV: 111
Expiry: 03/50
PIN: 1111
OTP: 123456

Mastercard:
Card: 5060990580000217499
CVV: 111
Expiry: 03/50
```

**Payment Flow:**
1. User selects plan
2. Redirects to Interswitch payment page
3. User enters card details
4. Payment processed
5. Redirects back to success page
6. Transaction recorded in database

**Implementation Files:**
- `lib/interswitch.ts` - Payment initialization
- `app/dashboard/payment/page.tsx` - Payment page
- `app/payment/success/page.tsx` - Success callback

---

## 📁 Project Structure

```
voltpay/
├── app/                          # Next.js app directory
│   ├── auth/                     # Authentication pages
│   │   ├── signin/              # Sign in page
│   │   ├── signup/              # Sign up page
│   │   ├── forgot-password/     # Password reset request
│   │   ├── reset-password/      # Password reset form
│   │   └── callback/            # Auth callback handler
│   ├── dashboard/               # Dashboard pages
│   │   ├── page.tsx            # Main dashboard
│   │   ├── energy/             # Energy monitoring
│   │   ├── billing/            # Billing history
│   │   ├── payment/            # Payment page
│   │   ├── reports/            # Usage reports
│   │   └── settings/           # User settings
│   ├── onboarding/             # Onboarding flow
│   │   └── plans/              # Plan selection
│   ├── payment/                # Payment pages
│   │   └── success/            # Payment success
│   ├── simulator/              # Energy simulator
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── components/                  # Reusable components
│   ├── Navbar.tsx              # Navigation bar
│   └── Footer.tsx              # Footer
├── lib/                        # Utility functions
│   ├── auth.ts                 # Authentication functions
│   ├── supabase.ts             # Supabase client
│   ├── interswitch.ts          # Payment integration
│   ├── billing.ts              # Billing calculations
│   └── database.ts             # Database helpers
├── types/                      # TypeScript types
│   └── index.ts                # Type definitions
├── public/                     # Static assets
│   └── images/                 # Images
├── supabase-setup.sql          # Database setup script
├── .env.local                  # Environment variables
├── .env.example                # Environment template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind config
└── next.config.js              # Next.js config
```

---

## 📚 API Documentation

### Authentication Endpoints

```typescript
// Sign up
POST /api/auth/signup
Body: { email, password, fullName, businessName }

// Sign in
POST /api/auth/signin
Body: { email, password }

// Sign out
POST /api/auth/signout

// Reset password
POST /api/auth/reset-password
Body: { email }
```

### Subscription Endpoints

```typescript
// Get user subscription
GET /api/subscriptions

// Create subscription
POST /api/subscriptions
Body: { planType, userId }

// Update subscription
PATCH /api/subscriptions/:id
Body: { planType, status }
```

### Payment Endpoints

```typescript
// Initialize payment
POST /api/payments/initialize
Body: { amount, email, planType }

// Verify payment
GET /api/payments/verify/:reference

// Get payment history
GET /api/payments/history
```

---

## 🚀 Deployment

### Vercel Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

**Production URL:** https://voltpaybuild.vercel.app

**Deployment Steps:**
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

**Environment Variables on Vercel:**
- Add all variables from `.env.local`
- Ensure production Supabase credentials
- Configure Interswitch production keys (when ready)

---

## 📸 Screenshots

### Homepage
![Homepage](public/images/homepage-screenshot.png)
*Beautiful landing page with glassmorphism design*

### Dashboard
![Dashboard](public/images/dashboard-screenshot.png)
*Comprehensive dashboard with usage analytics*

### Energy Monitoring
![Energy Monitoring](public/images/energy-screenshot.png)
*Real-time energy consumption tracking*

### Payment
![Payment](public/images/payment-screenshot.png)
*Secure Interswitch payment integration*

---

## 📖 Documentation

Additional documentation available:

- `SUPABASE_SETUP.md` - Complete Supabase configuration guide
- `SUPABASE_REDIRECT_URLS.md` - Redirect URLs configuration
- `AUTH_IMPLEMENTATION_SUMMARY.md` - Authentication implementation details
- `ANIMATIONS_GUIDE.md` - Animation system documentation
- `API_DOCUMENTATION.md` - API endpoints documentation
- `INTERSWITCH_INTEGRATION.md` - Payment integration guide
- `SETUP_CHECKLIST.md` - Setup checklist

---

## 🧪 Testing

### Run Tests
```bash
npm run test
```

### Test User Flows

1. **Sign Up Flow**
   - Navigate to `/auth/signup`
   - Fill in details
   - Submit form
   - Redirected to `/onboarding/plans`

2. **Payment Flow**
   - Select a plan
   - Click "Subscribe"
   - Enter test card details
   - Complete payment
   - Verify success page

3. **Dashboard Flow**
   - Sign in
   - View usage statistics
   - Check billing information
   - Navigate through sections

---

## 🔒 Security

- ✅ Row Level Security (RLS) enabled
- ✅ Secure authentication with Supabase
- ✅ HTTPS enforced in production
- ✅ Environment variables secured
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ CSRF protection

---

## 🐛 Known Issues

- Email verification disabled for faster onboarding (can be re-enabled)
- Test mode only for Interswitch payments
- Some animations may be reduced on low-end devices

---

## 🚧 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] Social authentication (Google, Facebook)
- [ ] Multi-factor authentication (MFA)
- [ ] Advanced analytics dashboard
- [ ] SMS notifications
- [ ] Referral program
- [ ] Admin dashboard
- [ ] API for third-party integrations

---

## 👥 Team

**Team Lead:** Stephen Ojunde
**Project:** VOLTPAY - Solar Energy Subscription Platform
**Buildathon:** Enyata x Interswitch Developer Community

---

## 📄 License

This project is part of the Enyata x Interswitch Buildathon 2026.

---

## 🙏 Acknowledgments

- Enyata Community
- Interswitch Developer Community
- Supabase for authentication and database
- Vercel for hosting
- Next.js team for the amazing framework

---

## 📞 Support

For questions or issues:
- Email: support@voltpay.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/voltpay/issues)

---

## 🎯 Submission Details

**Live URL:** https://voltpaybuild.vercel.app

**Test Credentials:**
- Email: test@voltpay.com
- Password: Test123!

**Test Payment:**
- Card: 5060990580000217499
- CVV: 111
- Expiry: 03/50
- PIN: 1111
- OTP: 123456

---

**Built with ❤️ for the Enyata x Interswitch Buildathon 2026**

⚡ **VOLTPAY** - Empowering businesses with clean, affordable solar energy
