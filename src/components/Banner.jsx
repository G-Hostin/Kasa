import React from "react";
import "../styles/components/_banner.scss";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      <div className="black-filter"></div>
      <div className="banner-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default Banner;
