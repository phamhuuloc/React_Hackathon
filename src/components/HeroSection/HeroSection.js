import React from "react";
import "./HeroSection.scss";
import HeroImage from "../../img/landing-page.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <div className="hero-section-container-describe">
          <h1>Khối Hy Vọng</h1>
          <h6>Tôi hạnh phúc khi mọi người hạnh phúc</h6>
          <button className="hero-section-button">
            <Link to="/story">Giới thiệu</Link>
          </button>
        </div>
        <div className="hero-section-container-img">
         <img src={HeroImage} alt="" />
        </div>

      </div>

    </div>
  );
};
export default HeroSection;
