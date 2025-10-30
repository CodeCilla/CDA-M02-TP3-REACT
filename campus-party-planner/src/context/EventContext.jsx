import { createContext, useState, useEffect } from 'react';

// Création du contexte global
export const EventContext = createContext();

export function EventProvider({ children }) {
  // --- STATES ---
  const [events, setEvents] = useState([]); // Liste des événements
  const [selectedCity, setSelectedCity] = useState(''); // Ville choisie
  const [likedEvents, setLikedEvents] = useState([]); // Événements likés 💖
  const [selectedCategory, setSelectedCategory] = useState(''); // Catégorie choisie
  const [darkmode, setDarkmode] = useState(false); // Mode sombre 🌑

  // --- FONCTIONS ---
  const setCity = (city) => setSelectedCity(city);
  const setCategory = (category) => setSelectedCategory(category);

  const toggleDarkmode = () => {
    setDarkmode((prev) => {
      const next = !prev;
      localStorage.setItem('darkmode', JSON.stringify(next));
      console.log('Darkmode set to:', next);
      return next;
    });
  };

useEffect(() => {
  try {
    const raw = localStorage.getItem('darkmode');
    if (raw) setDarkmode(JSON.parse(raw));
  } catch {
    console.error('Erreur lors du chargement du mode sombre depuis le localStorage');
  }
}, []);

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
        selectedCategory,
        setCategory,
        toggleDarkmode,
        darkmode,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}
