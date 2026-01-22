import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function Pay() {
  useEffect(() => {
    window.location.href = 'https://secure.cardknox.com/taubersolutions';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a2b4b] to-[#2c3e50]">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-[#C2983B] animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Redirecting to payment page...</p>
      </div>
    </div>
  );
}