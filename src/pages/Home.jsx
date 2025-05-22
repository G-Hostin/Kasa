import Banner from "../components/Banner";
import bannerImage from "../assets/bannerhome.jpg";

function Home() {
  return (
    <div className="homepage">
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
    </div>
  );
}
export default Home;
