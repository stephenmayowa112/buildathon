import { Plan } from "@/types";

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  warning?: string;
}

export function validateDailyUsage(dailyUsage: number | string): ValidationResult {
  // Empty Input
  if (dailyUsage === "" || dailyUsage === null || dailyUsage === undefined) {
    return { isValid: false, error: "Please enter daily usage" };
  }

  const usage = typeof dailyUsage === "string" ? parseFloat(dailyUsage) : dailyUsage;

  // Negative Value
  if (usage < 0) {
    return { isValid: false, error: "Invalid usage value" };
  }

  // High Threshold Warning
  if (usage > 100) {
    return { 
      isValid: true, 
      warning: "Realistic threshold warning: Daily usage exceeds 100 kWh" 
    };
  }

  return { isValid: true };
}

export function calculateBilling(dailyUsage: number, plan: Plan) {
  const monthlyUsage = dailyUsage * 30;
  
  // Billing Logic: Monthly Bill = Base Price + (MAX(0, Monthly Usage - Plan Limit) × Extra Rate)
  const extraUnits = Math.max(0, monthlyUsage - plan.monthlyLimit);
  const extraCharges = extraUnits * plan.extraRate;
  const monthlyBill = plan.basePrice + extraCharges;

  return {
    monthlyUsage,
    monthlyBill,
    extraCharges,
    extraUnits,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

export interface PaymentStatus {
  status: "paid" | "pending" | "overdue";
  showOverdueBanner: boolean;
}

export function getPaymentStatus(
  dueDate: string,
  outstandingBalance: number
): PaymentStatus {
  const today = new Date();
  const due = new Date(dueDate);
  
  // Full Payment: Status updates to "Paid" once the balance is 0
  if (outstandingBalance === 0) {
    return { status: "paid", showOverdueBanner: false };
  }
  
  // Overdue Trigger: If the "Due Date" passes and the "Outstanding Balance" is > 0
  if (due < today && outstandingBalance > 0) {
    return { status: "overdue", showOverdueBanner: true };
  }
  
  // Partial Payment: Allowed; updates the "Remaining Balance"
  return { status: "pending", showOverdueBanner: false };
}
