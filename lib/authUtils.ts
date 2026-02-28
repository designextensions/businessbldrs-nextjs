/**
 * Check if an error is an unauthorized (401) error.
 * Used in admin components to detect session expiry.
 */
export function isUnauthorizedError(error: unknown): boolean {
  if (!error) return false;
  const err = error as any;
  return (
    err?.status === 401 ||
    err?.response?.status === 401 ||
    err?.message?.toLowerCase?.()?.includes?.('unauthorized') ||
    err?.message?.includes?.('401')
  );
}
