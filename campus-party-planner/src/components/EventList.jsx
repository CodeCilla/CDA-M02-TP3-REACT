import { useEffect, useContext } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "./EventCard";
import { fetchCities } from "../services/api";

export function EventList() {
  const { events, selectedCity } = useContext(EventContext);
  
  useEffect(() => {
    fetchCities().then(selectedCity);
  }, []);

  const filteredEvents = events.filter((event) =>
    selectedCity ? event.city === selectedCity : true
  );

  return (
    <div className="event-list">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;