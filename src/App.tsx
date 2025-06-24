import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNotification } from "./logic/notificationSlice";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Notfound from "./components/Notfound.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./pages/Contact.tsx";
import Indev from "./components/Indev.tsx";
import Projects from "./pages/Projects.tsx";
import Game from "./pages/Game.tsx";
import Resume from "./pages/Resume.tsx";
import NotificationList from "./components/NotificationList.tsx";
import Skills from "./pages/Skills.tsx";
import Chess from "./pages/games/Chess.tsx"


document.title = "David Balishyan 😎";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNotification("Hi! :)"));
  }, [dispatch]);

  return (
    // <Router>
      <div>
        <Navbar />
        <NotificationList/>
        <Routes>
          <Route path="/trash" element={<h1>Do not use Light mode</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/indev" element={<Indev />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/play/chess" element={<Chess/>}/>
        </Routes>
        
      </div>
    // </Router>
  );
};

export default App;