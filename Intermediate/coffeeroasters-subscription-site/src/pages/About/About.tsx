import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Layout from '../../layout/Layout/Layout';
import AboutUs from '../../components/About/About';
import Headquarter from '../../components/Headquarter/Headquarter';

const About = () => {
  return (
    <Layout>
      <AboutBanner />
      <AboutUs />
      <Headquarter />
    </Layout>
  );
};

export default About;
