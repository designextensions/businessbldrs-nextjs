import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "./schema";

neonConfig.webSocketConstructor = ws;

// Use a placeholder during build/SSG when DATABASE_URL is not available.
// The actual connection string is required at runtime.
const connectionString = process.env.DATABASE_URL ?? 'postgresql://placeholder:placeholder@localhost/placeholder';

export const pool = new Pool({
  connectionString,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

pool.on('error', (err: Error) => {
  console.error('[db] Pool client error (connection dropped by server):', err.message);
});

export const db = drizzle({ client: pool, schema });

const RETRYABLE_CODES = new Set([
  '57P01',
  '57P02',
  '57P03',
  '08006',
  '08001',
  '08003',
  '08004',
]);

export async function withRetry<T>(fn: () => Promise<T>, maxRetries = 2): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err: unknown) {
      lastError = err;
      const code = (err as any)?.code || '';
      const msg = ((err as any)?.message || '').toLowerCase();
      const isRetryable = RETRYABLE_CODES.has(code) ||
        msg.includes('terminating connection') ||
        msg.includes('connection terminated') ||
        msg.includes('connection refused') ||
        msg.includes('connection reset');

      if (!isRetryable || attempt >= maxRetries) {
        throw err;
      }

      console.warn(`[db] Retryable error (attempt ${attempt + 1}/${maxRetries + 1}): ${(err as any).message}`);
      await new Promise(r => setTimeout(r, 300 * (attempt + 1)));
    }
  }
  throw lastError;
}
