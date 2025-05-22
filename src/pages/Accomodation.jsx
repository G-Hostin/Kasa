import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import logements from "../data/logements.json";

function Accomodation() {
  const { id } = useParams(); //Récupére l'id dans l'URL (lié au path="/logement/:id" dans le Router)
  const logement = logements.find((item) => item.id === id); //.find() cherche item.id qui correspond à l'id récupéré dans l'URL avec useParams et récupére les infos du logement

  if (!logement) {
    return <Navigate to="/404" />; //Navigate redirige automatiquement comme un window.location
  }

  return (
    <div className="accomodationpage">
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
    </div>
  );
}

export default Accomodation;
