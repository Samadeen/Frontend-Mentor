import React, { useContext } from 'react';
import Todo from './pages/Todo';
import './index.scss';
import { ThemeContext } from './utils/Theme-context';

const App = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className='App' id={theme}>
      <Todo />
    </div>
  );
};

export default App;
