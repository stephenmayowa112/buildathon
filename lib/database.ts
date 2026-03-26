import { supabase } from "./supabase";
import { UsageData, PaymentData } from "@/types";

// Helper to convert snake_case to camelCase
function toCamelCase(obj: any): any {
  if (!obj) return obj;
  
  const converted: any = {};
  for (const key in obj) {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    converted[camelKey] = obj[key];
  }
  return converted;
}

// Helper to convert camelCase to snake_case
function toSnakeCase(obj: any): any {
  if (!obj) return obj;
  
  const converted: any = {};
  for (const key in obj) {
    const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    converted[snakeKey] = obj[key];
  }
  return converted;
}

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
  const snakeData = toSnakeCase(paymentData);
  const { data, error } = await supabase
    .from("payments")
    .insert([snakeData])
    .select()
    .single();

  if (error) throw error;
  return toCamelCase(data);
}

export async function updatePaymentData(id: string, updates: Partial<PaymentData>) {
  const snakeUpdates = toSnakeCase(updates);
  const { data, error } = await supabase
    .from("payments")
    .update({ ...snakeUpdates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return toCamelCase(data);
}

export async function getUserPayments(userId: string) {
  const { data, error } = await supabase
    .from("payments")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data || []).map(toCamelCase);
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
  return data ? toCamelCase(data) : null;
}
