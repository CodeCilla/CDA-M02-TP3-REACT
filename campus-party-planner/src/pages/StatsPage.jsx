import StatsChart from '../components/StatsChart';
import LikesChart from '../components/LikesChart';
import Header from '../components/Header';
import CitySelector from '../components/CitySelector';
import CategorySelector from '../components/CategorySelector';
import '../styles/pages/StatsPage.css';

function StatsPage() {
  return (
    <div className="stats-page">
      <Header />
      <div className="selectors-wrapper">
        <div className="selector">
          <CitySelector />
        </div>
        <div className="selector">
          <CategorySelector />
        </div>
      </div>

      <h1>Statistiques</h1>
      <p>Ici vous pouvez trouver diverses statistiques sur les fêtes du campus!! 🥳​</p>
    <div className="charts-wrapper">
      <div className="stats-chart">
        <StatsChart />
      </div>
      <div className="stats-chart">
        <LikesChart />
      </div>
    </div>
    </div>
  );
}

export default StatsPage;
