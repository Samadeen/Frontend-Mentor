import Button from '../../layouts/Button/Button';
import styles from './Featured.module.scss';
import zx9speakers from '../../assets/home/desktop/image-removebg-preview.png';

const Featured = () => {
  return (
    <section className={styles.feature_container}>
      <div className={styles.zx9speakers}>
        <div className={styles.zx9speaker_img}>
          <img src={zx9speakers} alt='zx9speakers' />
        </div>
        <div className={styles.zx9speaker_details}>
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button black={true} btnText='See Product' product='/' />
        </div>
      </div>
      <div className={styles.zx7speakers}>
        <div className={styles.zx7speaker_details}>
          <h2>zx7 speaker</h2>
          <Button transparent={true} btnText='See Product' product='/' />
        </div>
      </div>
      <div className={styles.yx1earphones}>
        <div className={styles.earphone_image}></div>
        <div className={styles.yx1earphones_details}>
          <h2>Yx1 Earphones</h2>
          <Button transparent={true} btnText='See Product' product='/' />
        </div>
      </div>
    </section>
  );
};

export default Featured;
