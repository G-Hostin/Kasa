import Banner from "../components/Banner";
import bannerImage from "../assets/bannerhome.jpg";
import logements from "../data/logements.json";
import Card from "../components/Card";

function Home() {
  return (
    <div className="homepage">
      <div className="bannerhome">
        <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      </div>
      <div className="cards-section">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cardimage={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
