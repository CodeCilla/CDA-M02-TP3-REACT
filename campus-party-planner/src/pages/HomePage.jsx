import Header from '../components/Header.jsx';
import EventList from '../components/EventList.jsx';
import CitySelector from '../components/CitySelector.jsx';
import CategorySelector from '../components/CategorySelector.jsx';
import '../styles/components/Selector.css';
import '../styles/pages/HomePage.css';
import { useContext } from 'react';
import { EventContext } from '../context/EventContext.jsx';
function HomePage() {
  const { darkmode } = useContext(EventContext);
  return (
    <div className={`home-page ${darkmode ? 'home-page--dark' : ''}`}>
      <Header />
      <div className='selectors'>
        <CitySelector />
        <CategorySelector />
      </div>
      <EventList />
    </div>
  );
}
export default HomePage;
