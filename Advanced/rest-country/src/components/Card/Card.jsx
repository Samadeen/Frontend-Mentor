import { useContext } from 'react';
import styles from './Card.module.scss';
import { motion as m } from 'framer-motion';
import { ThemeContext } from '../../utils/theme-context';

const Card = ({ img, country, population, region, capital }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <m.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ bounce: 1 }}
      style={{
        backgroundColor: theme === 'dark' ? '#2b3844' : '',
        color: theme === 'dark' ? '#fff' : '',
      }}
      className={styles.card_container}
      key={country}
    >
      <img src={img} alt='country flag' />
      <div className={styles.card_details}>
        <h2>{country}</h2>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region : </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </m.div>
  );
};

export default Card;
