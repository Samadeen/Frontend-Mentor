import styles from './Hero.module.scss';
import illustration from '../../assets/images/illustration-working.svg';
import Button from '../../layout/Button/Button';

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_details}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button buttonText='Get started' />
      </div>
      <img src={illustration} alt='illustration image' />
    </div>
  );
};

export default Hero;
