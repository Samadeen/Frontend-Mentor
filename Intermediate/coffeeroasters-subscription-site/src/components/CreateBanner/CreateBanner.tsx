import styles from './CreateBanner.module.scss';

const CreateBanner = () => {
  return (
    <section className={styles.createBanner_container}>
      <h1>Create plan</h1>
      <p>
        Coffee the way you wanted it to be. For coffee delivered tomorrow, or
        next week. For whatever brew method you use. For choice, for
        convenience, for quality.
      </p>
    </section>
  );
};

export default CreateBanner;
