import { useEffect, useState, useContext } from "react";
import { EventContext } from "../context/EventContext";

export function CitySelector() {
  const [cities, setCities] = useState<string[]>([]);
  const { selectedCity, setCity } = useContext(EventContext);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/cities");
        const data = await res.json();
        setCities(data.data || []);
      } catch (err) {
        console.error("Failed to fetch cities:", err);
      }
    };

    fetchCities();
  }, []);

  return (
    <select
      value={selectedCity || ""}
      onChange={(e) => setCity(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="">All Cities</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
}
