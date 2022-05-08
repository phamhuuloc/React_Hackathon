import React from "react";
import "./HeroSection.scss";
import HeroImage from "../../img/banner.jpg"
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <h1>Hãy lan tỏa yêu thương</h1>
        <h3>Chúng tôi sẽ chỉ dẫn cho bạn quyên góp đúng nơi</h3>
        <button className="hero-section-button">Giới Thiệu</button>
      </div>
      <img
        src={HeroImage}
        alt=""
      />
    </div>
  );
};
export default HeroSection;
