import React, { useState } from 'react';

function Test() {
  const [inputValue, setInputValue] = useState('');
  const [shortLinks, setShortLinks] = useState(
    JSON.parse(localStorage.getItem('shortLinks')) || []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      const data = await res.json();
      setShortLinks([
        ...shortLinks,
        { original: inputValue, short: data.result.short_link },
      ]);
      setInputValue('');
    } catch (err) {
      console.log(err);
    }
  };

  const copyLink = (shortLink) => {
    navigator.clipboard.writeText(shortLink);
    alert('Link copied to clipboard!');
  };

  // Automatically save shortLinks to local storage
  React.useEffect(() => {
    localStorage.setItem('shortLinks', JSON.stringify(shortLinks));
  }, [shortLinks]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>Shorten</button>
      </form>
      <ul>
        {shortLinks.map((link, index) => (
          <li key={index}>
            <p>{link.original}</p>
            <p>{link.short}</p>
            <button onClick={() => copyLink(link.short)}>Copy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
