import { useContext, useEffect, useState } from "react";
import { EventContext } from "../context/EventContext";
import { fetchCities, fetchEvents } from "../services/api";
import "./CitySelector.css";

function CitySelector() {
  const { selectedCity, setCity, setEvents } = useContext(EventContext); // ➜ import setEvents
  const [cities, setCities] = useState([]);

  // 1. load cities once
  useEffect(() => {
    fetchCities().then((c) => {
      setCities(c);
      if (c.length) setCity(c[0]);       // auto-select first city
    });
  }, []);

  // 2. load events whenever city changes
useEffect(() => {
  if (!selectedCity) {
    // “All Cities” — fetch every city’s events in parallel
    Promise.all(cities.map(c => fetchEvents(c)))
      .then(arrays => arrays.flat())           // merge all results
      .then(setEvents);
  } else {
    // single city — your existing code
    fetchEvents(selectedCity).then(setEvents);
  }
}, [selectedCity, cities]);

  return (
    <div className="city-selector">
      <select value={selectedCity} onChange={(e) => setCity(e.target.value)}>
        <option value="">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;