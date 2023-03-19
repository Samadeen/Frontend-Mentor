import { useEffect, useState } from 'react';
import styles from './Shorten.module.scss';
import Button from '../../layout/Button/Button';
import { motion as m } from 'framer-motion';

const Shorten = () => {
  const [inputValue, setInputValue] = useState('');
  const [shortLinks, setShortLinks] = useState(
    JSON.parse(localStorage.getItem('shortLinks')) || []
  );
  const [check, setCheck] = useState(false);

  //fetch and convert to short link
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

    if (inputValue.length == 0) {
      setCheck(true);
    }
  };

  //copy to clipboard
  const copyLink = (index) => {
    navigator.clipboard.writeText(shortLinks[index].short);
    const updatedLinks = [...shortLinks];
    updatedLinks[index].copied = true;
    setShortLinks(updatedLinks);

    const copyInterval = setInterval(() => {
      if (updatedLinks[index].copied === true) {
        updatedLinks[index].copied = false;
      }
    }, 1000);

    return () => clearInterval(copyInterval);
  };

  console.log(inputValue.length);
  console.log(check);

  //save to local storage
  useEffect(() => {
    localStorage.setItem('shortLinks', JSON.stringify(shortLinks));
  }, [shortLinks]);

  return (
    <div className={styles.shorten_wrapper}>
      <section className={styles.shorten_container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='search'>
            <input
              style={{ border: `${check ? '1px solid orangered' : ''}` }}
              type='text'
              value={inputValue}
              placeholder='Shorten a link here...'
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            {check && (
              <small style={{ color: 'orangered' }}>Please enter a link</small>
            )}
          </label>
          <div onClick={handleSubmit}>
            <Button borderNormal={true} buttonText='Shorten it!' />
          </div>
        </form>
      </section>
      <div>
        {shortLinks.map((link, index) => (
          <m.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            key={index}
            className={styles.links}
          >
            <p>{link.original}</p>
            <div className={styles.short}>
              <p>{link.short}</p>
              <button
                onClick={() => copyLink(index)}
                style={{
                  backgroundColor: `${link.copied ? '#3a3054' : ''}`,
                }}
              >
                {link.copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default Shorten;
