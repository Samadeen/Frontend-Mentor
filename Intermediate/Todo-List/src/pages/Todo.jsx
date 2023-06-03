import { useContext, useState } from 'react';
import Header from '../Layout/Header/Header';
import AddTask from '../components/AddTask/AddTask';
import TaskList from '../components/TaskList/TaskList';
import styles from './Todo.module.scss';
import moon from '../assets/images/icon-moon.svg';
import sun from '../assets/images/icon-sun.svg';
import { ThemeContext } from '../utils/Theme-context';

const Todo = () => {
  const [icon, setIcon] = useState('light');
  const { toggleTheme, theme } = useContext(ThemeContext);

  const iconChangeHandler = () => {
    if (theme === 'dark') {
      setIcon('dark');
    }

    if (theme === 'light') {
      setIcon('light');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.center}>
        <div className={styles.center_details}>
          <h1>Todo</h1>
          <div className='' onClick={toggleTheme}>
            <img
              src={icon === 'light' ? sun : moon}
              alt='moon icon'
              onClick={iconChangeHandler}
            />
          </div>
        </div>
        <AddTask />
        <TaskList />
      </div>
    </>
  );
};

export default Todo;
