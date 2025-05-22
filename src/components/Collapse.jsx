import { useState } from "react";
import "../styles/components/_collapse.scss";
import arrow from "../assets/arrow.png";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
        {/*Au clic, défini isOpen sur l'inverse de son état actuel (si il est true ça devient false et inversement) */}
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="Flèche"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
        {/*Si isOpen est true (donc si le collapse est ouvert), cela rajoute la classe css .open*/}
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {/*Si isOpen est true (donc si le collapse est ouvert), cela rajoute la classe css .open*/}
        <div className="collapse-text">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
