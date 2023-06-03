import React, { useContext, useState } from 'react';
import { useTasksDispatch } from '../../utils/Task-context';
import styles from './Task.module.scss';
import ovalEmpty from '../../assets/images/oval_empty.png';
import ovalFull from '../../assets/images/oval_checked.png';
import close from '../../assets/images/icon-cross.svg';
import ovalDark from '../../assets/images/oval_dark.png';
import { ThemeContext } from '../../utils/Theme-context';
import { motion as m, AnimatePresence } from 'framer-motion';

const Task = ({ task, innerRef }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useTasksDispatch();
  const { theme } = useContext(ThemeContext);
  const checkHandler = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <AnimatePresence>
      <m.div
        className={styles.task_container}
        id={theme}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        exit={{ opacity: 0, y: -100 }}
        layout
        ref={innerRef}
      >
        <m.div
          className={styles.task_wrapper}
          id={theme}
          style={{
            borderTop: `1px solid ${theme === 'dark' ? '#393A4B' : '#E3E4F1'}`,
          }}
        >
          <img
            style={{ borderRadius: '50%' }}
            src={isClicked ? ovalFull : theme === 'dark' ? ovalDark : ovalEmpty}
            alt='icon'
            onClick={checkHandler}
            id={theme}
            onChange={() => {
              dispatch({
                type: 'changed',
                task: {
                  ...task,
                  done: isClicked,
                },
              });
            }}
            className={styles.icon}
          />
          <input
            value={task.text}
            id={theme}
            onChange={(e) => {
              dispatch({
                type: 'changed',
                task: {
                  ...task,
                  text: e.target.value,
                },
              });
            }}
            style={{
              textDecoration: isClicked && 'line-through',
              color: isClicked && 'rgba(209, 210, 218, 1)',
            }}
          />
          <img
            src={close}
            alt=''
            onClick={() => {
              dispatch({
                type: 'deleted',
                id: task.id,
              });
            }}
            className={styles.close}
          />
        </m.div>
      </m.div>
    </AnimatePresence>
  );
};

export default Task;
