import PortfolioItem from "../../components/portfolio-item/PortfolioItem";

import "./portfolio-styles.css";

import imageCourier from "../../assets/images/courier.png";
import imageGames from "../../assets/images/games.png";
import imageApp from "../../assets/images/app.png";
import imageNature from "../../assets/images/nature.png";
import imageDashboard from "../../assets/images/dashboard.png";
import imageSearch from "../../assets/images/search.png";
import imageShop from "../../assets/images/shop.png";
import imageContactBook from "../../assets/images/contactBook.png";
import imageGuessNumber from "../../assets/images/guessNumber.png";
import imageConverter from "../../assets/images/converter.png";
import imageQuote from "../../assets/images/quote.png";

import Navbar from "../../components/navbar/Navbar";

const portfolioItems = [
  {
    link: "https://react-shop-sportskingdom.netlify.app/",
    repos: "https://github.com/alzbarbosa/react-shop-sportballs.git",
    name: "React Project Shop",
    text: "Creating an e-commerce page using React/Firebase",
    image: imageShop,
  },
  {
    link: "https://react-search-userobots.netlify.app/",
    repos: "https://github.com/alzbarbosa/react-user-search.git",
    name: "React Project Search User",
    text: "A tool where you can search for users and add tags",
    image: imageSearch,
  },
  {
    link: "https://github.com/alzbarbosa/contact_book",
    repos: "https://github.com/alzbarbosa/contact_book",
    name: "Python Contact Book",
    text: "Creating a contact book using Python/PyQt6",
    image: imageContactBook,
  },
  {
    link: "https://react-project-apps.netlify.app",
    repos: "https://github.com/alzbarbosa/react-project-apps.git",
    name: "React Project Apps",
    text: "Creating 3 different Apps using React",
    image: imageApp,
  },
  {
    link: "https://react-games-barbosa.netlify.app",
    repos: "https://github.com/alzbarbosa/react-project-games.git",
    name: "React Project Games",
    text: "Building 3 different games using React",
    image: imageGames,
  },
  {
    link: "https://nature-lovers.netlify.app/",
    repos: "https://github.com/alzbarbosa/Javascript---Nature-Review.git",
    name: "JS - Nature Lovers",
    text: "Check beautiful views of different types of nature",
    image: imageNature,
  },
  {
    link: "https://js-dashboard-project.netlify.app/",
    repos: "https://github.com/alzbarbosa/Javascript---Dashboard.git",
    name: "JS - Dashboard",
    text: "Using APIs to update the user about weather, Canadian currency and time",
    image: imageDashboard,
  },
  {
    link: "https://jsguess-number.netlify.app/",
    repos: "https://github.com/alzbarbosa/js-guess-number",
    name: "JS Guess Number",
    text: "Guess number application using JavaScript code",
    image: imageGuessNumber,
  },
  {
    link: "https://js-generator-quote.netlify.app/",
    repos: "https://github.com/alzbarbosa/generate-quote",
    name: "JS - Generator Quote",
    text: "Generate quotes using Javascript and API",
    image: imageQuote,
  },
  {
    link: "https://jsconverternumber.netlify.app/",
    repos: "https://github.com/alzbarbosa/js-number-converter",
    name: "JS - Number Converter",
    text: "Converting numbers using Javascript",
    image: imageConverter,
  },
];

const Portfolio = () => {
  return (
    <main className="main-container">
      <Navbar />
      <section className="portfolio-page-container">
        <div className="main-title">
          <h2>
            My <span>Portfolio</span>
            <span className="bg-text">My Work</span>
          </h2>
        </div>
        <p className="port-text">
          Here is some of my work that I've done in various programming
          languages.
        </p>
        <div className="portfolios">
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.name}
              link={item.link}
              repos={item.repos}
              name={item.name}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
