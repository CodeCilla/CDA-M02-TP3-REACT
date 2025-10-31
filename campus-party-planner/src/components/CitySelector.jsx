import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { fetchCities, fetchEvents } from '../../../api';
import '../styles/components/Selector.css';

function CitySelector() {
  const { selectedCity, selectedCategory, setCity, setEvents, darkmode } =
    useContext(EventContext);
  const [cities, setCities] = useState([]);

  // 💫 Load cities once
  useEffect(() => {
    fetchCities().then((c) => {
      setCities(c);
      if (c.length) setCity(''); // default to “All Cities”
    });
  }, []);

  // 🌸 Load events when city or category changes
  useEffect(() => {
    fetchEvents(selectedCity, selectedCategory).then(setEvents);
  }, [selectedCity, selectedCategory]);

  return (
    <div className={`selector ${darkmode ? 'selector--dark' : ''}`}>
      <select value={selectedCity} onChange={(e) => setCity(e.target.value)}>
        <option value=''>All Cities</option>
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
