# VOLTPAY - Solar Energy Subscription Platform

A solar energy subscription management platform for small businesses with real-time billing, usage tracking, and payment management.

## Features

- Landing page with pricing tiers
- User authentication (sign in/sign up)
- Real-time billing calculations
- Energy usage tracking and simulator
- Payment processing and history
- Analytics and reports dashboard
- Mobile responsive design

## Tech Stack

- Next.js 14 with TypeScript
- Tailwind CSS
- Supabase (backend ready)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
voltpay/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── onboarding/        # Plan selection
│   └── simulator/         # Energy simulator
├── components/            # Reusable components
├── lib/                   # Utility functions
└── types/                 # TypeScript types
```

## Subscription Plans

| Plan | Price | kWh Limit | Extra Rate |
|------|-------|-----------|------------|
| Basic | ₦15,000/mo | 600 kWh | ₦50/kWh |
| Standard | ₦25,000/mo | 1200 kWh | ₦40/kWh |
| Premium | ₦45,000/mo | 2500 kWh | ₦30/kWh |

## Billing Logic

```
Monthly Usage = Daily Usage × 30
Monthly Bill = Base Price + (MAX(0, Monthly Usage - Plan Limit) × Extra Rate)
```

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## License

MIT

---

**⚡ VOLTPAY** - Making solar energy accessible for every business
