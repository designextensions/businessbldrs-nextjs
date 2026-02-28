// Clean, simple fallback image component for resources without images
export const FallbackResourceImage = ({ title, category }: { title: string; category?: string }) => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700">
      <div className="text-center p-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-yellow-400/20 rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-yellow-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
        </div>
        <p className="text-gray-300 text-sm font-medium line-clamp-2">{title}</p>
        {category && (
          <p className="text-gray-500 text-xs mt-1">{category}</p>
        )}
      </div>
    </div>
  );
};

export const FallbackDownloadImage = ({ type, category }: { type: string; category?: string }) => {
  const getIcon = () => {
    switch(type.toLowerCase()) {
      case 'pdf':
        return (
          <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3 3h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8z"/>
            <text x="12" y="16" textAnchor="middle" className="text-xs font-bold fill-white">PDF</text>
          </svg>
        );
      case 'template':
      case 'word':
      case 'doc':
        return (
          <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14 2v6h6"/>
            <text x="12" y="16" textAnchor="middle" className="text-xs font-bold fill-white">DOC</text>
          </svg>
        );
      case 'spreadsheet':
      case 'excel':
        return (
          <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14 2v6h6"/>
            <text x="12" y="16" textAnchor="middle" className="text-xs font-bold fill-white">XLS</text>
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full h-32 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700 rounded-lg">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-2 bg-gray-700/50 rounded-lg flex items-center justify-center">
          {getIcon()}
        </div>
        {category && (
          <p className="text-gray-400 text-xs">{category}</p>
        )}
      </div>
    </div>
  );
};