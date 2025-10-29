import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import StatsPage from './pages/StatsPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/stats' element={<StatsPage />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;


