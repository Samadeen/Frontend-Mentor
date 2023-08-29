import { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const toggleHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };
  const socialVariant = {
    initial: {
      opacity: 0,
      y: '-100vw',
    },
    animate: {
      opacity: 1,
      y: -300,
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 120,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const MotionLink = m(Link);

  return (
    <header className={styles.header}>
      <m.img
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
        src={logo}
        alt='logo'
      />
      <nav className={styles.desktop_nav}>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/create-plan'> Create your Plan</Link>
      </nav>
      <m.svg
        whileTap={{ scale: 0.97 }}
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='15'
        viewBox='0 0 16 15'
        fill='none'
        onClick={toggleHandler}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 1.5C0 0.671573 0.671573 0 1.5 0H14.5C15.3284 0 16 0.671573 16 1.5C16 2.32843 15.3284 3 14.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM0 7.5C0 6.67157 0.671573 6 1.5 6H14.5C15.3284 6 16 6.67157 16 7.5C16 8.32843 15.3284 9 14.5 9H1.5C0.671573 9 0 8.32843 0 7.5ZM1.5 12C0.671573 12 0 12.6716 0 13.5C0 14.3284 0.671573 15 1.5 15H14.5C15.3284 15 16 14.3284 16 13.5C16 12.6716 15.3284 12 14.5 12H1.5Z'
          fill='#333D4B'
        />
      </m.svg>
      {toggleMenu && (
        <AnimatePresence>
          <m.nav
            variants={socialVariant}
            initial='initial'
            animate='animate'
            exit={{ opacity: 0, y: '100vw' }}
            className={styles.mobile_nav}
          >
            <MotionLink to='/'>Home</MotionLink>
            <MotionLink to='/about-us'>About Us</MotionLink>
            <MotionLink to='/create-plan'> Create your Plan</MotionLink>
          </m.nav>
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
