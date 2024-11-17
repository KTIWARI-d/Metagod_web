import React from "react";
import Slider from "react-slick";
import "./HeroSection.css";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/images/magnifying-glass.png"; // Replace with the path to your cart icon image
import profileIcon from "../assets/images/user (2).png"; // Replace with the path to your profile icon image
import loginIcon from "../assets/images/Login.png"; // Replace with the path to your login icon image

// Use direct URLs from the public folder
const slides = [
  {
    image: "/images/temple1.jpg", // Ensure these images are in the public/assets/images folder
    title: "Siddhivinayak Temple",
    description: "Discover India's Spiritual Treasures in VR",
  },
  {
    image: "/images/temple2.jpg",
    title: "Kedarnath Temple",
    description: "Experience the divine journey in Kedarnath",
  },
  {
    image: "/images/temple3.jpg",
    title: "Rameshwaram Temple",
    description: "Step into the sacred realms of Rameshwaram",
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="hero-section">
      <img src={logo} alt="Logo" className="hero-logo" />
      <div className="hero-icons">
        <img src={cartIcon} alt="Cart" className="icon" />
        <img src={profileIcon} alt="Profile" className="icon" />
        <img src={loginIcon} alt="Login" className="icon" />
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${
                slide.image || "https://via.placeholder.com/800"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h2>{slide.description}</h2>
                <h1>{slide.title}</h1>
                <div className="hero-buttons">
                  <button className="primary-button">
                    <i className="icon-vr" /> Enter Temple Experience
                  </button>
                  <button className="secondary-button">More Info</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
