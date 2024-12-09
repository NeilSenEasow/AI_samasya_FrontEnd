import React, { useState } from 'react';

function DragAndDropArea() {
  const [file, setFile] = useState(null);
  const [questionnaireVisible, setQuestionnaireVisible] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setQuestionnaireVisible(true); // Show questionnaire after file drop
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setQuestionnaireVisible(true); // Show questionnaire after file select
    }
  };

  return (
    <div
      className="drag-and-drop-container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="drag-and-drop-box">
        {file ? (
          <div>
            <h3>{file.name}</h3>
            <p>File ready to be uploaded</p>
          </div>
        ) : (
          <div>
            <p>Drag and drop a PDF or text file here</p>
            <input
              type="file"
              onChange={handleFileSelect}
              className="hidden-input"
              accept=".pdf,.txt"
            />
            <p>Or click to choose a file</p>
          </div>
        )}
      </div>

      {/* Dummy Questionnaire */}
      {questionnaireVisible && (
        <div className="questionnaire">
          <h2>Questionnaire</h2>
          <div className="question">
            <label>1. What is your name?</label>
            <input type="text" />
          </div>
          <div className="question">
            <label>2. What is your favorite programming language?</label>
            <input type="text" />
          </div>
          <div className="question">
            <label>3. What is your favorite hobby?</label>
            <input type="text" />
          </div>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

export default DragAndDropArea;
