import { EventContext } from "../context/EventContext";

function EventList() {
  const { events } = useContext(EventContext);

  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>{event.name}</li>
      ))}
    </ul>
  );
}

export default EventList;