# VOLTPAY - Solar Energy Subscription Platform

A Next.js application for managing solar energy subscriptions with dynamic billing based on usage.

## Features

- 🏠 Landing page with pricing plans
- 📊 Dashboard with real-time billing calculations
- ⚡ Energy usage simulator
- 💳 Payment tracking and management
- 📈 Analytics and reports
- 🔔 Overdue payment alerts

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Backend)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update the Supabase credentials in `.env.local`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── page.tsx              # Landing page
├── layout.tsx            # Root layout
├── globals.css           # Global styles
└── dashboard/
    ├── layout.tsx        # Dashboard layout with sidebar
    ├── page.tsx          # Main dashboard
    ├── energy/           # Energy simulator
    ├── billing/          # Billing & payments
    ├── reports/          # Analytics reports
    └── settings/         # Settings

components/
├── Navbar.tsx            # Landing page navbar
└── Footer.tsx            # Landing page footer

lib/
├── supabase.ts           # Supabase client
└── billing.ts            # Billing calculation logic

types/
└── index.ts              # TypeScript types
```

## Key Features Implementation

### Dynamic Billing Calculation

The billing logic automatically calculates:
- Monthly usage = Daily usage × 30
- Base price from selected plan
- Extra charges when usage exceeds plan limit
- Total monthly bill

### Demo Requirements (Critical)

✅ Change daily usage from 20 kWh to 50 kWh
✅ Monthly bill increases instantly
✅ Exceed plan limit → Extra charges appear
✅ Make mock payment
✅ Trigger overdue alert

## Subscription Plans

- **Basic**: ₦60,000/month - 300 kWh limit - ₦250/kWh extra
- **Standard**: ₦90,000/month - 500 kWh limit - ₦200/kWh extra
- **Premium**: ₦150,000/month - 1000 kWh limit - ₦150/kWh extra

## Development Notes

- All billing calculations happen in real-time on the client
- Payment system is currently mock (no actual payment processing)
- Supabase integration ready for data persistence
- Responsive design with Tailwind CSS

## License

MIT
