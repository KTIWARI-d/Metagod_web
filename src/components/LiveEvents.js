// src/components/LiveEvents.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const LiveEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.example.com/live-events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching live events:", error));
  }, []);

  return (
    <section>
      <h2>Live Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default LiveEvents;
