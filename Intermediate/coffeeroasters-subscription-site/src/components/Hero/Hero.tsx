import Button from '../../layout/Button/Button';
import styles from './Hero.module.scss';
import { motion as m } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <m.h1>
        Great coffee
        <br /> made simple.
      </m.h1>
      <m.p>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </m.p>
      <Button btnText='Create your plan' create='/create' to={true} />
    </section>
  );
};

export default Hero;
