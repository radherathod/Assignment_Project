import React from "react";
import home from "../assets/home.png";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="sub-title">Lessons and Insights</h1>
          <h1 className="title">from 8 years</h1>
          <p className="description">
            Where to grow your business as a photographer: site are social
            media?
          </p>
          <button>Register</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
