import Headphones from './pages/Headphones/Headphones';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import ScrollToTop from './utils/ScrollToTop';
import Speakers from './pages/Speakers/Speakers';
import Earphones from './pages/Earphones/Earphones';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';

const App = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/earphones' element={<Earphones />} />
          <Route path='/:id' element={<Product />} />
          <Route path='/checkout-page' element={<Checkout />} />
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default App;
