import styles from './SearchBar.module.scss';
import searchIcon from '../../assets/icon-search.svg';
import React, { SyntheticEvent, useState } from 'react';

interface Props {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  fetchUser: (e: SyntheticEvent<Element, Event>) => Promise<void>;
  noUser: boolean;
}

const SearchBar = ({ setUser, fetchUser, noUser }: Props) => {
  const [words, setWords] = useState('');

  const inputValue = (e: React.FormEvent<HTMLInputElement>): void => {
    setWords((e.target as HTMLInputElement).value);
    setUser((e.target as HTMLInputElement).value);
    // if (words.length !== 0) {
    //   setCheck(false);
    // }
  };
  console.log(noUser);
  return (
    <section className={styles.search}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>
          <img src={searchIcon} alt='search icon' />
          <input type='text' onChange={inputValue} value={words} />
          {noUser && <small>No results!</small>}{' '}
          <button onClick={fetchUser}>Search</button>
        </label>
      </form>
    </section>
  );
};

export default SearchBar;
