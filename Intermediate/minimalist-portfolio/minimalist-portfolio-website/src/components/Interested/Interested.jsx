import React from 'react';
import Button from '../../layouts/Buttons/Button';
import styles from './Interested.module.scss';

const Interested = () => {
  return (
    <section className={styles.interested}>
      <h2>Interested in doing a project together?</h2>
      <div />
      <Button linkHref='contact' linkText='Contact Me' />
    </section>
  );
};

export default Interested;
