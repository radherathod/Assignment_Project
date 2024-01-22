import React from "react";
import image1 from "../assets/image1.png";

const Insight1 = () => {
  return (
    <div className="insight">
      <div className="container">
        <div className="image-container">
          <div className="image">
            <img src={image1} alt="home" />
          </div>
        </div>
        <div className="content">
          <h3 className="sub-title">
            The unseen of spending three years at Pixelgrade
          </h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Insight1;
