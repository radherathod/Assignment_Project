import React, { useState } from "react";
import logo from "../assets/logo.png";
const Nav = () => {
  const [navState, NavState] = useState("");
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <div className="nav-buttons">
            <li>
              <a href="#">
                <button className="login-button">Login</button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="signup-button">Signup</button>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
