import styles from './Header.module.scss';
import moon from '../../assets/moon-icon.png';
import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/theme-context';

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <m.header
      id={theme}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      className={styles.header_container}
    >
      <h1>Where in the world?</h1>
      <div className={styles.mode} onClick={toggleTheme}>
        <img src={moon} alt='moon icon' />
        <p>Dark Mode</p>
      </div>
    </m.header>
  );
};

export default Header;
