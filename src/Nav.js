import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import './Style.css';

function Nav() {
  return (
    <nav>
      <ul className='nav-links'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About Us</li>
        </Link>
        <Link to='/contact'>
          <li>Contact Us</li>
        </Link>
        <Link to='/gallery'>
          <li>Gallery</li>
        </Link>
        <Link to='/js'>
          <li>Javascript</li>
        </Link>
        <Link to='/tasks'>
          <li>Tasks</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
