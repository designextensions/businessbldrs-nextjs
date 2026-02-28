import { useState, useCallback, useEffect } from 'react';
import {
  getDownloadCount,
  hasProvidedEmail,
  recordDownload,
  setUserCredentials,
  getUserCredentials,
  hasDownloadedResource
} from '@/lib/download-tracker';

interface UseDownloadGateResult {
  /** Whether the user can download for free (first download or has email) */
  canDownloadFree: boolean;
  /** Whether the user has provided their email */
  hasEmail: boolean;
  /** Current download count */
  downloadCount: number;
  /** Record a download for a resource */
  recordDownload: (resourceId: number) => void;
  /** Store user credentials after email capture */
  setCredentials: (email: string, name: string, company?: string) => void;
  /** Check if a specific resource requires gating */
  shouldGateDownload: (resourceId: number, requiresEmail?: boolean) => boolean;
  /** Get stored user credentials */
  credentials: { email: string; name: string; company?: string } | null;
  /** Check if a resource was already downloaded */
  hasDownloaded: (resourceId: number) => boolean;
}

/**
 * Custom hook for managing download gating logic
 *
 * Flow:
 * - First download is always free
 * - Second+ download requires email (unless already provided)
 * - Resources marked with requiresEmail always require email
 */
export function useDownloadGate(): UseDownloadGateResult {
  const [downloadCount, setDownloadCount] = useState(0);
  const [hasEmail, setHasEmail] = useState(false);
  const [credentials, setCredentialsState] = useState<{ email: string; name: string; company?: string } | null>(null);

  // Initialize state from localStorage
  useEffect(() => {
    setDownloadCount(getDownloadCount());
    setHasEmail(hasProvidedEmail());
    const storedCredentials = getUserCredentials();
    if (storedCredentials) {
      setCredentialsState({
        email: storedCredentials.email,
        name: storedCredentials.name,
        company: storedCredentials.company
      });
    }
  }, []);

  // User can download free if:
  // 1. They haven't downloaded anything yet (first download free)
  // 2. They've already provided their email
  const canDownloadFree = downloadCount === 0 || hasEmail;

  const handleRecordDownload = useCallback((resourceId: number) => {
    recordDownload(resourceId);
    setDownloadCount(getDownloadCount());
  }, []);

  const handleSetCredentials = useCallback((email: string, name: string, company?: string) => {
    setUserCredentials(email, name, company);
    setHasEmail(true);
    setCredentialsState({ email, name, company });
  }, []);

  /**
   * Determine if a download should be gated
   * @param resourceId - The resource ID
   * @param requiresEmail - Whether the resource is marked as requiring email (from admin panel)
   * @returns true if the download should show the email modal
   */
  const shouldGateDownload = useCallback((resourceId: number, requiresEmail?: boolean): boolean => {
    // If user has already provided email, never gate
    if (hasProvidedEmail()) {
      return false;
    }

    // If resource requires email (marked in admin), always gate
    if (requiresEmail) {
      return true;
    }

    // If this is the first download (count is 0), don't gate
    if (getDownloadCount() === 0) {
      return false;
    }

    // Otherwise, gate the download (2nd+ download without email)
    return true;
  }, []);

  const handleHasDownloaded = useCallback((resourceId: number): boolean => {
    return hasDownloadedResource(resourceId);
  }, []);

  return {
    canDownloadFree,
    hasEmail,
    downloadCount,
    recordDownload: handleRecordDownload,
    setCredentials: handleSetCredentials,
    shouldGateDownload,
    credentials,
    hasDownloaded: handleHasDownloaded
  };
}
