import Banner from "../components/Banner";
import bannerImageAbout from "../assets/bannerabout.jpg";
import Collapse from "../components/Collapse";
import contents from "../data/aboutContent.json";

function About() {
  return (
    <div className="aboutpage">
      <div className="about-bannersection">
        <Banner image={bannerImageAbout} />
      </div>
      <div className="about-collapsesection">
        {contents.map((content) => {
          return (
            <Collapse key={content.title} title={content.title}>
              {content.content}
            </Collapse>
          );
        })}
      </div>
    </div>
  );
}
export default About;
