import { useState, useContext } from 'react';
import { useTasksDispatch } from '../../utils/Task-context';
import { nanoid } from 'nanoid';
import styles from './AddTask.module.scss';
import ovalEmpty from '../../assets/images/oval_empty.png';
import ovalDark from '../../assets/images/oval_dark.png';
import { ThemeContext } from '../../utils/Theme-context';

const AddTask = () => {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setText('');
      dispatch({
        type: 'added',
        id: nanoid(),
        text: text,
      });
    }
  };

  return (
    <div className={styles.addTask_container} id={theme}>
      <img src={theme === 'light' ? ovalEmpty : ovalDark} alt='icon' />
      <input
        id={theme}
        placeholder='Create a todo...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyPress}
      />
    </div>
  );
};

export default AddTask;

{
  /* <button
  onClick={() => {
    setText('');
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }}
>
  Add
</button> */
}
