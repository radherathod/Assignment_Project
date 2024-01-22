import React from "react";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.png";

const Section = () => {
  return (
    <div>
      <div className="images-section">
        <div>
          <img src={image18} alt="img" />
          <div className="img-details">
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <p>
              <a href="#">Read More... </a>
            </p>
          </div>
        </div>
        <div>
          <img src={image19} alt="img" />
          <div className="img-details">
            <p>
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <p>
              <a href="#">Read More... </a>
            </p>
          </div>
        </div>
        <div>
          <img src={image20} alt="img" />
          <div className="img-details">
            <p>Revamping the Membership Model with Triathlon Australia</p>
            <p>
              <a href="#">Read More... </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
