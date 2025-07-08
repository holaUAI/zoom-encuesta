import { Calendar, Clock, User } from 'lucide-react';
import { useState } from 'react';

export default function ClassSurveyCard() {
  const [rating, setRating] = useState(0);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
      <div className="flex justify-center">
        <div className="bg-blue-100 p-3 rounded-full">
          <User className="text-blue-600" />
        </div>
      </div>
      <h2 className="text-xl font-semibold">Encuesta de clase</h2>
      <p className="text-gray-500 text-sm">Tu opinión nos ayuda a mejorar.</p>
      <hr />

      <div className="font-semibold text-lg">
        Bases Conceptuales de las Políticas Públicas
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-left space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <User size={16} /> Dra. Anya Sharma
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Calendar size={16} /> 15 de noviembre de 2024
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Clock size={16} /> Inicio: 10:30 AM
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Clock size={16} /> Fin: 12:00 PM
        </div>
      </div>

      <hr />
      <div className="text-sm font-semibold">Califica tu experiencia</div>

      <div className="flex justify-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-2xl ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </button>
        ))}
      </div>

      <button
        className={`w-full mt-2 py-2 rounded-xl text-white transition ${
          rating > 0
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-blue-100 cursor-not-allowed'
        }`}
        disabled={rating === 0}
      >
        Enviar Calificación
      </button>
    </div>
  );
}
