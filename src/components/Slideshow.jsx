import { useEffect, useState } from "react";
import arrowLeft from "../assets/arrow-left-slideshow.png";
import arrowRight from "../assets/arrow-right-slideshow.png";
import "../styles/components/_slideshow.scss";

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0); //Index actuel
  const numberPictures = pictures.length; //Nombre total de photos sur un logement

  const nextSlide = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1;
      return newIndex >= numberPictures ? 0 : newIndex;
    }); //Rajoute 1 à l'index actuel et si il est supérieur ou égal au nombre total de photos (= car un index de 4 sur 5 photos signifie qu'on est déjà à la dernière) alors on repasse à 0 (la première photo) sinon on reste sur le nouvel index
  };

  const previousSlide = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex - 1;
      return newIndex < 0 ? numberPictures - 1 : newIndex;
    }); //Enlève 1 à l'index actuel et si il est inférieur à 0 (0 étant la première photo) alors on repasse à la dernière photo (nombre total de photo -1 car l'index est décalé de 1) sinon on reste sur le nouvel index
  };

  useEffect(() => {
    const time = setTimeout(nextSlide, 3000); //setTimout execute nextSlide tous les 3s

    return () => clearTimeout(time); //clearTimeout permet de supprimer l'ancien timer avant d'en relancer un nouveau, sinon plein de timer peuvent s'enchainer (si l'user clique par ex)
  }, [index, numberPictures]); //Execute ce useEffect à chaque fois que l'index change (donc que la photo change manuellement ou automatiquement), numberPictures est la pour contrer une erreur ESLint

  return (
    <div className="slideshow">
      <img
        src={pictures[index]}
        alt={`Photo ${index + 1}`}
        className="slideshow-picture"
      />
      {/*Prends en src la photo de l'index actuel, en alt Photo index+1 (car l'index est décalé de 1 et photo 0 n'est pas correct) */}
      {/*Si le nombre de photos et superieur à 1 alors on affiche les flèches et les numéros, sinon pas besoin*/}
      {numberPictures > 1 && (
        <div className="arrows-slideshow">
          <img
            src={arrowLeft}
            alt="Flèche gauche"
            className="arrow-left-slideshow"
            onClick={previousSlide}
          />
          {/*Appel previousSlide au clic*/}
          <img
            src={arrowRight}
            alt="Flèche droite"
            className="arrow-right-slideshow"
            onClick={nextSlide}
          />
          {/*Appel nextSlide au clic*/}
          <div className="counter-pictures-slideshow">
            <p>
              {index + 1} / {numberPictures}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
