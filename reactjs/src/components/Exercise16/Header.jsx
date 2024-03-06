import { useEffect } from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Animação de entrada...');
  }, [location]);

  return (
    <div>
      <header>
        <nav className='navbar'>
          <ul>
            <li><NavLink to="./" end>Home</NavLink></li>
            <li><Link to="sobre">Sobre</Link></li>
            <li><Link to="login">Login</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
