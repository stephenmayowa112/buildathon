import { Plan } from "@/types";

export function calculateBilling(dailyUsage: number, plan: Plan) {
  const monthlyUsage = dailyUsage * 30;
  let monthlyBill = plan.basePrice;
  let extraCharges = 0;

  if (monthlyUsage > plan.monthlyLimit) {
    const extraUnits = monthlyUsage - plan.monthlyLimit;
    extraCharges = extraUnits * plan.extraRate;
    monthlyBill = plan.basePrice + extraCharges;
  }

  return {
    monthlyUsage,
    monthlyBill,
    extraCharges,
    extraUnits: monthlyUsage > plan.monthlyLimit ? monthlyUsage - plan.monthlyLimit : 0,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}
