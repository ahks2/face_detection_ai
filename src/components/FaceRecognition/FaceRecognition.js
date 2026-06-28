import "./FaceRecognition.css";
import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      {imageUrl && (
        <div className="image-container">
          <img
            className="uploaded-image"
            alt="uploaded"
            src={imageUrl}
          />
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;
