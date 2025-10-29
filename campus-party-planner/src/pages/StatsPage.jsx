import StatsChart from '../components/StatsChart';
import Header from '../components/Header';
import CitySelector from '../components/CitySelector';
import '../styles/StatsPage.css'; // ⬅️ le CSS ici

function StatsPage() {
  return (
    <div className="stats-page">
      <Header />
      <CitySelector />
      <h1>Statistiques</h1>
      <p>Ici vous pouvez trouver diverses statistiques sur les fêtes du campus!! 🥳​</p>
      <div className="stats-chart">
        <StatsChart />
      </div>
    </div>
  );
}

export default StatsPage;
