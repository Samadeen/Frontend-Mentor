import { useContext } from 'react';
import Layout from '../../layouts/Layout/Layout';
import { SpeakersContext } from '../../api/speakers-api';
import Card from '../../components/Card/Card';
import Shop from '../../components/Shop/Shop';
import Ad from '../../components/Ad/Ad';
import styles from './Speaker.module.scss';

const Speakers = () => {
  const speakersContext = useContext(SpeakersContext);

  if (!speakersContext) {
    // Optional: Render a loading state or handle the null case
    return <div>Loading...</div>;
  }

  const { speakers } = speakersContext;

  return (
    <Layout>
      <section className={styles.speakers_container}>
        <h1>Speakers</h1>
        <Card
          description={speakers[1].description}
          img={speakers[1].image.desktop}
          reverse={false}
          title={speakers[1].name}
          newProduct={true}
          id={speakers[1].id}
        />
        <Card
          description={speakers[0].description}
          img={speakers[0].image.desktop}
          reverse={true}
          title={speakers[0].name}
          newProduct={false}
          id={speakers[1].id}
        />

        <Shop />
        <Ad />
      </section>
    </Layout>
  );
};

export default Speakers;
