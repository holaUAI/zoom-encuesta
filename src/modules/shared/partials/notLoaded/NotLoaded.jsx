import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const NotLoaded = () => {
  return (
    <div className="fixed inset-0 bg-[#F0F4FF]/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full mx-4 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full inline-flex">
            <AlertTriangle className="text-red-600" size={32} />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">Error al cargar</h3>
        <p className="text-[#4A4A4A]/80 mb-6">No se pudo cargar la información de la reunión</p>
        
        <div className="space-y-3">
          <p className="text-sm text-[#4A4A4A]/70">
            Por favor, intenta nuevamente más tarde o verifica tu conexión.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-[#7B61FF] text-white rounded-lg hover:bg-[#6A50EE] transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    </div>
  );
};