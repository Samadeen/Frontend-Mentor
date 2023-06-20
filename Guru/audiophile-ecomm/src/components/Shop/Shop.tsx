import styles from './Shop.module.scss';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import arrow from '../../assets/shared/desktop/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <section className={styles.shop_container}>
      <div className={styles.card}>
        <img src={headphones} alt='headphones' className={styles.img} />
        <h2>Headphones</h2>
        <Link to='/headphones'>
          Shop <img src={arrow} alt='arrow' />
        </Link>
      </div>
      <div className={styles.card}>
        <img src={speakers} alt='speakers' className={styles.img} />
        <h2>Speakers</h2>
        <Link to='/speakers'>
          Shop <img src={arrow} alt='arrow' />
        </Link>
      </div>
      <div className={styles.card}>
        <img src={earphones} alt='earphones' className={styles.img} />
        <h2>Earphones</h2>
        <Link to='/earphones'>
          Shop <img src={arrow} alt='arrow' />
        </Link>
      </div>
    </section>
  );
};

export default Shop;
