import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto" />
        <p className="mt-4 text-white text-lg">Dammy Tech HUB...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;