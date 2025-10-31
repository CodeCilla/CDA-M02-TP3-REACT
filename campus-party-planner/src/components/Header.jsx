import { Link, useLocation } from 'react-router-dom';
import Darkmode from './Darkmode';
import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import '../styles/components/Header.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { darkmode } = useContext(EventContext);

  return (
    <header className={`header ${darkmode ? 'header--dark' : ''}`}>
      <h1 className={`header__title ${darkmode ? 'header__title--dark' : ''}`}>
        Campus Party Planner
      </h1>
      <nav className={`header__nav ${darkmode ? 'header__nav--dark' : ''}`}>
        {isHomePage ? (
          <Link
            to='/stats'
            className={`header__link ${darkmode ? 'header__link--dark' : ''}`}
          >
            Statistiques
          </Link>
        ) : (
          <Link
            to='/'
            className={`header__link ${darkmode ? 'header__link--dark' : ''}`}
          >
            Accueil
          </Link>
        )}
      </nav>
      <Darkmode />
    </header>
  );
};

export default Header;
