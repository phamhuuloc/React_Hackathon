import React from "react";
import "./HeroSection.scss";
import HeroImage from "../../img/banner.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <h1>Cảm Ơn Vì Đã Đến</h1>
        <h3>Webdev Adventure 2022</h3>
        <button className="hero-section-button">
          <Link to="/story">Giới thiệu</Link>
        </button>
      </div>
      <img src={HeroImage} alt="" />
    </div>
  );
};
export default HeroSection;
