import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import '../styles/components/Darkmode.css';

const Darkmode = () => {
  const { darkmode, toggleDarkmode } = useContext(EventContext);

  return (
    <button
      className={`darkmode-btn ${darkmode ? 'darkmode-btn--active' : ''}`}
      onClick={toggleDarkmode}
      aria-label="Toggle dark mode"
    >
      <span className="icon">{darkmode ? '🌙' : '☀️'}</span>
    </button>
  );
};

export default Darkmode;
