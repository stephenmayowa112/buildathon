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

To use the test credentials below, you must first create the test user in your Supabase database.

### Option 1: Use Supabase Dashboard (FASTEST - 30 seconds)

1. Go to your Supabase Dashboard → Authentication → Users
2. Click "Add user" → "Create new user"
3. Enter:
   - Email: `test@voltpay.com`
   - Password: `Test123!`
   - ✅ Check "Auto Confirm User"
4. Click "Create user"
5. Done! You can now login.

### Option 2: Run SQL Script

<details>
<summary><b>Click to expand SQL Script</b></summary>

Copy the contents of `create-test-user-working.sql` and run it in your Supabase SQL Editor. This will:
- Create the test user with email confirmation
- Set up a Standard plan subscription
- Add 30 days of sample energy usage data
- Create a completed payment record
- Generate an invoice

The script includes verification queries to confirm everything was created successfully.

**Quick SQL (minimal version):**
```sql
DO $$
DECLARE
  new_user_id uuid := gen_random_uuid();
BEGIN
  -- Create user
  INSERT INTO auth.users (
    instance_id, id, aud, role, email, encrypted_password, 
    email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at, confirmation_token, email_change, 
    email_change_token_new, recovery_token
  ) VALUES (
    '00000000-0000-0000-0000-000000000000', new_user_id, 
    'authenticated', 'authenticated', 'test@voltpay.com',
    crypt('Test123!', gen_salt('bf')), NOW(),
    '{"provider":"email","providers":["email"]}',
    '{"full_name":"Test User","business_name":"Test Business"}',
    NOW(), NOW(), '', '', '', ''
  );

  -- Create identity
  INSERT INTO auth.identities (id, user_id, identity_data, provider, created_at, updated_at)
  VALUES (gen_random_uuid(), new_user_id, 
    jsonb_build_object('sub', new_user_id::text, 'email', 'test@voltpay.com'),
    'email', NOW(), NOW());

  RAISE NOTICE 'User created! Login with test@voltpay.com / Test123!';
END $$;
```
</details>

```text
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

### 👨‍💻 Development

**Sole Developer:** Ojunde Stephen Mayowa (Team Lead)

This project was single-handedly developed by Ojunde Stephen Mayowa, who handled:
- ✅ Complete frontend development (Next.js 14 + TypeScript)
- ✅ Backend architecture and API development
- ✅ Database design and implementation (PostgreSQL/Supabase)
- ✅ Authentication system (Supabase Auth)
- ✅ Payment gateway integration (Interswitch WebPAY)
- ✅ UI/UX implementation from designs
- ✅ Responsive design for all devices
- ✅ Animation system and interactions
- ✅ DevOps and deployment (Vercel)
- ✅ Complete documentation

**Lines of Code:** 10,000+
**Development Time:** 2 weeks
**Technologies Mastered:** 8+ (Next.js, TypeScript, Supabase, Tailwind, etc.)

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

### Team Lead & Sole Developer
**Ojunde Stephen Mayowa** - Full Stack Developer & Technical Lead

#### Technical Contributions:
1. **Frontend Development**
   - Built entire Next.js 14 application with TypeScript
   - Implemented all UI components and pages (20+ pages)
   - Created responsive layouts for mobile, tablet, and desktop
   - Developed custom glassmorphism design system
   - Implemented 50+ animations and micro-interactions
   - Built reusable component library

2. **Backend & Database**
   - Designed and implemented PostgreSQL database schema
   - Set up Supabase authentication system
   - Created Row Level Security (RLS) policies
   - Implemented all API endpoints and server functions
   - Built real-time data synchronization

3. **Authentication System**
   - Implemented user registration and login
   - Built password reset functionality
   - Created email verification flow
   - Developed session management
   - Implemented profile management

4. **Payment Integration**
   - Integrated Interswitch WebPAY gateway
   - Built payment initialization and verification
   - Created transaction history tracking
   - Implemented invoice generation system
   - Developed payment success/failure handling

5. **Dashboard & Analytics**
   - Built comprehensive user dashboard
   - Implemented energy usage tracking
   - Created billing calculation engine
   - Developed usage forecasting system
   - Built real-time statistics display

6. **Subscription Management**
   - Implemented three-tier subscription system
   - Built plan selection and comparison
   - Created subscription upgrade/downgrade logic
   - Developed billing cycle management
   - Implemented usage limit tracking

7. **DevOps & Deployment**
   - Configured Vercel deployment pipeline
   - Set up environment variables and secrets
   - Implemented CI/CD workflows
   - Configured domain and SSL
   - Set up monitoring and error tracking

8. **Documentation**
   - Created comprehensive README
   - Wrote API documentation
   - Documented database schema
   - Created setup guides
   - Wrote code comments and inline documentation

**Tech Stack Implemented:**
- Next.js 14, TypeScript, Tailwind CSS
- Supabase (PostgreSQL, Auth, Storage)
- Interswitch Payment Gateway
- Vercel Deployment

---

### Product Designer
**Daniel Ogunleye** - UI/UX Designer

#### Design Contributions:
1. Designed the core user interface (Plan Selection, Dashboard, Payment screens)
2. Created the overall product flow and user experience structure
3. Designed the energy usage and billing dashboard (main feature of the app)
4. Defined interaction behaviors (real-time billing updates, input states, error handling)
5. Worked closely with developer to align UI with billing logic and functionality
6. Contributed to demo flow and overall product

---

### Project Manager
**Okoro Kizito Okechukwu** - Project Manager

#### Management Contributions:
1. Led kick-off meeting to gather team knowledge, expertise and insights
2. Coordinated team, delegating tasks according to individual strengths and skillsets
3. Developed project breakdown blueprint with clear vision and milestones
4. Maintained stakeholder communication with internship Project Manager
5. Provided regular updates and progress reports
6. Ensured alignment between team vision and project objectives

---

### Data Analyst
**Oluwafemi Eniola Dayo** - Data Analyst

#### Analytics Contributions:

**1. Subscription Plan Structure**
- Designed three-tier subscription model with locked pricing
- Defined base prices, consumption limits, and variable rates
- Created plan comparison matrix

| Plan | Base Price | kWh Limit | Extra Rate (₦/kWh) |
|------|-----------|-----------|-------------------|
| Basic | ₦15,000 | 600 | 50 |
| Standard | ₦25,000 | 1,200 | 40 |
| Premium | ₦45,000 | 2,500 | 30 |

**2. Billing Calculation Logic**
- Developed primary billing formula:
  ```
  Monthly Bill = Base Price + (max(0, (Daily Usage × 30) - Plan Limit) × Extra Rate)
  ```
- Logic Breakdown:
  - Monthly Usage = Daily Usage × 30
  - Below or At Limit: Bill = Base Price
  - Above Limit: Bill = Base Price + ((Monthly Usage - Plan Limit) × Extra Rate)

**3. Validation & System Rules**
- Payment Status Logic:
  - Full Payment: Status updates to "Paid" when balance = 0
  - Partial Payment: System updates "Remaining Balance"
- Alert & Warning Triggers:
  - Usage approaching limit notifications
  - Overdue payment alerts
  - Billing cycle reminders

---

## 🏆 Team Structure

**Team Name:** VoltPay
**Project:** Solar Energy Subscription Platform
**Buildathon:** Enyata x Interswitch Developer Community 2026

**Team Composition:**
- 1 Full Stack Developer (Technical Lead)
- 1 UI/UX Designer
- 1 Project Manager
- 1 Data Analyst

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
