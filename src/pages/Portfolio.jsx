import PortifolioItem from "../components/PortifolioItem"
import Sidebar from "../components/Sidebar"
import imageCourier from "../img/courier.png"
import imageGames from "../img/games.png"
import imageApp from "../img/app.png"
import imageNature from "../img/nature.png"
import imageDashboard from "../img/dashboard.png"
import imageSearch from "../img/search.png"
import imageShop from "../img/shop.png"


const Portfolio = () => {
  return (
     <main className="main-container">
      <section className="portfolio-page-container">
     <div className="main-title">
            <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
        </div>
        <p className="port-text">
            Here is some of my work that I've done in various programming languages.
        </p>
    <div className="portfolios">
        <PortifolioItem link="https://react-shop-sportskingdom.netlify.app/" 
        repos="https://github.com/alzbarbosa/react-shop-sportballs.git"
        name="React Project Shop"
        text="Creating a e-commerce page using React/Firebase"
        image={imageShop}/>

        <PortifolioItem link="https://react-search-userobots.netlify.app/" 
        repos="https://github.com/alzbarbosa/react-user-search.git"
        name="React Project Search User"
        text="A tool where you can search for users and add tags"
        image={imageSearch}/>

        <PortifolioItem link="https://react-project-courier.herokuapp.com/" 
        repos="https://github.com/alzbarbosa/React-Project-Courier.git"
        name="React Project Courier"
        text="Creating a page using MERN stack"
        image={imageCourier}/>

        <PortifolioItem link="https://react-project-apps.netlify.app" 
        repos="https://github.com/alzbarbosa/react-project-apps.git"
        name="React Project Apps"
        text="Creating 3 different Apps using React"
        image={imageApp}/>

        <PortifolioItem link="https://react-games-barbosa.netlify.app" 
        repos="https://github.com/alzbarbosa/react-project-games.git"
        name="React Project Games"
        text="Building 3 different games using React"
        image={imageGames}/>

        <PortifolioItem link="https://nature-lovers.netlify.app/" 
        repos="https://github.com/alzbarbosa/Javascript---Nature-Review.git"
        name="JS - Nature Lovers"
        text="Check beautiful views of different type of nature"
        image={imageNature}/>

        <PortifolioItem link="https://js-dashboard-project.netlify.app/" 
        repos="https://github.com/alzbarbosa/Javascript---Dashboard.git"
        name="JS - Dashboard"
        text="A dashboard to update the user about weather, Canadian currency, time and having access to Github"
        image={imageDashboard}/>

    </div>
    </section>   
    <Sidebar />
    </main> 
  )
}

export default Portfolio
