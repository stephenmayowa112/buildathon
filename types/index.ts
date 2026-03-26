export type PlanType = "basic" | "standard" | "premium";

export interface Plan {
  id: PlanType;
  name: string;
  basePrice: number;
  monthlyLimit: number;
  extraRate: number;
  features: string[];
}

export interface UsageData {
  id?: string;
  userId: string;
  planId: PlanType;
  dailyUsage: number;
  monthlyUsage: number;
  monthlyBill: number;
  extraCharges: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface PaymentData {
  id?: string;
  userId: string;
  totalBill: number;
  amountPaid: number;
  remainingBalance: number;
  status: "paid" | "pending" | "overdue";
  dueDate: string;
  createdAt?: string;
  updatedAt?: string;
}

export const PLANS: Record<PlanType, Plan> = {
  basic: {
    id: "basic",
    name: "Basic",
    basePrice: 15000,
    monthlyLimit: 600,
    extraRate: 50,
    features: [
      "600 kWh monthly limit",
      "₦50/kWh extra rate",
      "Basic analytics",
      "Email support (48hrs)",
    ],
  },
  standard: {
    id: "standard",
    name: "Standard",
    basePrice: 25000,
    monthlyLimit: 1200,
    extraRate: 40,
    features: [
      "1200 kWh monthly limit",
      "₦40/kWh extra rate",
      "Advanced analytics",
      "Priority support (24hrs)",
      "Cost forecasting",
    ],
  },
  premium: {
    id: "premium",
    name: "Premium",
    basePrice: 45000,
    monthlyLimit: 2500,
    extraRate: 30,
    features: [
      "2500 kWh monthly limit",
      "₦30/kWh extra rate",
      "Full analytics suite",
      "24/7 priority support",
      "Advanced analytics",
      "Dedicated manager",
    ],
  },
};
