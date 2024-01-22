import React from "react";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={footer} className="logo" alt="footer" />
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
          <i className="fa-brands fa-twitter icon"></i>
          <i className="fa-brands fa-facebook icon"></i>
          <i className="fa-brands fa-whatsapp icon"></i>
          <i className="fa-brands fa-youtube icon"></i>
        </div>
        <div className="col">
          <h3>Compony</h3>
          <p>About us</p>
          <p>Blog</p>
          <p>Contact us</p>
          <p>Pricing</p>
          <p>Testimonial</p>
        </div>
        <div className="col">
          <h3>Support</h3>
          <p>About us</p>
          <p>Blog</p>
          <p>Contact us</p>
          <p>Pricing</p>
          <p>Testimonial</p>
        </div>
        <div className="col">
          <h3>Stay Up to Date</h3>
          <input
            type="text"
            className="email"
            placeholder="Your Email Address"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
