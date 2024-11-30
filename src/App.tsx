import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Notfound from "./pages/Notfound.tsx"
import Navbar from './components/Navbar.tsx';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={ <Notfound/> }/>
      </Routes>
    </Router>
  );
};

export default App;
