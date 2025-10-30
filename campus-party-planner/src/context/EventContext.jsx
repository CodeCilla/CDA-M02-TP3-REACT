import { createContext, useState, useEffect } from 'react';

// Création du contexte global
export const EventContext = createContext();

export function EventProvider({ children }) {
  // --- STATES ---
  const [events, setEvents] = useState([]); // Liste des événements
  const [selectedCity, setSelectedCity] = useState(''); // Ville choisie
  const [likedEvents, setLikedEvents] = useState([]); // Événements likés 💖

  // --- FONCTIONS ---
  const setCity = (city) => setSelectedCity(city);

  const toggleLike = (id) => {
    let updated;
    if (likedEvents.includes(id)) {
      updated = likedEvents.filter((eventId) => eventId !== id);
    } else {
      updated = [...likedEvents, id];
    }
    console.log('Updated liked events:', updated);
    setLikedEvents(updated);
    localStorage.setItem('likedEvents', JSON.stringify(updated));
  };

  const loadLikes = () => {
    const stored = localStorage.getItem('likedEvents');
    if (stored) setLikedEvents(JSON.parse(stored));
  };

  useEffect(() => {
    loadLikes();
  }, []);
  

  // --- Fournir les données et fonctions aux composants enfants ---
  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        selectedCity,
        setCity,
        likedEvents,
        toggleLike,
        loadLikes,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}
