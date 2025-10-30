import Header from "../components/Header.jsx";
import EventList from "../components/EventList.jsx";
import CitySelector from "../components/CitySelector.jsx";
import CategorySelector from "../components/CategorySelector.jsx";
import "../styles/components/Selector.css";
function HomePage() {
  return (
    <>
      <Header />
      <div className="selectors-wrapper">
        <div className="selector">
          <CitySelector />
        </div>
        <div className="selector">
          <CategorySelector />
        </div>
      </div>
      <EventList />
    </>
  );
}
export default HomePage;
