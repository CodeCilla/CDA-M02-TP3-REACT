import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import './App.css';


function App() {
  return(
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
