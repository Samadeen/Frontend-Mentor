import Shorten from '../Shorten/Shorten';
import styles from './Advance.module.scss';
import brand from '../../assets/images/icon-brand-recognition.svg';
import detail from '../../assets/images/icon-detailed-records.svg';
import fully from '../../assets/images/icon-fully-customizable.svg';
import Button from '../../layout/Button/Button';

const Advance = () => {
  return (
    <>
      <section className={styles.advance_container}>
        <Shorten />
        <div className={styles.advance_details}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className={styles.cards}>
            <div className={styles.line}></div>
            <div className={styles.card}>
              <img src={brand} alt='brand icon' />
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className={`${styles.card} ${styles.second}`}>
              <img src={detail} alt='detail icon' />
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className={`${styles.card} ${styles.third}`}>
              <img src={fully} alt='brand icon' />
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.boost}>
          <h2>Boost your links today</h2>
          <Button buttonText='Get Started' />
        </div>
      </section>
    </>
  );
};

export default Advance;
