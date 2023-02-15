import styles from './Navigation.module.scss';
import prevArrow from '../../assets/images/icons/arrow-left.svg';
import nextArrow from '../../assets/images/icons/arrow-right.svg';
import { Link, useNavigate } from 'react-router-dom';
import Interested from '../Interested/Interested';

const Navigation = ({ nextText, prevText, nextHref, prevHref }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.navigation_container}>
        <Link to={prevHref}>
          <img src={prevArrow} alt='previous arrow' />
          <div className={styles.prev}>
            <h3>{prevText}</h3>
            <small>Previous Project</small>
          </div>
        </Link>
        <Link to={nextHref}>
          <div className={styles.next}>
            <h3>{nextText}</h3>
            <small>Next Project</small>
          </div>
          <img src={nextArrow} alt='next arrow' />
        </Link>
      </section>
      <Interested />
    </>
  );
};

export default Navigation;
