import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow.jsx";
import "../styles/pages/_accommodation.scss";
import Collapse from "../components/Collapse.jsx";
import Tag from "../components/Tag.jsx";
import Star from "../components/Star.jsx";

function Accommodation() {
  const { id } = useParams(); //Récupére l'id dans l'URL (lié au path="/logement/:id" dans le Router)
  const logement = logements.find((item) => item.id === id); //.find() cherche item.id qui correspond à l'id récupéré dans l'URL avec useParams et récupére les infos du logement

  if (!logement) {
    return <Navigate to="/404" />; //Navigate redirige automatiquement comme un window.location si l'id n'est pas trouvé
  }

  return (
    <div className="accommodationpage">
      <Slideshow pictures={logement.pictures} />
      <div className="accommodation-info-section">
        <div className="accommodation-info-text">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="accommodation-tags">
            {logement.tags.map((tag, i) => {
              return <Tag key={i} tag={tag} />;
            })}
          </div>
        </div>
        <div className="accommodation-host-stars">
          <div className="accommodation-host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Star rating={logement.rating} />
        </div>
      </div>

      <div className="accommodation-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipement, i) => {
              return <li key={i}>{equipement}</li>;
            })}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Accommodation;
