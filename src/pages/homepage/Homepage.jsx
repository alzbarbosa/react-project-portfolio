import "./homepage-styles.css";

import image2 from "../../assets/images/andre-photo01.jpg";
import Navbar from "../../components/navbar/Navbar";

const Homepage = () => {
  return (
    <main className="main-container">
      <Navbar />
      <article className="homepage-container">
        <section className="main-title">
          <h2>
            My <span>Portfolio</span>
            <span className="bg-text">Welcome</span>
          </h2>
        </section>
        <section className="intro">
          <h1 className="title-intro">
            Hi, I am <strong>Andre Barbosa</strong>
          </h1>
          <p className="subtitle-intro">Software developer</p>
          <img src={image2} alt="me" className="intro__img" />
        </section>
        <section>
          <p className="homepage-introduction">
            I'm a Software developer looking for new opportunies in my career to
            create amazing pages and interactive solutions to our customers
          </p>
        </section>
      </article>
    </main>
  );
};

export default Homepage;
