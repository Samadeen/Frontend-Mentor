import { chooseData } from '../../collection-data';
import styles from './Choose.module.scss';

const Choose = () => {
  return (
    <section className={styles.choose_container}>
      <h2>Why choose us?</h2>
      <p>
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
      <div className={styles.choose_cards}>
        {chooseData.map((choose) => {
          return (
            <div className={styles.choose_card} key={choose.title}>
              <img src={choose.img} alt={choose.title} />
              <h3>{choose.title}</h3>
              <p>{choose.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Choose;
