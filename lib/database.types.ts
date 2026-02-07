export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          updated_at?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          stripe_customer_id: string;
          stripe_subscription_id: string;
          status: string;
          plan_id: string;
          interval: string;
          amount: number;
          current_period_start: string;
          current_period_end: string;
          cancel_at_period_end: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          stripe_customer_id: string;
          stripe_subscription_id: string;
          status: string;
          plan_id: string;
          interval: string;
          amount: number;
          current_period_start: string;
          current_period_end: string;
          cancel_at_period_end?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          status?: string;
          current_period_start?: string;
          current_period_end?: string;
          cancel_at_period_end?: boolean;
          updated_at?: string;
        };
      };
      payments: {
        Row: {
          id: string;
          user_id: string;
          stripe_payment_id: string;
          amount: number;
          currency: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          stripe_payment_id: string;
          amount: number;
          currency: string;
          status: string;
          created_at?: string;
        };
        Update: {
          status?: string;
        };
      };
      activity_logs: {
        Row: {
          id: string;
          user_id: string | null;
          action: string;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          action: string;
          metadata?: Json | null;
          created_at?: string;
        };
        Update: never;
      };
      gmail_connections: {
        Row: {
          id: string;
          user_id: string;
          email: string;
          status: string;
          access_token: string | null;
          refresh_token: string | null;
          scope: string | null;
          expiry: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          email: string;
          status?: string;
          access_token?: string | null;
          refresh_token?: string | null;
          scope?: string | null;
          expiry?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string;
          status?: string;
          access_token?: string | null;
          refresh_token?: string | null;
          scope?: string | null;
          expiry?: string | null;
          updated_at?: string;
        };
      };
      invoices: {
        Row: {
          id: string;
          user_id: string;
          gmail_message_id: string | null;
          thread_id: string | null;
          vendor: string | null;
          amount_cents: number | null;
          currency: string | null;
          invoice_date: string | null;
          category: string | null;
          status: string | null;
          source: string | null;
          raw_data: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          gmail_message_id?: string | null;
          thread_id?: string | null;
          vendor?: string | null;
          amount_cents?: number | null;
          currency?: string | null;
          invoice_date?: string | null;
          category?: string | null;
          status?: string | null;
          source?: string | null;
          raw_data?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          vendor?: string | null;
          amount_cents?: number | null;
          currency?: string | null;
          invoice_date?: string | null;
          category?: string | null;
          status?: string | null;
          raw_data?: Json | null;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
