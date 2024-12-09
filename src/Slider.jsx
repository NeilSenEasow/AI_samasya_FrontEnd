import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DragAndDropArea from "./DragAndDropArea";
import SignLanguage from "./SignLanguage";

function Slider() {
  const [isSignLanguage, setIsSignLanguage] = useState(false);

  const handleToggle = () => setIsSignLanguage((prevState) => !prevState);

  return (
    <div style={{ padding: "20px" }}>
      {/* <h1 className="pdf-header">PDF Summarizer & Q&A Generator</h1> */}

      {/* Toggle Switch */}
      <div className="slider-container">
        <label className="slider-label">
          <span>Drag & Drop</span>
          <input
            type="checkbox"
            className="slider-toggle"
            checked={isSignLanguage}
            onChange={handleToggle}
          />
          <span>Sign Language Detection</span>
        </label>
      </div>

      {/* AnimatePresence for Smooth Transitions */}
      <div style={{ position: "relative", height: "400px" }}>
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
