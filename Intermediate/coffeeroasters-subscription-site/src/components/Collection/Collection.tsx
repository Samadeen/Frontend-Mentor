import { collectionData } from '../../collection-data';
import styles from './Collection.module.scss';
import { motion as m } from 'framer-motion';

const Collection = () => {
  return (
    <m.section className={styles.collection_container}>
      <m.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
      >
        our collection
      </m.h2>
      <div className={styles.collectable}>
        {collectionData.map((collection) => {
          return (
            <m.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: -75 }}
              transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.35 }}
              className={styles.collection_card}
              key={collection.title}
            >
              <m.img
                initial={false}
                whileHover={{ y: -35, rotateY: 360 }}
                transition={{ type: 'spring' }}
                src={collection.img}
                alt={collection.title}
              />
              <div className=''>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
              </div>
            </m.div>
          );
        })}
      </div>
    </m.section>
  );
};

export default Collection;
