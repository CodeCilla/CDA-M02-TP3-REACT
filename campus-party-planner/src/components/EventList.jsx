import { useEffect, useContext } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "./EventCard";
import { fetchCities, fetchEvents } from "../services/api";
import './EventList.css';

export function EventList() {
  const { events, selectedCity, setEvents, setCity } = useContext(EventContext);

  // on mount: load cities and auto-select the first one
  useEffect(() => {
    fetchCities().then(cities => {
      if (cities.length) setCity(cities[0]);
    });
  }, []);

  // whenever selectedCity changes: load events for that city
  useEffect(() => {
    if (!selectedCity) return;          // guard against empty initial state
    fetchEvents(selectedCity).then(setEvents);
  }, [selectedCity]);

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard
  key={event.id}
  name={event.name}
  image={event.image}
  date={event.date}
  location={event.location}
  category={event.category}
/>
      ))}
    </div>
  );
}

export default EventList;