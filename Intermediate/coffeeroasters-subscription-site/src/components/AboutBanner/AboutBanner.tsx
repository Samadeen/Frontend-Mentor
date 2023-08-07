import styles from './AboutBanner.module.scss';

const AboutBanner = () => {
  return (
    <section className={styles.aboutBanner_container}>
      <h1>About Us</h1>
      <p>
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </section>
  );
};

export default AboutBanner;
