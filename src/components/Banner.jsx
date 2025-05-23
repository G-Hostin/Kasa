import React from "react";
import "../styles/components/_banner.scss";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      {text && <div className="black-filter-banner"></div>}
      {/*Si il a du texte lorsque le composant est appelé (dans Home oui, dans About non), alors ça crée la div black-filter-banner*/}
      <div className="banner-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default Banner;
