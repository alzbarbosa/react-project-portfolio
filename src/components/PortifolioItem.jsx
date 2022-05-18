import {FaGithub, FaExternalLinkAlt} from "react-icons/fa"
/*import image from "../img/port3.jpg"*/

const PortifolioItem = (props) => {
  const {name, text, link, repos, image} = props
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
                        <a href={link} target="_blank" className="icon">
                            <FaExternalLinkAlt />
                        </a>
                        <a href={repos} className="icon">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default PortifolioItem
