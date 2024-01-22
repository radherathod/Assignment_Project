import React from "react";
import image21 from "../assets/image21.jpg";

const Cover = () => {
  return (
    <div className="img-container">
      <img src={image21} alt="img" />
      <div className="overlay">
        <p className="image-text">Pellentesque suscipit fringilla libero eu.</p>
        <button>Get a Demo</button>
      </div>
    </div>
  );
};

export default Cover;
