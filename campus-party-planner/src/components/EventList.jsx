import { useEffect, useContext } from "react";
import { EventContext } from "../context/EventContext";
import {EventCard} from "./EventCard";

export function EventList() {
  const { events, selectedCity, setEvents } = useContext(EventContext);
  
  useEffect(() => {
    fetchCities().then(setCities);
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