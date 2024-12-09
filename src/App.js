import React from "react";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import './App.css';
import Slider from "./Slider.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Slider /> {/* This already toggles DragAndDropArea and SignLanguage */}
    </div>
  );
}

export default App;
