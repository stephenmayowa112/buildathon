# ⚡ VOLTPAY - Solar Energy Subscription Platform

> Empowering businesses with clean, affordable solar energy through flexible subscription plans

![VOLTPAY](https://img.shields.io/badge/Status-Hackathon%20Ready-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🌟 Overview

VOLTPAY is a comprehensive solar energy subscription management platform designed for small businesses. It provides real-time billing calculations, usage tracking, and payment management with an intuitive, professional interface.

## ✨ Key Features

### 🏠 **Landing Page**
- Hero section with compelling value proposition
- Feature showcase
- Transparent pricing for 3 subscription tiers
- Smooth scroll navigation
- Mobile responsive design

### 🔐 **Authentication**
- Sign in / Sign up flows
- Business account creation
- Password visibility toggle
- Form validation
- Smooth transitions

### 📊 **Dashboard**
- Real-time billing calculations
- Usage statistics cards
- Payment status tracking
- Overdue payment alerts
- Quick action buttons
- Recent payment history

### ⚡ **Energy Management**
- Daily usage input with instant calculations
- Monthly usage projections
- Usage trend visualization
- Plan details with progress bars
- Recent usage logs
- Interactive simulator with slider

### 💳 **Billing & Payments**
- Total bill breakdown
- Payment tracking
- Outstanding balance display
- Transaction history
- Mock payment processing
- Auto-pay scheduling

### 📈 **Analytics & Reports**
- Energy consumption metrics
- Solar vs Generator cost comparison
- Savings calculations
- Peak usage analysis
- CO2 offset tracking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/stephenmayowa112/buildathon.git
cd voltpay
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Run development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Demo Flow (Critical for Hackathon)

### Test the Core Features:

1. **Homepage → Sign Up**
   - Click "Get Started" → Create account → Select plan

2. **Dynamic Billing Test**
   - Go to Dashboard
   - Change daily usage from 7 kWh to 50 kWh
   - ✅ Monthly bill updates instantly
   - ✅ Extra charges appear when exceeding plan limit

3. **Payment Flow**
   - Click "Make Payment" button
   - ✅ Payment status changes to "Paid"
   - ✅ Balance updates to ₦0

4. **Overdue Alert**
   - Due date is set to past date (2025-12-10)
   - ✅ Red alert banner appears automatically
   - ✅ Shows payment overdue message

5. **Energy Simulator**
   - Navigate to "Energy Usage" from sidebar
   - Adjust daily usage slider
   - ✅ See real-time bill calculations

## 📁 Project Structure

```
voltpay/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── auth/
│   │   ├── signin/page.tsx        # Login page
│   │   └── signup/page.tsx        # Registration page
│   ├── dashboard/
│   │   ├── layout.tsx             # Dashboard layout with sidebar
│   │   ├── page.tsx               # Main dashboard
│   │   ├── energy/page.tsx        # Energy usage tracker
│   │   ├── billing/page.tsx       # Billing & payments
│   │   ├── reports/page.tsx       # Analytics reports
│   │   └── settings/page.tsx      # Account settings
│   ├── onboarding/
│   │   └── plans/page.tsx         # Plan selection
│   └── simulator/page.tsx         # Standalone simulator
├── components/
│   ├── Navbar.tsx                 # Landing page navbar
│   └── Footer.tsx                 # Footer component
├── lib/
│   ├── supabase.ts                # Supabase client
│   └── billing.ts                 # Billing calculation logic
├── types/
│   └── index.ts                   # TypeScript definitions
└── public/                        # Static assets
```

## 💡 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Ready for integration)
- **State Management**: React Hooks
- **Routing**: Next.js App Router

## 🎨 Design Principles Applied

### UI/UX Best Practices:
- ✅ Consistent color scheme (Green primary)
- ✅ Clear visual hierarchy
- ✅ Intuitive navigation
- ✅ Responsive design (mobile-first)
- ✅ Loading states
- ✅ Hover effects and transitions
- ✅ Accessible form inputs
- ✅ Clear call-to-action buttons
- ✅ Professional typography
- ✅ Smooth scrolling
- ✅ Custom scrollbars

## 📊 Subscription Plans

| Plan | Price | kWh Limit | Extra Rate | Best For |
|------|-------|-----------|------------|----------|
| **Basic** | ₦60,000/mo | 300 kWh | ₦250/kWh | Small shops |
| **Standard** | ₦90,000/mo | 500 kWh | ₦200/kWh | Growing businesses |
| **Premium** | ₦150,000/mo | 1000 kWh | ₦150/kWh | Large operations |

## 🧮 Billing Logic

```typescript
Monthly Usage = Daily Usage × 30

if (Monthly Usage ≤ Plan Limit) {
  Monthly Bill = Base Price
} else {
  Extra Units = Monthly Usage - Plan Limit
  Extra Cost = Extra Units × Extra Rate
  Monthly Bill = Base Price + Extra Cost
}
```

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## 🎥 Demo Credentials

For testing purposes:
- **Email**: demo@voltpay.com
- **Password**: demo123

## 📝 Future Enhancements

- [ ] Real Supabase integration
- [ ] Actual payment gateway (Paystack/Flutterwave)
- [ ] Email notifications
- [ ] SMS alerts
- [ ] PDF invoice generation
- [ ] Multi-location support
- [ ] Team management
- [ ] API for third-party integrations

## 👥 Team

Built for the 24-hour Hackathon

## 📄 License

MIT License - feel free to use this project for learning and development

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms
- Icons from emoji set
- Built with ❤️ and ☕

---

**⚡ VOLTPAY** - Making solar energy accessible for every business
