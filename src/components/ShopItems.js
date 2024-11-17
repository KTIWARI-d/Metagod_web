import React from "react";
import "./ShopItems.css";

const shopItems = [
  {
    title: "Web & Mobile Pack",
    price: "₹649/Month",
    buttonText: "Buy Now",
    detailsText: "View plan details",
    logo: "/images/MetagodIcon.png", // Replace with actual logo path
  },
  {
    title: "VR Pack (Oculus Q2&3)",
    price: "₹1249/Month",
    buttonText: "Buy Now",
    detailsText: "View plan details",
    logo: "/images/MetagodIcon.png", // Replace with actual logo path
  },
];

const ShopItems = () => {
  return (
    <section className="shop-items">
      <div className="shop-background">
        <div className="shop-items-container">
          {shopItems.map((item, index) => (
            <div key={index} className="shop-item-card">
              <img src={item.logo} alt="Logo" className="shop-logo" />
              <h3 className="shop-item-title">{item.title}</h3>
              <p className="shop-item-price">{item.price}</p>
              <button className="shop-button">{item.buttonText}</button>
              <p className="shop-details-link">{item.detailsText}</p>
            </div>
          ))}
        </div>
        <div className="shop-footer">
          <div className="app-buttons">
            {/* <img
              src="/images/app-store.png"
              alt="App Store"
              className="app-icon"
            /> */}
            <img
              src="/images/appstore.png"
              alt="Google Play"
              className="app-icon"
            />
          </div>
          <div className="payment-icons">
            <img src="/images/payment.png" alt="Payment Gateway" />
            {/* <img src="/images/mastercard.png" alt="MasterCard" />
            <img src="/images/amex.png" alt="American Express" />
            <img src="/images/discover.png" alt="Discover" />
            <img src="/images/stripe.png" alt="Stripe" />
            <img src="/images/paypal.png" alt="PayPal" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopItems;
