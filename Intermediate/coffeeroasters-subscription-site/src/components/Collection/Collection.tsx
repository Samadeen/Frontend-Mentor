import { collectionData } from '../../collection-data';
import styles from './Collection.module.scss';

const Collection = () => {
  return (
    <section className={styles.collection_container}>
      <h2>our collection</h2>
      <div className={styles.collectable}>
        {collectionData.map((collection) => {
          return (
            <div className={styles.collection_card} key={collection.title}>
              <img src={collection.img} alt={collection.title} />
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;
