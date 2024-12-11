import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Notfound from "./components/Notfound.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./pages/Contact.tsx";
import Indev from "./components/Indev.tsx";
import Projects from "./pages/Projects.tsx";
import Game from "./pages/Game.tsx";

document.title = "David Balishyan 😎";

const App: React.FC = () => {
  return (
    <Router>
      <div data-theme="halloween">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
      {/* FIXME: make the routes better */}
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/indev" element={<Indev />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
  