import styles from './SearchBar.module.scss';
import searchIcon from '../../assets/images/icon-search.svg';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../utils/theme-context';
import { motion as m } from 'framer-motion';

const SearchBar = ({ setWord, word, fetchWord, check, setCheck }) => {
  const [words, setWords] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const inputValue = (e) => {
    setWord(e.target.value);
    setWords(e.target.value);
    if (words.length !== 0) {
      setCheck(false);
    }
  };

  return (
    <m.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={styles.searchBar_container}
    >
      <form onSubmit={fetchWord}>
        <label htmlFor='search'>
          <input
            type='text'
            name='search'
            value={word}
            id='search'
            onChange={inputValue}
            style={{
              border: `${check ? '1px solid #FF5252' : ''}`,
              borderRadius: `${check ? '1rem' : ''}`,
              backgroundColor: `${theme === 'dark' ? '#1F1F1F' : ''}`,
              color: `${theme === 'dark' ? '#fff' : ''}`,
            }}
          />
          <img src={searchIcon} alt='' onClick={fetchWord} />
        </label>
      </form>
      {check && (
        <m.small
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: `${check ? '#FF5252' : ''}` }}
        >
          Whoops, can’t be empty…
        </m.small>
      )}
    </m.section>
  );
};

export default SearchBar;
