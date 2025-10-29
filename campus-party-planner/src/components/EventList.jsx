import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "./EventCard";

export function EventList() {
  const { events } = useContext(EventContext);

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;