import React from "react";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import './App.css';
import Slider from "./Slider.jsx";
// Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';

function App() {
  return (
    <div>
      <Header />
      <Slider /> 
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/aboutus" element={<AboutUs />} /> {/* About Us route */}
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
