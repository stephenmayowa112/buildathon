# 🎯 VOLTPAY - Hackathon Demo Guide

## 🎬 Demo Script (5-7 minutes)

### **Opening (30 seconds)**
"Hi! I'm presenting VOLTPAY - a solar energy subscription platform that helps small businesses manage their energy costs with real-time billing and transparent pricing."

---

## 📋 Demo Flow

### **1. Landing Page (1 minute)**

**What to show:**
- Scroll through the homepage
- Point out the 3 subscription plans
- Highlight the value proposition

**What to say:**
"VOLTPAY makes solar energy accessible through flexible subscription plans. Businesses can choose from Basic, Standard, or Premium plans based on their energy needs."

**Action:** Click "Get Started" button

---

### **2. Sign Up Flow (30 seconds)**

**What to show:**
- Fill in the signup form quickly
- Show business name field (unique feature)

**What to say:**
"The onboarding is simple - just basic business information and you're ready to go."

**Action:** Submit form → Redirects to plan selection

---

### **3. Plan Selection (30 seconds)**

**What to show:**
- Show the 3 plans side by side
- Highlight the "Most Popular" badge on Standard

**What to say:**
"After signup, users select their plan. Each plan shows the monthly limit, base price, and extra rate for usage beyond the limit."

**Action:** Click "Current Plan" on Standard → Redirects to Dashboard

---

### **4. Dashboard - Core Feature #1: Real-time Billing (2 minutes)**

**What to show:**
- Point out the 4 stat cards at the top
- Show current daily usage (7 kWh)
- Show monthly bill (₦28,800)

**What to say:**
"This is the main dashboard. Currently, the business is using 7 kWh per day, which gives a monthly bill of ₦28,800."

**CRITICAL DEMO:**
1. Scroll to "Current Plan Details" card
2. Point out: "Base Price: ₦90,000, Included: 500 kWh, Extra Rate: ₦200/kWh"
3. Note: "Current usage is 210 kWh (7 × 30), well within the 500 kWh limit"

**Action:** Navigate to "Energy Usage" from sidebar

---

### **5. Energy Simulator - Core Feature #2: Dynamic Calculation (2 minutes)**

**What to show:**
- Current daily usage input
- Real-time calculation card on the right

**What to say:**
"Now let me demonstrate the core feature - real-time billing calculation."

**CRITICAL DEMO STEPS:**

**Step 1:** Change usage from 7 to 20 kWh
- Show monthly usage updates to 600 kWh
- Show bill updates instantly
- Point out: "We've exceeded the 500 kWh limit"

**Step 2:** Change usage to 50 kWh
- Show monthly usage: 1,500 kWh
- Show extra charges appear
- Calculate: "1,500 - 500 = 1,000 extra kWh × ₦200 = ₦200,000 extra"
- Show total bill updates

**What to say:**
"Notice how the bill updates instantly. When we exceed the plan limit, extra charges are automatically calculated and displayed. This transparency helps businesses make informed decisions about their energy usage."

---

### **6. Payment Flow - Core Feature #3 (1 minute)**

**Action:** Go back to Dashboard

**What to show:**
- Scroll to "Quick Actions"
- Click "Make Payment"

**What to say:**
"The payment system is integrated. When a business makes a payment..."

**Show:**
- Payment status changes from "Pending" to "Paid"
- Remaining balance updates to ₦0
- Recent payments list updates

---

### **7. Overdue Alert - Core Feature #4 (30 seconds)**

**What to show:**
- Point to the red alert banner at the top (if visible)
- Show payment status card showing "Overdue"

**What to say:**
"The system automatically tracks due dates. When a payment is overdue, a prominent alert appears, and the payment status updates to help businesses stay on top of their bills."

---

### **8. Additional Features - Quick Tour (1 minute)**

**Billing Page:**
- Click "Billing" in sidebar
- Show transaction history
- Show payment breakdown

**Reports Page:**
- Click "Reports" in sidebar
- Show analytics and savings metrics
- Show solar vs generator comparison

**What to say:**
"Beyond the core features, VOLTPAY includes comprehensive billing history, analytics, and reports to help businesses track their savings and optimize energy usage."

---

### **Closing (30 seconds)**

**What to say:**
"To summarize, VOLTPAY provides:
1. ✅ Real-time billing calculations
2. ✅ Transparent pricing with instant updates
3. ✅ Automated payment tracking
4. ✅ Proactive overdue alerts
5. ✅ Comprehensive analytics

All designed to make solar energy accessible and manageable for small businesses."

**End with:** "Thank you! Happy to answer any questions."

---

## 🎯 Key Points to Emphasize

1. **Real-time calculations** - No page refresh needed
2. **Transparency** - Users see exactly how their bill is calculated
3. **User experience** - Clean, intuitive interface
4. **Business focus** - Built specifically for small businesses
5. **Scalability** - Ready for real backend integration

---

## 🚨 Backup Plan (If Demo Fails)

### If localhost doesn't work:
1. Have screenshots ready
2. Walk through the flow using images
3. Explain the technical implementation

### If internet fails:
1. Demo runs locally (no internet needed)
2. Have video recording as backup

---

## 💡 Potential Questions & Answers

**Q: Is this connected to a real payment gateway?**
A: Currently it's a mock implementation for demo purposes, but the architecture is ready for integration with Paystack or Flutterwave.

**Q: How do you handle real-time updates?**
A: The billing calculations happen client-side using React state management, ensuring instant updates. For production, we'd sync with Supabase for persistence.

**Q: What about mobile users?**
A: The entire platform is fully responsive and works seamlessly on mobile devices.

**Q: Can businesses switch plans?**
A: Yes, there's a plan selection page accessible from the dashboard, and the billing adjusts automatically.

**Q: How accurate are the calculations?**
A: The billing logic follows the exact formula from the PRD: Base Price + (Extra Units × Extra Rate), ensuring accurate calculations every time.

---

## ✅ Pre-Demo Checklist

- [ ] Dev server is running (`npm run dev`)
- [ ] Browser is open to localhost:3000
- [ ] Clear browser cache/cookies
- [ ] Close unnecessary tabs
- [ ] Test the full flow once before presenting
- [ ] Have backup screenshots ready
- [ ] Charge laptop fully
- [ ] Test screen sharing (if virtual)
- [ ] Prepare for questions

---

## 🎨 Demo Tips

1. **Speak clearly and confidently**
2. **Move slowly through the demo** - let features sink in
3. **Highlight the problem you're solving**
4. **Show, don't just tell**
5. **Practice the demo 2-3 times**
6. **Time yourself** - stay within 7 minutes
7. **Smile and make eye contact**
8. **Be ready to skip sections if running long**

---

Good luck! 🚀⚡
