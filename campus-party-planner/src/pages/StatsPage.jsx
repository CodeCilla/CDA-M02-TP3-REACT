import StatsChart from '../components/StatsChart';
import Header from '../components/Header';
import CitySelector from '../components/CitySelector';
//import Footer from '../components/Footer'; --- IGNORE ---

function StatsPage() {
  return (
    <>
      <Header />
      <CitySelector />
    <h1>Statistics</h1>
    <p>Here you can find various statistics about the campus party.</p>

    <StatsChart />

    {/* <footer />  {/* Uncomment when Footer component is available */}
    </>
  );
}
export default StatsPage;
