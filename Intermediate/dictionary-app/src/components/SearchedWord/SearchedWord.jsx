import styles from './SearchedWord.module.scss';
import play from '../../assets/images/icon-play.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/theme-context';

const SearchedWord = ({ searchWord }) => {
  const { theme } = useContext(ThemeContext);

  const handleAudioPlay = (e) => {
    const audioUrl = e.target.dataset.audio;
    new Audio(audioUrl).play();
  };

  return (
    <section className={styles.searchWord}>
      <div className={styles.word}>
        <h1
          style={{
            color: theme === 'dark' ? '#fff' : '',
          }}
        >
          {searchWord.word}
        </h1>
        <p>{searchWord.phonetic}</p>
      </div>
      {searchWord.phonetics.map(
        (phonetic) =>
          phonetic.audio && (
            <div>
              <img
                data-audio={phonetic.audio}
                onClick={handleAudioPlay}
                src={play}
                alt='play icon'
              />
            </div>
          )
      )}
    </section>
  );
};

export default SearchedWord;
