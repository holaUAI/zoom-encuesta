import { useParams } from "react-router-dom";
import ClassSurveyCard from "../components/ClassSurveyCard";

export default function EncuestaPage() {
  const { idMeeting, idHost } = useParams();
  console.log(idMeeting, idHost);

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center">
      <ClassSurveyCard idMeeting={idMeeting} idHost={idHost} />
    </div>
  );
}
