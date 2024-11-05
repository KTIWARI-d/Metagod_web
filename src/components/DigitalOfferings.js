// src/components/DigitalOfferings.js
import React, { useState } from "react";
import Modal from "react-modal";
import "./DigitalOfferings.css";

const DigitalOfferings = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState(null);

  const offerings = [
    {
      id: 1,
      title: "Send Flowers",
      imageUrl: "https://source.unsplash.com/400x300/?flowers",
      description: "Send flowers virtually to show your devotion.",
    },
    {
      id: 2,
      title: "Order Prasad",
      imageUrl: "https://source.unsplash.com/400x300/?prasad",
      description: "Order sacred Prasad directly from the temple.",
    },
    {
      id: 3,
      title: "Make a Donation",
      imageUrl: "https://source.unsplash.com/400x300/?donation",
      description: "Make a contribution to support temple activities.",
    },
  ];

  const openModal = (offering) => {
    setSelectedOffering(offering);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedOffering(null);
  };

  return (
    <section className="digital-offerings">
      <h2>Digital Offerings</h2>
      <div className="offering-cards">
        {offerings.map((offering) => (
          <div
            key={offering.id}
            className="offering-card"
            onClick={() => openModal(offering)}
          >
            <img src={offering.imageUrl} alt={offering.title} />
            <h3>{offering.title}</h3>
          </div>
        ))}
      </div>

      {selectedOffering && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Offering Details"
        >
          <h2>{selectedOffering.title}</h2>
          <p>{selectedOffering.description}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </section>
  );
};

export default DigitalOfferings;
