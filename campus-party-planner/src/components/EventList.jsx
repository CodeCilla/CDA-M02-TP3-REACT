import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "./EventCard";
import "../styles/components/EventList.css";

export function EventList() {
  const { events, likedEvents } = useContext(EventContext);

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          name={event.name}
          image={event.image}
          date={event.date}
          location={event.location}
          category={event.category}
          liked={likedEvents.includes(event.id)}
        />
      ))}
    </div>
  );
}

export default EventList;
