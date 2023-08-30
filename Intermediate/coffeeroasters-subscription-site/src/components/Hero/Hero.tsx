import Button from '../../layout/Button/Button';
import styles from './Hero.module.scss';
import { motion as m } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <m.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        Great coffee
        <br /> made simple.
      </m.h1>
      <m.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </m.p>
      <Button btnText='Create your plan' create='/create' to={true} />
    </section>
  );
};

export default Hero;
