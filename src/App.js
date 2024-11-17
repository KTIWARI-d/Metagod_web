// src/App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TempleExperiences from "./components/TempleExperiences";
import LiveEvents from "./components/LiveEvents";
import DonationPage from "./components/DonationPage";
import ShopItems from "./components/ShopItems";
import Footer from "./components/Footer";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <HeroSection />
      <Header />
      <TempleExperiences />
      <LiveEvents />
      <DonationPage />
      <ShopItems />
      <Footer />
    </div>
  );
}

export default App;
