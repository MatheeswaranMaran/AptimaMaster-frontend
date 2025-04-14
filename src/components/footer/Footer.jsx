import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Your Aptima Master. All rights reserved. <br /> Made with
          🧠 <a href="">Maddy and Team</a>
        </p>
        <div className="social-links">
          <a href="https://www.instagram.com/maddywiz_007/#">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
