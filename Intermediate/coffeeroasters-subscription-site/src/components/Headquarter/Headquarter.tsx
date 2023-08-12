import { locationData } from '../../collection-data';
import styles from './Headquarter.module.scss';

const Headquarter = () => {
  return (
    <section className={styles.headquarter_container}>
      <h2>Our headquarter</h2>
      <div className={styles.headquarter_wrapper}>
        {locationData.map((location) => {
          return (
            <div className={styles.headquarter} key={location.phone}>
              <img src={location.img} alt={location.country} />
              <h3>{location.country}</h3>
              <p>{location.street}</p>
              <p>{location.area}</p>
              <p>{location.zip}</p>
              <p>{location.phone}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Headquarter;
