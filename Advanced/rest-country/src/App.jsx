import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Country from './pages/Country/Country';
import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from './utils/theme-context';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
      <Header />
      <AnimatePresence mode='wait'>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:name' element={<Country />} />
          </Routes>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
