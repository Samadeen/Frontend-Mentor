import styles from './CountryCard.module.scss';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowLeftWhite from '../../assets/arrow-left-white.svg';
import { useNavigate } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/theme-context';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const CountryCard = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  bc1,
  bc2,
  bc3,
}) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const { theme } = useContext(ThemeContext);

  return (
    <AnimatePresence>
      <m.div
        style={{
          backgroundColor: theme === 'dark' ? '#202c36' : '',
          color: theme === 'dark' ? '#fff' : '',
        }}
        initial='hidden'
        animate='visible'
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className={styles.wrapper}
      >
        <button
          onClick={back}
          style={{
            backgroundColor: theme === 'dark' ? '#2b3844' : '',
            color: theme === 'dark' ? '#fff' : '',
          }}
        >
          <img
            src={theme === 'dark' ? arrowLeftWhite : arrowLeft}
            alt='arrow left'
          />{' '}
          Back
        </button>
        <div className={styles.country_card}>
          <m.img
            src={flag}
            alt={`${name} flag`}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
          />
          <div className={styles.country_card_details}>
            <h2>{name}</h2>
            <div className={styles.card_sub_details}>
              <div className={styles.left}>
                <m.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                >
                  <strong>Native Name: </strong>
                  {nativeName}
                </m.p>
                <m.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                >
                  <strong>Population: </strong>
                  {population}
                </m.p>
                <m.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <strong>Region: </strong>
                  {region}
                </m.p>
                <m.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24 }}
                >
                  <strong>Sub Region: </strong>
                  {subRegion}
                </m.p>
                <m.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                >
                  <strong>Capital: </strong>
                  {capital}
                </m.p>
              </div>
              <div className={styles.right}>
                <m.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                >
                  <strong>Top Level Domain: </strong>
                  {topLevelDomain}
                </m.p>
                <m.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36 }}
                >
                  <strong>Currencies: </strong>
                  {currencies}
                </m.p>
                <m.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <strong>Languages: </strong>
                  {languages}
                </m.p>
              </div>
            </div>
            <div className={styles.border}>
              <h3>Border Countries: </h3>
              <div className={styles.border_list}>
                <m.p variants={itemVariants}>{bc1}</m.p>
                <m.p variants={itemVariants}>{bc2}</m.p>
                <m.p variants={itemVariants}>{bc3}</m.p>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </AnimatePresence>
  );
};

export default CountryCard;
