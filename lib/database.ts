import { supabase } from "./supabase";
import { UsageData, PaymentData } from "@/types";

export async function saveUsageData(usageData: Omit<UsageData, "id" | "createdAt" | "updatedAt">) {
  const { data, error } = await supabase
    .from("usage_data")
    .insert([usageData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateUsageData(id: string, updates: Partial<UsageData>) {
  const { data, error } = await supabase
    .from("usage_data")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserUsageData(userId: string) {
  const { data, error } = await supabase
    .from("usage_data")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data;
}

export async function getAllUserUsageData(userId: string) {
  const { data, error } = await supabase
    .from("usage_data")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function savePaymentData(paymentData: Omit<PaymentData, "id" | "createdAt" | "updatedAt">) {
  const { data, error } = await supabase
    .from("payments")
    .insert([paymentData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updatePaymentData(id: string, updates: Partial<PaymentData>) {
  const { data, error } = await supabase
    .from("payments")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserPayments(userId: string) {
  const { data, error } = await supabase
    .from("payments")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getCurrentPayment(userId: string) {
  const { data, error } = await supabase
    .from("payments")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data;
}
