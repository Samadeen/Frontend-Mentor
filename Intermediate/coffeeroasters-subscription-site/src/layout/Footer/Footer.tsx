import styles from './Footer.module.scss';
import logo from '../../assets/footer-logo.svg';
import facebook from '../../assets/shared/desktop/icon-facebook.svg';
import twitter from '../../assets/shared/desktop/icon-twitter.svg';
import instagram from '../../assets/shared/desktop/icon-instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_nav}>
        <img src={logo} alt='footer logo' />
        <nav className={styles.nav}>
          <Link to='/'>Home</Link>
          <Link to='/about-us'>About Us</Link>
          <Link to='/create-plan'> Create your Plan</Link>
        </nav>
      </div>
      <div className={styles.socials}>
        <img src={facebook} alt='facebook icon' />
        <img src={twitter} alt='twitter icon' />
        <img src={instagram} alt='instagram icon' />
      </div>
    </footer>
  );
};

export default Footer;
