import { createContext, useState, useEffect } from 'react';

// Création du contexte global
export const EventContext = createContext();

export function EventProvider({ children }) {
  // --- STATES ---
  const [events, setEvents] = useState([]); // Liste des événements
  const [selectedCity, setSelectedCity] = useState(''); // Ville choisie
  const [likedEvents, setLikedEvents] = useState([]); // Événements likés 💖
  const [selectedCategory, setSelectedCategory] = useState(''); // Catégorie choisie

  // --- FONCTIONS ---
  const setCity = (city) => setSelectedCity(city);
  const setCategory = (category) => setSelectedCategory(category);

  const toggleLike = (id) => {
    const updated = likedEvents.includes(id)
      ? likedEvents.filter((id) => id !== id)
      : [...likedEvents, id];
    console.log('Updated liked events:', updated);
    setLikedEvents(updated);
    localStorage.setItem('likedEvents', JSON.stringify(likedEvents));
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
        selectedCategory,
        setCategory,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}
