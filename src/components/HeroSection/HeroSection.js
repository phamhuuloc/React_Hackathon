import React from "react";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <h1>Hãy lan tỏa yêu thương</h1>
        <h3>Chúng tôi sẽ chỉ dẫn cho bạn quyên góp đúng nơi</h3>
        <button className="hero-section-button">Giới Thiệu</button>
      </div>
      <img
        src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/259605682_722646022453285_3889372583315628271_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=100&ccb=1-6&_nc_sid=ae9488&_nc_ohc=6LafdV9fbnYAX8HUZSm&_nc_ht=scontent.fsgn5-5.fna&oh=03_AVJYawBEKC4C05cm0stIM7KRczyE4uyZ9c0pG-3jMcr3Yw&oe=6299AEB3"
        alt=""
      />
    </div>
  );
};
export default HeroSection;
