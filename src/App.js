import React from "react";
import UploadPDF from "./uploadPDF.jsx";
import NavBar from "./NavBar.jsx";
import './App.css';
import DragAndDropArea from "./DragAndDropArea"

function App() {
  return (
    <div>
      <NavBar />
      <UploadPDF />
      <DragAndDropArea />
    </div>
  );
}

export default App;
