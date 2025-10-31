import StatsChart from '../components/StatsChart';
import LikesChart from '../components/LikesChart';
import Header from '../components/Header';
import CitySelector from '../components/CitySelector';
import CategorySelector from '../components/CategorySelector';
import '../styles/pages/StatsPage.css';
import { useContext } from "react";
import { EventContext } from "../context/EventContext"; // ← grab darkmode flag

function StatsPage() {
  const { darkmode } = useContext(EventContext);

  return (
    <div className={`stats-page ${darkmode ? "stats-page--dark" : ""}`}>
      <Header />
      <div className="selectors-wrapper">
        <div className="selector">
          <CitySelector />
        </div>
        <div className="selector">
          <CategorySelector />
        </div>
      </div>
      <div className="stats-page__content">
        <h1
          className={`stats-page__title ${
            darkmode ? "stats-page__title--dark" : ""
          }`}
        >
          Statistiques
        </h1>
        <p
          className={`stats-page__description ${
            darkmode ? "stats-page__description--dark" : ""
          }`}
        >
          Ici vous pouvez trouver diverses statistiques sur les fêtes du
          campus!! 🥳
        </p>
        <div className='charts-wrapper'>
          <div className="stats-chart">
            <StatsChart />
          </div>
          <div className="stats-chart">
            <LikesChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
