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

  const toggleLike = (eventId) => {
    setLikedEvents((prev) => {
      const updated = prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId];

      saveLikes(updated);
      return updated;
    });
  };

  const saveLikes = (likes) => {
    localStorage.setItem('likedEvents', JSON.stringify(likes));
  };

  const loadLikes = () => {
    const stored = localStorage.getItem('likedEvents');
    if (stored) setLikedEvents(JSON.parse(stored));
  };

  // --- Effet au montage : charger les likes sauvegardés ---
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
        saveLikes,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}


