import logo from '../../assets/logo.svg';
import carts from '../../assets/carts.svg';
// import hamburger from '../../assets/hamburger.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.desktop_nav}>
        <img src={logo} alt='logo' />
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/headphones'>Headphones</Link>
          <Link to='/speakers'>Speakers</Link>
          <Link to='/earphones'>Earphones</Link>
        </nav>
        <img src={carts} alt='cart' />
      </div>
      {/* <div className={styles.mobile_nav}>
        <img src={hamburger} alt="hamburger" />
        <nav>
          <Link to='./'>Home</Link>
          <Link to='./'>Headphones</Link>
          <Link to='./'>Speakers</Link>
          <Link to='./'>Earphones</Link>
        </nav>
        <img src={logo} alt='logo' />
        <img src={carts} alt='cart' />
      </div> */}
    </header>
  );
};

export default Header;
