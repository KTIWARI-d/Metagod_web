// src/components/HeroSection.js
import React from "react";
import Slider from "react-slick";
import "./HeroSection.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="hero-section">
      <Slider {...settings}>
        <div>
          <img
            src="https://source.unsplash.com/1600x900/?temple,spirituality"
            alt="Spiritual Temple"
            className="hero-image"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/1600x900/?meditation,serenity"
            alt="Meditation Serenity"
            className="hero-image"
          />
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
