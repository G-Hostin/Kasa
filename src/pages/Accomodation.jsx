import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow.jsx";
import "../styles/pages/_accomodation.scss";

function Accomodation() {
  const { id } = useParams(); //Récupére l'id dans l'URL (lié au path="/logement/:id" dans le Router)
  const logement = logements.find((item) => item.id === id); //.find() cherche item.id qui correspond à l'id récupéré dans l'URL avec useParams et récupére les infos du logement

  if (!logement) {
    return <Navigate to="/404" />; //Navigate redirige automatiquement comme un window.location si l'id n'est pas trouvé
  }

  return (
    <div className="accomodationpage">
      <Slideshow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
    </div>
  );
}

export default Accomodation;
