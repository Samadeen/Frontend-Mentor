import styles from './Hero.module.scss';
import Header from '../../layout/Header/Header';
import Button from '../../layout/Button/Button';
import adam from '../../assets/adam.png';
import oval from '../../assets/Oval1.png';
import circle from '../../assets/circle.svg';

const Hero = () => {
  return (
    <div className={`${styles.heroContainer} mw`}>
      <Header />
      <div className={styles.hero_details}>
        <div className={styles.hero_content}>
          <img src={oval} alt='circle' />
          <h1>
            Nice to meet you! <br />
            I'm <span>Adam Keyes</span>.
          </h1>
          <p>
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <div className={styles.w}>
            <Button linkText='Contact Me' />
          </div>
        </div>
        <div className={styles.hero_image}>
          <img src={circle} alt='circle' className={styles.circle} />
          <img src={adam} alt='adam' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
