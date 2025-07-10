import React from 'react';
import { Star } from 'lucide-react';

export const Loading = ({ module }) => {
  return (
    <div className="fixed inset-0 bg-[#F0F4FF]/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full mx-4 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="animate-pulse">
            <div className="bg-[#7B61FF] p-4 rounded-full inline-flex">
              <Star className="text-white fill-white animate-spin duration-2000" size={32} />
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">Cargando {module}</h3>
        <p className="text-[#4A4A4A]/80 mb-6">Estamos preparando todo para ti</p>
        
        <div className="w-full bg-[#E6E8F0] rounded-full h-2.5">
          <div 
            className="bg-[#7B61FF] h-2.5 rounded-full animate-loading-progress" 
            style={{ width: '45%' }}
          ></div>
        </div>
        
        <p className="text-xs text-[#4A4A4A]/60 mt-4">Por favor espera un momento...</p>
      </div>
    </div>
  );
};