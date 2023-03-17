import React, { useState } from 'react';

function Dictionary() {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);

  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => setData(data[0]))
      .catch((error) => console.log(error));
  };

  const handleAudioPlay = (event) => {
    const audioUrl = event.target.dataset.audio;
    new Audio(audioUrl).play();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter a word:
          <input type='text' value={word} onChange={handleInputChange} />
        </label>
        <button type='submit'>Search</button>
      </form>
      {data && (
        <div>
          <h2>{data.word}</h2>
          {data.phonetics.map((phonetic) => (
            <div key={phonetic.text}>
              <p>{phonetic.text}</p>
              {phonetic.audio && (
                <button data-audio={phonetic.audio} onClick={handleAudioPlay}>
                  Play audio
                </button>
              )}
            </div>
          ))}
          {data.meanings.map((meaning) => (
            <div key={meaning.partOfSpeech}>
              <h3>{meaning.partOfSpeech}</h3>
              {meaning.definitions.map((definition, index) => (
                <div key={index}>
                  <p>{definition.definition}</p>
                  {definition.example && (
                    <p>
                      <em>Example:</em> {definition.example}
                    </p>
                  )}
                  {definition.synonyms && (
                    <p>
                      <em>Synonyms:</em> {definition.synonyms.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dictionary;
