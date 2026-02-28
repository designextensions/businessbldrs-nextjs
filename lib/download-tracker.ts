/**
 * Download Tracker - LocalStorage utilities for tracking downloads and user credentials
 * Used for the "first download free, then require email" lead generation system
 */

const DOWNLOAD_TRACKING_KEY = 'bb_download_tracking';
const USER_CREDENTIALS_KEY = 'bb_user_credentials';

interface DownloadTracking {
  downloadCount: number;
  downloadedResourceIds: number[];
  firstDownloadAt: string | null;
}

interface UserCredentials {
  email: string;
  name: string;
  company?: string;
  capturedAt: string;
}

/**
 * Get the current download tracking data from localStorage
 */
function getDownloadTracking(): DownloadTracking {
  try {
    const data = localStorage.getItem(DOWNLOAD_TRACKING_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading download tracking:', error);
  }
  return {
    downloadCount: 0,
    downloadedResourceIds: [],
    firstDownloadAt: null
  };
}

/**
 * Save download tracking data to localStorage
 */
function saveDownloadTracking(tracking: DownloadTracking): void {
  try {
    localStorage.setItem(DOWNLOAD_TRACKING_KEY, JSON.stringify(tracking));
  } catch (error) {
    console.error('Error saving download tracking:', error);
  }
}

/**
 * Get the total number of downloads
 */
export function getDownloadCount(): number {
  return getDownloadTracking().downloadCount;
}

/**
 * Get list of downloaded resource IDs
 */
export function getDownloadedResourceIds(): number[] {
  return getDownloadTracking().downloadedResourceIds;
}

/**
 * Check if user has already provided their email
 */
export function hasProvidedEmail(): boolean {
  try {
    const data = localStorage.getItem(USER_CREDENTIALS_KEY);
    if (data) {
      const credentials: UserCredentials = JSON.parse(data);
      return Boolean(credentials.email);
    }
  } catch (error) {
    console.error('Error reading user credentials:', error);
  }
  return false;
}

/**
 * Get stored user credentials
 */
export function getUserCredentials(): UserCredentials | null {
  try {
    const data = localStorage.getItem(USER_CREDENTIALS_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading user credentials:', error);
  }
  return null;
}

/**
 * Record a download (tracks the resource ID and increments count)
 */
export function recordDownload(resourceId: number): void {
  const tracking = getDownloadTracking();

  // Only count if this resource hasn't been downloaded before
  if (!tracking.downloadedResourceIds.includes(resourceId)) {
    tracking.downloadedResourceIds.push(resourceId);
    tracking.downloadCount++;

    if (!tracking.firstDownloadAt) {
      tracking.firstDownloadAt = new Date().toISOString();
    }

    saveDownloadTracking(tracking);
  }
}

/**
 * Store user credentials after email capture
 */
export function setUserCredentials(email: string, name: string, company?: string): void {
  try {
    const credentials: UserCredentials = {
      email,
      name,
      company,
      capturedAt: new Date().toISOString()
    };
    localStorage.setItem(USER_CREDENTIALS_KEY, JSON.stringify(credentials));
  } catch (error) {
    console.error('Error saving user credentials:', error);
  }
}

/**
 * Check if a specific resource has already been downloaded
 */
export function hasDownloadedResource(resourceId: number): boolean {
  return getDownloadTracking().downloadedResourceIds.includes(resourceId);
}

/**
 * Clear all download tracking data (for testing/debugging)
 */
export function clearDownloadTracking(): void {
  try {
    localStorage.removeItem(DOWNLOAD_TRACKING_KEY);
    localStorage.removeItem(USER_CREDENTIALS_KEY);
  } catch (error) {
    console.error('Error clearing download tracking:', error);
  }
}
