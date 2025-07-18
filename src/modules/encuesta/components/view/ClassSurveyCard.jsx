import { Calendar, Clock, User, Star } from 'lucide-react';
import { useRatingForm } from '../viewmodel/useRatingForm';
import { useMeetingData } from '../viewmodel/useMeetingData';
import { useHostData } from '../viewmodel/userHostData';
import { Loading } from '../../../shared/partials/loading/Loading';
import { NotLoaded } from '../../../shared/partials/notLoaded/NotLoaded';
import { parse } from 'date-fns';

export default function ClassSurveyCard({ idMeeting, idHost }) {
  const {
    rating,
    setRating,
    handleSubmit,
    isLoading: isSaving,
    hasSubmitted,
  } = useRatingForm({ idMeeting, idHost });

  const {
    meeting,
    isLoading: isLoadingMeeting,
    isError: meetingError,
  } = useMeetingData(idMeeting);

  const {
    participant,
    isLoading: isLoadingParticipant,
  } = useHostData(idHost);

  if (isLoadingMeeting || isLoadingParticipant) {
    return <Loading module={"clase"} />;
  }

  if (meetingError || !meeting) {
    return <NotLoaded />;
  }

  const startDate = parse(meeting.start_time, "dd/MM/yyyy, HH:mm", new Date());
  const endDate = new Date(startDate.getTime() + meeting.duration * 60000);

  return (
    <div className="w-full sm:w-[400px] mx-auto bg-white rounded-2xl shadow-lg p-6 text-center space-y-4 border border-gray-200 font-sans">
      {/* Encabezado con estrella animada */}
      <div className="flex justify-center animate-bounce">
        <div className="bg-[#F0F4FF] p-3 rounded-full shadow-inner">
          <Star className="text-[#7B61FF] fill-[#7B61FF]" size={24} />
        </div>
      </div>
      <h2 className="text-xl font-semibold text-[#4A4A4A]">Encuesta de clase</h2>
      <p className="text-[#4A4A4A]/80 text-sm">Tu opinión nos ayuda a mejorar.</p>

      <div className="h-px bg-[#E6E8F0] w-full my-2"></div>

      {/* Título de la clase en mayúsculas */}
      <div className="font-semibold text-lg text-[#7B61FF] uppercase tracking-wide">{meeting.topic}</div>

      {/* Contenido de la clase - compacto */}
      <div className="bg-[#F0F4FF] rounded-xl p-2 text-left space-y-1 text-xs">
        <div className="flex items-center gap-2 text-[#4A4A4A]">
          <User size={14} className="text-[#7B61FF]" /> {participant?.user_name || 'Docente'}
        </div>
        <div className="flex items-center gap-2 text-[#4A4A4A]">
          <Calendar size={14} className="text-[#7B61FF]" /> {startDate.toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2 text-[#4A4A4A]">
          <Clock size={14} className="text-[#7B61FF]" /> Inicio: {startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="flex items-center gap-2 text-[#4A4A4A]">
          <Clock size={14} className="text-[#7B61FF]" /> Fin: {endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="flex items-center gap-2 text-[#4A4A4A]">
          <Clock size={14} className="text-[#7B61FF]" /> Duración: {meeting.duration} min
        </div>
      </div>

      <div className="h-px bg-[#E6E8F0] w-full my-2"></div>

      {/* Sección de rating */}
      {!hasSubmitted && (
        <>
          <div className="text-lg font-medium text-[#4A4A4A] mb-3">Califica tu experiencia</div>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-3xl transition-all duration-200 ${star <= rating ? 'text-[#F6C44B] scale-110' : 'text-gray-300 hover:text-[#F6C44B]/70 hover:scale-105'}`}
              >
                ★
              </button>
            ))}
          </div>
        </>
      )}

      {/* Botón */}
      <button
        onClick={handleSubmit}
        className={`w-full mt-2 py-3 rounded-xl text-white font-medium transition-all duration-300 ${rating > 0 && !isSaving
          ? 'bg-[#7B61FF] hover:bg-[#6A50EE] shadow-md hover:shadow-lg'
          : 'bg-[#E6E8F0] cursor-not-allowed'
          }`}
        disabled={rating === 0 || isSaving || hasSubmitted}
      >
        {isSaving
          ? 'Enviando...'
          : hasSubmitted
            ? '¡Gracias por tu opinión!'
            : 'Enviar calificación'}
      </button>
    </div>
  );
}