import Layout from '../../layouts/Layout/Layout';
import Hero from '../../components/Hero/Hero';
import Shop from '../../components/Shop/Shop';
import Featured from '../../components/Featured/Featured';
import Ad from '../../components/Ad/Ad';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Shop />
      <Featured />
      <Ad />
    </Layout>
  );
};

export default Home;
