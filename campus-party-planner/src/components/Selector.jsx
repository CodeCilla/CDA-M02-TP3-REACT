import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { fetchCategories, fetchCities, fetchEvents } from '../services/api';
// import '../styles/components/Selector.css';

function Selector({ type }) {
  const {
    selectedCity,
    selectedCategory,
    setCity,
    setCategory,
    setEvents,
    darkmode,
  } = useContext(EventContext);
  const [options, setOptions] = useState([]);

  // 💫 Load options when component mounts
  useEffect(() => {
    const fetchData = async () => {
      let data;
      try {
        if (type === 'city') {
          data = await fetchCities();
          console.log('Fetched cities:', data);
          if (data.length) setCity(''); // default to “All Cities”
        } else if (type === 'category') {
          data = await fetchCategories();
          console.log('Fetched categories:', data);
          if (data.length && !selectedCategory) setCategory(''); // set default only if nothing is selected yet
        }
        setOptions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [type, setCity, setCategory, selectedCategory]);

  // 🌸 Load events when city or category changes
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const events = await fetchEvents(selectedCity, selectedCategory);
        console.log('Fetched events:', events);
        setEvents(events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    loadEvents();
  }, [selectedCity, selectedCategory, setEvents]);

  return (
    <div className={`selector ${darkmode ? 'selector--dark' : ''}`}>
      <select
        value={type === 'city' ? selectedCity : selectedCategory}
        onChange={(e) => {
          console.log('Selector changed:', e.target.value);
          type === 'city'
            ? setCity(e.target.value)
            : setCategory(e.target.value);
        }}
      >
        <option value=''>
          All {type === 'city' ? 'Cities' : 'Categories'}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
