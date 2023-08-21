import Choose from '../../components/Choose/Choose';
import Collection from '../../components/Collection/Collection';
import Hero from '../../components/Hero/Hero';
import Works from '../../components/How-It-Works/Works';
import Layout from '../../layout/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Collection />
      <Choose />
      <Works dark={false} />
    </Layout>
  );
};

export default Home;
