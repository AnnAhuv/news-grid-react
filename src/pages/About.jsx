import AboutOrganization from "../components/AboutOrganization";
import AboutAside from "../components/AboutAside";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="page-container">
            <AboutOrganization />
            <AboutAside />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
