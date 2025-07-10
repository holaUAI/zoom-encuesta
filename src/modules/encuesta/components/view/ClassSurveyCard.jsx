import { Calendar, Clock, User } from 'lucide-react';
import { useRatingForm } from '../viewmodel/useRatingForm';
import { useMeetingData } from '../viewmodel/useMeetingData';
import { useHostData } from '../viewmodel/userHostData';
import { Loading } from '../../../shared/partials/loading/Loading';
import { NotLoaded } from '../../../shared/partials/notLoaded/NotLoaded';

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
    return <Loading module={"clase"}/>;
  }

  if (meetingError || !meeting) {
    return <NotLoaded/>;;
  }

  const startDate = new Date(meeting.start_time);
  const endDate = new Date(startDate.getTime() + meeting.duration * 60000);

  return (
    <div className="w-full sm:w-[400px] mx-auto bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
      <div className="flex justify-center">
        <div className="bg-blue-100 p-3 rounded-full">
          <User className="text-blue-600" />
        </div>
      </div>
      <h2 className="text-xl font-semibold">Encuesta de clase</h2>
      <p className="text-gray-500 text-sm">Tu opinión nos ayuda a mejorar.</p>
      <hr />

      <div className="font-semibold text-lg">{meeting.topic}</div>

      <div className="bg-gray-50 rounded-xl p-4 text-left space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <User size={16} /> {participant?.user_name || 'Docente'}
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Calendar size={16} /> {startDate.toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Clock size={16} /> Inicio: {startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Clock size={16} /> Fin: {endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Clock size={16} /> Duración: {meeting.duration} min
        </div>
      </div>

      <hr />
      {!hasSubmitted && (
        <>
          <div className="text-sm font-semibold">Califica tu experiencia</div>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
        </>
      )}

      <button
        onClick={handleSubmit}
        className={`w-full mt-2 py-2 rounded-xl text-white transition ${rating > 0 && !isSaving
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-blue-100 cursor-not-allowed'
          }`}
        disabled={rating === 0 || isSaving || hasSubmitted}
      >
        {isSaving
          ? 'Enviando...'
          : hasSubmitted
            ? '¡Gracias por tu opinión!'
            : 'Enviar Calificación'}
      </button>
    </div>
  );
}
