
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className='header'>
      <h1 className='header__title'>Campus Party Planner</h1>
      <nav className='header__nav'>
        {isHomePage ? (
          <Link to='/stats' className='header__link'>
            Statistiques
          </Link>
        ) : (
          <Link to='/' className='header__link'>
            Accueil
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
