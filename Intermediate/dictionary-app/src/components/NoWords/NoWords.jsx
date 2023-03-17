import styles from './NoWords.module.scss';
import emoji from '../../assets/images/emoji.png';
import { motion as m } from 'framer-motion';

const NoWords = () => {
  return (
    <m.div className={styles.noWord_container}>
      <img src={emoji} alt='sad emoji' />
      <h2>No Definitions Found</h2>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </m.div>
  );
};

export default NoWords;
