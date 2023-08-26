import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CreatePlan from './pages/Create/CreatePlan';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/create-plan' element={<CreatePlan />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
