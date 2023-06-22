import styles from './Header.module.scss';
import moon from '../../assets/icon-moon.svg';

const Header = () => {
  return (
    <header>
      <h1>devfinder</h1>
      <div className={styles.images}>
        <p>Dark</p>
        <img src={moon} alt='moon icon' />
      </div>
    </header>
  );
};

export default Header;
