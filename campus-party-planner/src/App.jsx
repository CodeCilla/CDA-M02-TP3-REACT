import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
<Router>
  <main>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/stats' element={<StatsPage />} />
    </Routes>
  </main>
</Router>;
}
export default App;
