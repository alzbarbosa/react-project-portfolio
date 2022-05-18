import Portfolio from './pages/Portfolio';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Curriculum from './pages/Curriculum';
import AboutMe from './pages/AboutMe';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/curriculum" element={<Curriculum/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
