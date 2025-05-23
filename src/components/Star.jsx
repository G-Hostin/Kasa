import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";
import "../styles/components/_star.scss";

function Star({ rating }) {
  const maxStars = 5;
  const activeStars = parseInt(rating);
  const inactiveStars = maxStars - activeStars;

  return (
    <div className="stars-component">
      {/*Array(activeStars) créé un tableau avec des [undefined, undefined etc] et le spread operator permet de les étaler (sinon .map pas possible sur un tableau vide) */}
      {[...Array(activeStars)].map((star, i) => (
        <img
          key={"active-star-" + i}
          src={starActive}
          alt="Étoile pleine"
          className="star"
        />
      ))}
      {[...Array(inactiveStars)].map((star, i) => (
        <img
          key={"inactive-star-" + i}
          src={starInactive}
          alt="Étoile vide"
          className="star"
        />
      ))}
    </div>
  );
}

export default Star;
