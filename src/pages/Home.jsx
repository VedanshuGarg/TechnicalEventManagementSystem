import React, { useEffect, useState } from "react";
import axios from '../api/axios';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error loading events", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="text-center py-12">
        <h2 className="text-4xl font-bold">Welcome to EventHub</h2>
        <p className="text-gray-600 mt-2">Manage and explore technical events with ease.</p>
      </header>

      <section className="px-6 py-10">
        <h3 className="text-2xl font-semibold mb-6">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event._id} className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                <p className="text-gray-600 mb-1">{event.description}</p>
                <p className="text-gray-500 text-sm">{new Date(event.date).toLocaleDateString()} at {event.time}</p>
                <p className="text-gray-500 text-sm">Venue: {event.venue}</p>
              </div>
            ))
          ) : (
            <p>No events found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
