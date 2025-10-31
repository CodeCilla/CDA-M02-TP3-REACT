import { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import EventCard from './EventCard';
import EventModal from './EventModal';
import Modal from 'react-modal';
import '../styles/components/EventList.css';

Modal.setAppElement('#root');

const EventList = () => {
  const { events, likedEvents } = useContext(EventContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event) => {
    console.log('Opening modal for event:', event.name);
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='event-list'>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          liked={likedEvents.includes(event.id)}
          onClick={() => openModal(event)}
        />
      ))}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default EventList;
