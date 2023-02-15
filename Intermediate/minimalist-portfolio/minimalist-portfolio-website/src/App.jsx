import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Layout from './layouts/Layout/Layout';
import ScrollToTop from './utils/ScrollToTheTop';
import Manage from './pages/Manage/Manage';
import Bookmark from './pages/Bookmark/Bookmark';
import Insure from './pages/Insure/Insure';
import Fylo from './pages/Fylo/Fylo';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Layout>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/manage' element={<Manage />} />
          <Route path='/portfolio/manage/fylo' element={<Fylo />} />
          <Route path='/portfolio/bookmark' element={<Bookmark />} />
          <Route path='/portfolio/insure' element={<Insure />} />
          <Route path='/portfolio/fylo' element={<Fylo />} />
          <Route path='/bookmark' element={<Bookmark />} />
          <Route path='/manage' element={<Manage />} />
          <Route path='/insure' element={<Insure />} />
          <Route path='/fylo' element={<Fylo />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </Layout>
  );
};

export default App;
