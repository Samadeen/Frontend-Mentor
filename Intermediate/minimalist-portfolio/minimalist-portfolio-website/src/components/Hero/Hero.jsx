import styles from './Hero.module.scss';
import hero from '../../assets/images/homepage/desktop/image-homepage-hero@2x.jpg';
import downArrows from '../../assets/images/icons/down-arrows.svg';

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <img src={hero} alt='hero image' />
      <div className={styles.hero_details}>
        <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
        <p>
          <img src={downArrows} alt='down arrows' /> About Me
        </p>
      </div>
    </div>
  );
};

export default Hero;
