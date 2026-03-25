// Interswitch Payment Integration

export interface InterswitchConfig {
  clientId: string;
  clientSecret: string;
  merchantCode: string;
  payItemId: string;
  redirectUrl: string;
}

export interface PaymentRequest {
  amount: number;
  customerId: string;
  customerEmail: string;
  customerName: string;
  transactionReference: string;
  currency?: string;
  payItemId: string;
  merchantCode: string;
}

export interface PaymentResponse {
  responseCode: string;
  responseDescription: string;
  transactionReference: string;
  paymentReference: string;
  amount: number;
  retrievalReferenceNumber?: string;
}

// Generate Bearer Token
export async function getInterswitchToken(
  clientId: string,
  clientSecret: string
): Promise<string> {
  const passportUrl = process.env.NEXT_PUBLIC_INTERSWITCH_PASSPORT_URL || 
    "https://sandbox.interswitchng.com/passport/oauth/token";

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  try {
    const response = await fetch(passportUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: "grant_type=client_credentials",
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error getting Interswitch token:", error);
    throw error;
  }
}

// Initialize Inline Payment
export function initializeInlinePayment(
  paymentData: PaymentRequest,
  onSuccess: (response: PaymentResponse) => void,
  onFailure: (error: any) => void
) {
  // @ts-ignore - Interswitch SDK loaded via script
  if (typeof window !== "undefined" && window.webpayCheckout) {
    // @ts-ignore
    window.webpayCheckout({
      merchant_code: paymentData.merchantCode,
      pay_item_id: paymentData.payItemId,
      txn_ref: paymentData.transactionReference,
      amount: paymentData.amount * 100, // Convert to kobo
      currency: paymentData.currency || "566", // NGN
      site_redirect_url: window.location.origin + "/payment/callback",
      onComplete: onSuccess,
      onError: onFailure,
      mode: "TEST", // Change to LIVE in production
    });
  } else {
    console.error("Interswitch SDK not loaded");
    onFailure({ message: "Payment SDK not loaded" });
  }
}

// Query Transaction Status
export async function queryTransactionStatus(
  transactionReference: string,
  token: string
): Promise<PaymentResponse> {
  const queryUrl = `${process.env.NEXT_PUBLIC_INTERSWITCH_API_URL}/api/v1/gettransaction.json`;

  try {
    const response = await fetch(
      `${queryUrl}?merchantcode=${process.env.NEXT_PUBLIC_MERCHANT_CODE}&transactionreference=${transactionReference}&amount=0`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error querying transaction:", error);
    throw error;
  }
}

// Generate unique transaction reference
export function generateTransactionReference(): string {
  return `VOLTPAY_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Format amount to Naira
export function formatAmount(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}
