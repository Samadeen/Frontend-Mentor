import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchedWord from '../components/SearchedWord/SearchedWord';
import Header from '../components/Header/Header';
import Definitions from '../components/Definitions/Definitions';
import NoWords from '../components/NoWords/NoWords';
import Loader from '../components/Loader/Loader';
import { FontContext } from '../utils/font-context';

const Home = () => {
  const [searchWord, setSearchWord] = useState('');
  const [word, setWord] = useState('');
  const [check, setCheck] = useState(false);
  const [noWords, setNoWords] = useState(false);
  const [loading, setLoading] = useState(false);
  const { font } = useContext(FontContext);

  const fetchWord = async (e) => {
    e.preventDefault();

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setLoading(true);
        if (res.status === 404) {
          setNoWords(true);
          return;
        }
        return res.json();
      })
      .then((data) => {
        setSearchWord(data[0]);
        setNoWords(false);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    if (word.length === 0) {
      setCheck(true);
    }
    console.log(check);
  };
  console.log(loading);

  return (
    <div>
      <Header />
      <SearchBar
        setWord={setWord}
        word={word}
        fetchWord={fetchWord}
        check={check}
        setCheck={setCheck}
      />
      {noWords && <NoWords />}
      {loading ? (
        <Loader />
      ) : searchWord && !noWords ? (
        <>
          <SearchedWord searchWord={searchWord} />
          <Definitions searchWord={searchWord} />
        </>
      ) : (
        ''
      )}
      {/* {} */}
    </div>
  );
};

export default Home;
