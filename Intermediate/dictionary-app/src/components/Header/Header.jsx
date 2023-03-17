import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import arrowDown from '../../assets/images/icon-arrow-down.svg';
import lightSwitcher from '../../assets/images/light_switcher.png';
import darkSwitcher from '../../assets/images/dark_switcher.png';
import darkMoon from '../../assets/images/dark-moon.png';
import lightMoon from '../../assets/images/icon-moon.svg';
import { useContext, useState } from 'react';
import { FontContext } from '../../utils/font-context';
import { ThemeContext } from '../../utils/theme-context';
import { AnimatePresence, motion as m } from 'framer-motion';

const Header = () => {
  const {
    font,
    sansToggle,
    serifToggle,
    monoToggle,
    showFont,
    showFontHandler,
  } = useContext(FontContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [switcher, setSwitcher] = useState(theme);

  const switchHandler = () => {
    setSwitcher((prevState) => !prevState);
    toggleTheme();
  };

  return (
    <AnimatePresence>
      <m.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles.header_container}
      >
        <img src={logo} alt='logo' />
        <div className={styles.header_actions}>
          <div className={styles.fonts}>
            <div className={styles.font_body}>
              <p
                className={styles.main_font}
                onClick={showFontHandler}
                style={{
                  backgroundColor: theme === 'dark' ? '#050505' : '',
                  color: theme === 'dark' ? '#fff' : '',
                }}
              >
                {font}
              </p>
              {showFont && (
                <AnimatePresence>
                  <m.div
                    //   variants={modal}
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    className={styles.other_font}
                    style={{
                      backgroundColor: theme === 'dark' ? '#1f1f1f' : '',
                      color: theme === 'dark' ? '#fff' : '',
                      boxShadow:
                        theme === 'dark' ? '0px 5px 30px #A445ED;' : '',
                    }}
                  >
                    <m.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      style={{
                        color: theme === 'dark' ? '#fff' : '',
                      }}
                      onClick={sansToggle}
                      className={styles.sans_serif}
                    >
                      Sans-Serif
                    </m.p>
                    <m.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      style={{
                        color: theme === 'dark' ? '#fff' : '',
                      }}
                      onClick={serifToggle}
                      className={styles.serif}
                    >
                      Serif
                    </m.p>
                    <m.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      style={{
                        color: theme === 'dark' ? '#fff' : '',
                      }}
                      onClick={monoToggle}
                      className={styles.mono}
                    >
                      Mono
                    </m.p>
                  </m.div>
                </AnimatePresence>
              )}
            </div>
            <img src={arrowDown} alt='arrow down' onClick={showFontHandler} />
          </div>
          <m.div layout className={styles.theme} onClick={switchHandler}>
            {!switcher ? (
              <>
                <img src={lightSwitcher} alt='switcher' />
                <img src={lightMoon} alt='moon icon' />
              </>
            ) : (
              <>
                <img src={darkSwitcher} alt='switcher' />
                <img src={darkMoon} alt='moon icon' />
              </>
            )}
          </m.div>
        </div>
      </m.header>
    </AnimatePresence>
  );
};

export default Header;
