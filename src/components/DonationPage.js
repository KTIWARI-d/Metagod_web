import React from "react";
import "./DonationPage.css";

const donationItems = [
  {
    image: "/images/donation1.png",
    title: "Flowers",
  },
  {
    image: "/images/donation2.png",
    title: "Prasad",
  },
  {
    image: "/images/donation3.png",
    title: "Donation",
  },
  {
    image: "/images/donation4.png",
    title: "Outfits",
  },
  {
    image: "/images/donation5.png",
    title: "Puja Tokens",
  },
  {
    image: "/images/donation6.png",
    title: "Garlands",
  },
  {
    image: "/images/donation7.png",
    title: "Idols",
  },
];

const DonationPage = () => {
  return (
    <section className="donation-page">
      <h2 className="donation-header">Digital offerings</h2>
      <div className="donation-cards">
        {donationItems.map((item, index) => (
          <div key={index} className="donation-card">
            <div className="donation-image-container">
              <img
                src={item.image}
                alt={item.title}
                className="donation-image"
              />
            </div>
            <p className="donation-title">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationPage;
