import styles from './Ad.module.scss';
import man from '../../assets/man.png';

const Ad = () => {
  return (
    <section className={styles.ad_container}>
      <div className={styles.ad_details}>
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={man} alt='man' />
    </section>
  );
};

export default Ad;
