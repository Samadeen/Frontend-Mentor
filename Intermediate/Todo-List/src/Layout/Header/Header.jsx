import heroImage from '../../assets/images/bg-desktop-light.jpg';
import heroImageDark from '../../assets/images/bg-desktop-dark.jpg';
import styles from './Header.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/Theme-context';
import { AnimatePresence, motion as m } from 'framer-motion';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <AnimatePresence>
        <m.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          src={theme === 'light' ? heroImage : heroImageDark}
          alt='hero image'
        />
      </AnimatePresence>
    </header>
  );
};

export default Header;
