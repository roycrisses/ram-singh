const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;
const store = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (store.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    store.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  store.set(ip, timestamps);
  return false;
}