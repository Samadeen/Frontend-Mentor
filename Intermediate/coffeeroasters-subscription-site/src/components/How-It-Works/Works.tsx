import Button from '../../layout/Button/Button';
import styles from './Works.module.scss';

interface Theme {
  dark?: boolean;
}

const Works: React.FC<Theme> = ({ dark }) => {
  return (
    <section
      className={styles.works_container}
      style={{
        background: dark ? '#2c343e' : '#fff',
        maxWidth: dark ? '80rem' : '',
        padding: dark ? '6.25rem 5.31rem 6.25rem  5.31rem' : '',
      }}
    >
      <h2 style={{ paddingTop: dark ? '' : '10rem' }}>How it works</h2>
      <div className={styles.works_cards}>
        <div className={styles.works_card}>
          <div className={styles.circle} />
          <div className={styles.card_group}>
            <h3>01</h3>
            <h4 style={{ color: dark ? '#fefcf7' : '#2c343e' }}>
              Pick yor coffee
            </h4>
            <p style={{ color: dark ? '#fefcf7' : '#2c343e' }}>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
        </div>
        <div className={styles.works_card}>
          <div className={styles.circle} />
          <div className={styles.card_group}>
            <h3>02</h3>
            <h4 style={{ color: dark ? '#fefcf7' : '#2c343e' }}>
              Choose the frequency
            </h4>
            <p style={{ color: dark ? '#fefcf7' : '#2c343e' }}>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
        </div>
        <div className={styles.works_card}>
          <div className={styles.third_circle} />
          <div className={styles.card_group}>
            <h3>03</h3>
            <h4 style={{ color: dark ? '#fefcf7' : '#2c343e' }}>
              Receive and enjoy!
            </h4>
            <p style={{ color: dark ? '#fefcf7' : '#2c343e' }}>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <Button btnText='Create your plan' create='/create-plan' to={true} />
      </div>
    </section>
  );
};

export default Works;
