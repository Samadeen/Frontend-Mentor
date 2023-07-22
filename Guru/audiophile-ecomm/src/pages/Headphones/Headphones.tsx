import { useContext } from 'react';
import Layout from '../../layouts/Layout/Layout';
import { HeadphonesContext } from '../../api/headphones-api';
import Card from '../../components/Card/Card';
import Shop from '../../components/Shop/Shop';
import Ad from '../../components/Ad/Ad';
import styles from './Headphones.module.scss';
import Spinner from '../../components/Spinner/Spinner';

const Headphones = () => {
  const headphonesContext = useContext(HeadphonesContext);

  if (!headphonesContext) {
    // Optional: Render a loading state or handle the null case
    return <Spinner />;
  }

  const { headphones } = headphonesContext;

  return (
    <Layout>
      <section className={styles.headphones_container}>
        <h1>Headphones</h1>
        <Card
          description={headphones[2].description}
          img={headphones[2].image.desktop}
          reverse={false}
          title={headphones[2].name}
          newProduct={true}
          id={headphones[2].id}
        />
        <Card
          description={headphones[1].description}
          img={headphones[1].image.desktop}
          reverse={true}
          title={headphones[1].name}
          newProduct={false}
          id={headphones[1].id}
        />
        <Card
          description={headphones[0].description}
          img={headphones[0].image.desktop}
          reverse={false}
          title={headphones[0].name}
          newProduct={false}
          id={headphones[0].id}
        />

        <Shop />
        <Ad />
      </section>
    </Layout>
  );
};

export default Headphones;
