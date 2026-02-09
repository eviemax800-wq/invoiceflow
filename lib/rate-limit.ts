import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a new ratelimiter that allows 10 requests per 10 seconds
export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "@invoiceflow/ratelimit",
});

// Create a stricter rate limit for expensive operations
export const strictRatelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "60 s"), // 5 requests per minute
  analytics: true,
  prefix: "@invoiceflow/ratelimit/strict",
});

// Rate limit by IP address
export async function checkRateLimit(identifier: string) {
  const { success, limit, reset, remaining } = await ratelimit.limit(identifier);
  
  return {
    success,
    limit,
    reset,
    remaining,
  };
}

// Rate limit expensive operations
export async function checkStrictRateLimit(identifier: string) {
  const { success, limit, reset, remaining } = await strictRatelimit.limit(identifier);
  
  return {
    success,
    limit,
    reset,
    remaining,
  };
}
