import { useContext, useEffect, useState } from "react";
import { EventContext } from "../context/EventContext";
import { fetchCategories, fetchEvents } from "../services/api";
import "../styles/components/Selector.css";

function CategorySelector() {
  const { selectedCity, selectedCategory, setCategory, setEvents, darkmode } =
    useContext(EventContext);
  const [categories, setCategories] = useState([]);


  // 💫 Load categories when component mounts
  useEffect(() => {
    fetchCategories().then((c) => {
      setCategories(c);
      if (c.length) setCategory(""); // default to “All Categories”
    });
  }, [setCategory]);

  // 🌸 Load events when category or city changes
  useEffect(() => {
    fetchEvents(selectedCity, selectedCategory).then(setEvents);
  }, [selectedCity, selectedCategory, setEvents]);

  return (
    <div className={`selector ${darkmode ? "selector--dark" : ""}`}>
      <select
        value={selectedCategory}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
