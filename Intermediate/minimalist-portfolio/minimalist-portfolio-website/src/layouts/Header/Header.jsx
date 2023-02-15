import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    color: '#5fb4a2',
  };

  return (
    <header className={styles.header_container}>
      <img src={logo} alt='logo' />
      <ul>
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to='portfolio'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Portfolio
        </NavLink>
        <NavLink
          to='contact'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact Me
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
