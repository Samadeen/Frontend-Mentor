import styles from './Header.module.scss';
import logo from '../../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' />
      <nav className={styles.desktop_nav}>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/create-plan'> Create your Plan</Link>
      </nav>
    </header>
  );
};

export default Header;
