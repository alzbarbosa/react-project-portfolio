import Portfolio from "./pages/portfolio-styles.css/Portfolio";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contact/Contact";
import Curriculum from "./pages/curriculum/Curriculum";
import AboutMe from "./pages/about-me/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
