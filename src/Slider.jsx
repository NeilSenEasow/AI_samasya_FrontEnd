import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DragAndDropArea from "./DragAndDropArea";
import SignLanguage from "./SignLanguage";

function Slider() {
  const [isSignLanguage, setIsSignLanguage] = useState(false);

  const handleToggle = () => setIsSignLanguage((prevState) => !prevState);

  return (
    <div style={{ padding: "20px" }}>

      {/* Button to toggle between Drag & Drop and Sign Language Detection */}
      <div className="slider-container" style={{ position: "relative" }}>
        <motion.button
          onClick={handleToggle}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "25px",
            transition: "background-color 0.3s ease",
          }}
          whileHover={{ backgroundColor: "#0056b3" }}
        >
          {isSignLanguage ? "Drag & Drop" : "Sign Language Detection"}
        </motion.button>
      </div>

      {/* AnimatePresence for Smooth Transitions */}
      <div style={{ position: "relative", height: "400px", marginTop: "20px" }}>
        <AnimatePresence>
          {isSignLanguage ? (
            <motion.div
              key="sign-language"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <SignLanguage />
            </motion.div>
          ) : (
            <motion.div
              key="drag-drop"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <DragAndDropArea />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Slider;
