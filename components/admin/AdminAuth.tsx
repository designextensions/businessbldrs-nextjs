"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Shield, AlertCircle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface AdminUser {
  authenticated: boolean;
  isAdmin: boolean;
  email?: string;
  name?: string;
  profileImageUrl?: string;
}

interface AdminAuthProps {
  onAuthSuccess: () => void;
}

export function AdminAuth({ onAuthSuccess }: AdminAuthProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Check current auth status
  const { data: authStatus, isLoading: checkingAuth, refetch } = useQuery<AdminUser>({
    queryKey: ['/api/admin/auth/status'],
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
  });

  // Check if user has admin access after authentication
  useEffect(() => {
    if (authStatus?.authenticated && authStatus?.isAdmin) {
      onAuthSuccess();
    }
  }, [authStatus, onAuthSuccess]);

  const handleLogin = async () => {
    setIsLoading(true);
    setAuthError(null);

    try {
      // Redirect to Replit Auth login with return URL
      window.location.href = '/api/login?returnTo=/admin';
    } catch (error) {
      console.error('Login error:', error);
      setAuthError('Failed to initiate login. Please try again.');
      setIsLoading(false);
    }
  };

  const handleRetryAuth = () => {
    setAuthError(null);
    refetch();
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardContent className="flex items-center justify-center p-8">
            <div className="flex items-center space-x-3">
              <Loader2 className="h-6 w-6 animate-spin text-orange-600" />
              <span className="text-lg font-medium text-slate-700">Checking authentication...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // User is authenticated but not an admin
  if (authStatus?.authenticated && !authStatus?.isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-800">Access Denied</CardTitle>
            <CardDescription className="text-slate-600">
              You don't have admin privileges for this application.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-amber-200 bg-amber-50">
              <AlertDescription className="text-amber-800">
                <strong>Current user:</strong> {authStatus.email}
              </AlertDescription>
            </Alert>
            <Alert className="border-blue-200 bg-blue-50">
              <AlertDescription className="text-blue-800">
                Contact an administrator to request access. Authorized admins include:
                <ul className="mt-2 ml-4 list-disc text-sm">
                  <li>brandon@businessbldrs.com</li>
                  <li>travis@businessbldrs.com</li>
                  <li>cwright@businessbldrs.com</li>
                  <li>jay@businessbldrs.com</li>
                </ul>
              </AlertDescription>
            </Alert>
            <Button
              onClick={() => window.location.href = '/api/logout'}
              variant="outline"
              className="w-full"
            >
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // User needs to authenticate
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-800">Admin Login Required</CardTitle>
          <CardDescription className="text-slate-600">
            Sign in with your authorized Business Builders account to access the admin panel.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {authError && (
            <Alert className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                {authError}
              </AlertDescription>
            </Alert>
          )}

          <Alert className="border-blue-200 bg-blue-50">
            <AlertDescription className="text-blue-800">
              <strong>Authorized admin emails:</strong>
              <ul className="mt-2 ml-4 list-disc text-sm">
                <li>brandon@businessbldrs.com</li>
                <li>travis@businessbldrs.com</li>
                <li>cwright@businessbldrs.com</li>
                <li>jay@businessbldrs.com</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            <Button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Redirecting...
                </>
              ) : (
                'Sign In with Replit'
              )}
            </Button>

            {authError && (
              <Button
                onClick={handleRetryAuth}
                variant="outline"
                className="w-full"
              >
                Retry Authentication Check
              </Button>
            )}
          </div>

          <div className="text-center text-sm text-slate-500">
            <p>You'll be redirected to Replit for secure authentication.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
