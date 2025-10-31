import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { fetchCategories, fetchEvents } from '../../../api';
import '../styles/components/Selector.css';

function CategorySelector() {
  const { selectedCity, selectedCategory, setCategory, setEvents, darkmode } =
    useContext(EventContext);
  const [categories, setCategories] = useState([]);

  // 💫 Load categories when component mounts
  useEffect(() => {
    fetchCategories().then((c) => {
      setCategories(c);
      // set default only if nothing is selected yet
      if (c.length && !selectedCategory) setCategory('');
    });
  }, [setCategory, selectedCategory]); // add selectedCategory to deps

  // 🌸 Load events when category or city changes
  useEffect(() => {
    fetchEvents(selectedCity, selectedCategory).then(setEvents);
  }, [selectedCity, selectedCategory, setEvents]);

  return (
    <div className={`selector ${darkmode ? 'selector--dark' : ''}`}>
      <select
        value={selectedCategory}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=''>All Categories</option>
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
