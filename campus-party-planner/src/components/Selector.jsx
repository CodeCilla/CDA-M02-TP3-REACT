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
          if (data.length) setCity(''); // default to “All Cities”
        } else if (type === 'category') {
          data = await fetchCategories();
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
        className='selector__item'
        value={type === 'city' ? selectedCity : selectedCategory}
        onChange={(e) => {
          console.log('Selector changed:', e.target.value);
          type === 'city'
            ? setCity(e.target.value)
            : setCategory(e.target.value);
        }}
      >
        <option value=''>
          {type === 'city' ? 'Villes' : 'Catégories'}
        </option>
        {options.map((option) => (
          <option className='selector__option' key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>

  );
}

export default Selector;
