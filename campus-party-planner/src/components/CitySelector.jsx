import { useContext, useEffect, useState } from "react";
import { EventContext } from "../context/EventContext";
import { fetchCities } from "../services/api";
import './CitySelector.css';


function CitySelector() {
  const { selectedCity, setCity } = useContext(EventContext);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities().then(setCities);
  }, []);

  return (
    <div className="city-selector">
  <select
    value={selectedCity}
    onChange={(e) => setCity(e.target.value)}
  >
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
