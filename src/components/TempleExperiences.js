// src/components/TempleExperiences.js
import React from "react";
import { motion } from "framer-motion";
import "./TempleExperiences.css";

const TempleExperiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Virtual Darshan",
      imageUrl: "https://source.unsplash.com/400x300/?temple,architecture",
    },
    {
      id: 2,
      title: "Meditation Sessions",
      imageUrl: "https://source.unsplash.com/400x300/?meditation",
    },
    {
      id: 3,
      title: "Online Pujas",
      imageUrl: "https://source.unsplash.com/400x300/?prayer",
    },
  ];

  return (
    <section className="temple-experiences">
      <h2>Temple Experiences</h2>
      <div className="experience-cards">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            className="experience-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={experience.imageUrl} alt={experience.title} />
            <h3>{experience.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TempleExperiences;
