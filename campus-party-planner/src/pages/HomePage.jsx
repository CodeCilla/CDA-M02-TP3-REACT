import Header from '../components/Header.jsx';
import EventList from '../components/EventList.jsx';
import CitySelector from '../components/CitySelector.jsx';
function HomePage() {
  return (
    <>
      <Header />
      <CitySelector />
      <EventList />
    </>
  );
}
export default HomePage;
