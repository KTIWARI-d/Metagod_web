import React from "react";
import "./DigitalOfferings.css";

const offerings = [
  { id: 1, title: "Flowers", iconUrl: "/images/flowers.png" },
  { id: 2, title: "Prasad", iconUrl: "/images/prasad.png" },
  { id: 3, title: "Donation", iconUrl: "/images/donation.png" },
  { id: 4, title: "Outfits", iconUrl: "/images/outfits.png" },
  { id: 5, title: "Puja Tokens", iconUrl: "/images/tokens.png" },
  { id: 6, title: "Garlands", iconUrl: "/images/garlands.png" },
  { id: 7, title: "Idols", iconUrl: "/images/idols.png" },
];

const DigitalOfferings = () => {
  return (
    <section className="digital-offerings">
      <h2>Digital offerings</h2>
      <div className="offering-icons">
        {offerings.map((offering) => (
          <div key={offering.id} className="offering-icon">
            <img src={offering.iconUrl} alt={offering.title} />
            <p>{offering.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalOfferings;
