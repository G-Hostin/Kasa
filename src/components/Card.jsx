import React from "react";
import "../styles/components/_card.scss";
import { Link } from "react-router-dom";

function Card({ id, title, cardimage }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cardimage} alt={title} />
      <div className="black-filter-card"></div>
      <h2>{title}</h2>
    </Link>
  );
}

export default Card;
