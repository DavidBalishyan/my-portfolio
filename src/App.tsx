import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Notfound from "./components/Notfound.tsx"
import Navbar from './components/Navbar.tsx';
import Contact from './pages/Contact.tsx';
import Indev from './components/Indev.tsx';
import Projects from './pages/Projects(indev).tsx';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/indev" element={<Indev/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="*" element={ <Notfound/> }/>
      </Routes>
    </Router>
  );
};

export default App;
