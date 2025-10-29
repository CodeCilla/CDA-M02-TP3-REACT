import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import './App.css';


function App() {
  return(
    <EventProvider>
<Router>
  <main>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/stats' element={<StatsPage />} />
    </Routes>
  </main>
</Router>
    </EventProvider>
);
}
export default App;


