import { useContext } from 'react';
import './App.css';
import Home from './pages/Home';
import { ThemeContext } from './utils/theme-context';

function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={theme}>
      <Home />
    </div>
  );
}

export default App;
