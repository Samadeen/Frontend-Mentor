import Button from '../../layouts/Button/Button';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_details}>
        <h5>New Products</h5>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          to={true}
          product='/products'
          btnText='View Product'
          orange={true}
        />
      </div>
    </section>
  );
};

export default Hero;
