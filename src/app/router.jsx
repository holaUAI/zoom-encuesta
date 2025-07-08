import { createBrowserRouter } from "react-router-dom";
import EncuestaPage from "../modules/encuesta/pages/ClassSurveyPage";

const NotFoundPage = () => <h1>404 - Página no encontrada</h1>;

const router = createBrowserRouter([
  {
    path: "/:idMeeting/:idHost",
    element: <EncuestaPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
