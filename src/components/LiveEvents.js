import React from "react";
import "./LiveEvents.css";

const liveExperiences = [
  {
    image: "/images/live1.png",
    title: "Meditate with Lord Shiva",
  },
  {
    image: "/images/live2.png",
    title: "Ganesh Satsang",
  },
  {
    image: "/images/live3.png",
    title: "Nandhi Puja",
  },
  {
    image: "/images/live3.png",
    title: "Nandhi Puja",
  },
  {
    image: "/images/live3.png",
    title: "Nandhi Puja",
  },
];

const LiveEvents = () => {
  return (
    <section className="live-events">
      <h2 className="live-header">
        Live <span className="live-indicator">●</span>
      </h2>
      <div className="live-cards">
        {liveExperiences.map((experience, index) => (
          <div key={index} className="live-card">
            <div className="live-image-container">
              <img
                src={experience.image}
                alt={experience.title}
                className="live-image"
              />
              <button className="enter-experience-btn">Enter Experience</button>
            </div>
            <p className="live-title">{experience.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveEvents;
