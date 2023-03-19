import logo from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import hamburger from '../../assets/images/hamburger.png';
import { useState } from 'react';
import { motion as m } from 'framer-motion';

const Header = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <m.header
      initial={{ opacity: 0, y: -90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={styles.header_container}
    >
      <div className={styles.desktop}>
        <div className={styles.links}>
          <img src={logo} alt='logo' />
          <nav className={styles.nav_links}>
            <ul>
              <li>
                <a href='/'>Features</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Resources</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.buttons}>
          <Button buttonText='Login' transparent={true} small={true} />
          <Button buttonText='Sign Up' small={true} />
        </div>
      </div>
      <img
        src={hamburger}
        alt='hamburger menu'
        className={styles.hamburger}
        onClick={showHandler}
      />
      {show && (
        <div className={styles.mobile}>
          <nav className={styles.nav_links}>
            <ul>
              <li>
                <a href='/'>Features</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Resources</a>
              </li>
            </ul>
          </nav>
          <div className={styles.buttons}>
            <Button
              fullWidth={true}
              buttonText='Login'
              transparent={true}
              small={true}
            />
            <Button fullWidth={true} buttonText='Sign Up' small={true} />
          </div>
        </div>
      )}
    </m.header>
  );
};

export default Header;
