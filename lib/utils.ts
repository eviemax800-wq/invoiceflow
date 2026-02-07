import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount / 100);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function calculateMRR(subscriptions: Array<{ amount: number; interval: string }>): number {
  return subscriptions.reduce((total, sub) => {
    const monthlyAmount = sub.interval === "year" ? sub.amount / 12 : sub.amount;
    return total + monthlyAmount;
  }, 0);
}

export function calculateChurnRate(
  activeStart: number,
  activeEnd: number,
  canceledInPeriod: number
): number {
  if (activeStart === 0) return 0;
  return (canceledInPeriod / activeStart) * 100;
}
