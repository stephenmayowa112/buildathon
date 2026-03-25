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
    basePrice: 60000,
    monthlyLimit: 300,
    extraRate: 250,
    features: [
      "300 kWh monthly limit",
      "₦250/kWh extra rate",
      "Basic analytics",
      "Email support (48hrs)",
    ],
  },
  standard: {
    id: "standard",
    name: "Standard",
    basePrice: 90000,
    monthlyLimit: 500,
    extraRate: 200,
    features: [
      "500 kWh monthly limit",
      "₦200/kWh extra rate",
      "Advanced analytics",
      "Priority support (24hrs)",
      "Cost forecasting",
    ],
  },
  premium: {
    id: "premium",
    name: "Premium",
    basePrice: 150000,
    monthlyLimit: 1000,
    extraRate: 150,
    features: [
      "1000 kWh monthly limit",
      "₦150/kWh extra rate",
      "Full analytics suite",
      "24/7 priority support",
      "Advanced analytics",
      "Dedicated manager",
    ],
  },
};
