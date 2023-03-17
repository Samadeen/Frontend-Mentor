import styles from './Definitions.module.scss';
import newWindows from '../../assets/images/icon-new-window.svg';
import { ThemeContext } from '../../utils/theme-context';
import { useContext } from 'react';
import { motion as m } from 'framer-motion';

const Definitions = ({ searchWord }) => {
  const { theme } = useContext(ThemeContext);

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <>
      <div className={styles.definitions_container}>
        {searchWord?.meanings.map((meaning, idx) => (
          <div key={idx} className={styles.definitions_body}>
            <div className={styles.partOfSpeech}>
              <m.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  color: theme === 'dark' ? '#fff' : '',
                }}
              >
                {meaning.partOfSpeech}
              </m.h3>
              <hr />
            </div>
            <m.h4 variants={itemVariants}>Meaning</m.h4>
            {meaning.definitions.map((definition, index) => (
              <div
                key={index}
                className={styles.definitions}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <m.ul>
                  <m.li
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ bounce: 1 }}
                    style={{
                      color: theme === 'dark' ? '#fff' : '',
                    }}
                  >
                    {definition.definition}
                  </m.li>
                </m.ul>
                {definition.example && <p>"{definition.example}"</p>}
              </div>
            ))}
            {meaning.synonyms[0] || meaning.synonyms[1] ? (
              <p className={styles.synonyms}>
                Synonyms<span>{meaning.synonyms.join(', ')}</span>
              </p>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
      <div className={styles.source}>
        <span>Source</span>
        <a
          href={searchWord.sourceUrls}
          target='blank'
          style={{
            color: theme === 'dark' ? '#fff' : '',
          }}
        >
          {searchWord.sourceUrls}
        </a>
        <img src={newWindows} alt='new windows' />
      </div>
    </>
  );
};

export default Definitions;
