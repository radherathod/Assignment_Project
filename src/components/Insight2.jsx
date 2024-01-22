import React from "react";
import image from "../assets/image.png";

const Insight2 = () => {
  return (
    <div className="insight-container">
      <div className="container">
        <div className="content">
          <h3 className="sub-title">
            How to design your site footer like we did
          </h3>

          <p className="description">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button>Learn More</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={image} alt="home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insight2;
