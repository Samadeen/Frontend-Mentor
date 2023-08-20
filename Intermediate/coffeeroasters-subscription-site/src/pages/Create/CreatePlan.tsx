import CreateTab from '../../components/Create/CreateTab';
import CreateBanner from '../../components/CreateBanner/CreateBanner';
import Works from '../../components/How-It-Works/Works';
import Layout from '../../layout/Layout/Layout';

const CreatePlan = () => {
  return (
    <Layout>
      <CreateBanner />
      <Works dark={true} />
      <CreateTab />
    </Layout>
  );
};

export default CreatePlan;
