import { useContext } from 'react';
import Layout from '../../layouts/Layout/Layout';
import { EarphonesContext } from '../../api/earphones-api';
import Card from '../../components/Card/Card';
import Shop from '../../components/Shop/Shop';
import Ad from '../../components/Ad/Ad';
import styles from './Earphones.module.scss';
import Spinner from '../../components/Spinner/Spinner';

const Earphones = () => {
  const earphonesContext = useContext(EarphonesContext);

  if (!earphonesContext) {
    // Optional: Render a loading state or handle the null case
    return <Spinner />;
  }

  const { earphones } = earphonesContext;

  return (
    <Layout>
      <section className={styles.earphones_container}>
        <h1>Earphones</h1>
        <Card
          description={earphones[0].description}
          img={earphones[0].image.desktop}
          reverse={false}
          title={earphones[0].name}
          newProduct={true}
          id={earphones[0].id}
        />
        <Shop />
        <Ad />
      </section>
    </Layout>
  );
};

export default Earphones;
