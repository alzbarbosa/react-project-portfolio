import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "./portfolio-item-styles.css";

const PortfolioItem = ({ name, text, link, repos, image }) => {
  return (
    <>
      <div className="portfolio-item">
        <div className="image">
          <img src={image} alt="" />
          <div className="portfolio-text">
            <h4>{name}</h4>
            <p>{text}</p>
          </div>
        </div>
        <div className="hover-items">
          <h2>{name}</h2>
          <h3>Project Source</h3>
          <div className="icons">
            <a href={link} target="_blank" className="icon" rel="noreferrer">
              <FaExternalLinkAlt />
            </a>
            <a href={repos} className="icon">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
