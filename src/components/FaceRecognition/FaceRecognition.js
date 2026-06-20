import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, faces }) => {
  return (
    <div className="center mt4">
      <div className="image-container">
        <img
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
        />

        {faces.map((face, index) => (
          <div
            key={index}
            className="bounding-box"
            style={{
              left: face.x,
              top: face.y,
              width: face.width,
              height: face.height
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;