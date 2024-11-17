import React from "react";
import "./TempleExperiences.css";

const experiences = [
  {
    image: "/images/temple1.jpg",
    title: "Rameshwaram",
  },
  {
    image: "/images/temple2.jpg",
    title: "Kedarnath",
  },
  {
    image: "/images/temple3.jpg",
    title: "Jagannath",
  },
  {
    image: "/images/temple4.jpg",
    title: "Golden Temple",
  },
  {
    image: "/images/temple5.jpg",
    title: "Rishikesh",
  },
];

const TempleExperiences = () => {
  return (
    <section className="temple-experiences">
      <h2>Temple experiences</h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div
              className="experience-image"
              style={{ backgroundImage: `url(${experience.image})` }}
            >
              <div className="experience-overlay">
                <p className="experience-title">{experience.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TempleExperiences;
