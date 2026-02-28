import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<any> {
  // Handle different data types
  let body: string | FormData | undefined;
  let headers: Record<string, string> = {
    // Add cache-control headers to ensure fresh data
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  };

  if (data) {
    if (data instanceof FormData) {
      // Let browser set Content-Type with boundary for FormData
      body = data;
    } else {
      // JSON data
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }
  }

  const res = await fetch(url, {
    method,
    headers,
    body,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return await res.json();
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes — most public data is stable
      gcTime: 10 * 60 * 1000, // 10 minutes — keep data in cache for SPA navigation
      refetchOnMount: true, // Refetch if stale on mount
      retry: (failureCount, error: any) => {
        // Don't retry 4xx errors but retry network issues and 5xx
        const status = parseInt(error?.message, 10);
        if (status >= 400 && status < 500) return false;
        return failureCount < 2;
      },
    },
    mutations: {
      retry: false,
    },
  },
});

// Specific query options for team data that changes infrequently
export const teamQueryOptions = {
  staleTime: 15 * 60 * 1000, // 15 minutes - team data rarely changes
  gcTime: 30 * 60 * 1000, // 30 minutes - keep team data in cache longer
};

// Admin queries must always see fresh data
export const adminQueryOptions = {
  staleTime: 0,
  gcTime: 0,
  refetchOnMount: 'always' as const,
};
