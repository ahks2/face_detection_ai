import React, { useRef } from "react";
import "./ImageLinkForm.css";

function ImageLinkForm({ onButtonSubmit }) {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

    const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        onButtonSubmit(file);
    }
    };

  return (
    <div>
      <p className="f3 yellow">
        {"I will detect the face in your images!"}
      </p>

      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <button
            type="button"
            className="w-30 grow link ph3 pv2 dib white bg-light-purple"
            onClick={handleUploadClick}
          >
            Upload
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;