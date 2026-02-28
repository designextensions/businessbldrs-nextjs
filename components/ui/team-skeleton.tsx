export function TeamMemberCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-0 animate-pulse">
      <div className="text-center">
        {/* Avatar skeleton */}
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
        
        {/* Name skeleton */}
        <div className="h-7 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-3/4 mx-auto"></div>
        
        {/* Title skeleton */}
        <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-1/2 mx-auto"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6 mx-auto"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded-full w-32 mx-auto"></div>
      </div>
    </div>
  );
}

export function TeamMemberDetailSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white animate-pulse">
      {/* Header skeleton */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-24">
        <div className="container mx-auto px-6">
          {/* Back button skeleton */}
          <div className="mb-8">
            <div className="h-10 bg-gray-700 rounded w-32"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image skeleton */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto h-96 bg-gray-700 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Profile Info skeleton */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="h-12 bg-gray-700 rounded mb-4 w-3/4"></div>
              <div className="h-8 bg-gray-700 rounded mb-6 w-1/2"></div>
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content skeleton */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content skeleton */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-6 w-1/3"></div>
                <div className="space-y-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar skeleton */}
            <div className="space-y-8">
              {/* Contact card skeleton */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <div className="bg-gray-300 dark:bg-gray-600 h-16 rounded-t-lg"></div>
                <div className="p-6 space-y-4">
                  <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                </div>
              </div>
              
              {/* Fun facts card skeleton */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <div className="bg-gray-300 dark:bg-gray-600 h-16 rounded-t-lg"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}