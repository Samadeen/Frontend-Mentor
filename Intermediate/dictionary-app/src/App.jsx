import { useContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './pages/Home';
import { ThemeContext } from './utils/theme-context';
import { FontContext } from './utils/font-context';

function App() {
  const { font } = useContext(FontContext);
  const { theme } = useContext(ThemeContext);

  console.log(font);
  return (
    <div className={theme} id={font}>
      <Home />
    </div>
  );
}

export default App;
