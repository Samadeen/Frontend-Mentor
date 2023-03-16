import { ThemeContext } from '../../utils/theme-context';
import styles from './SearchBar.module.scss';
import { useContext, useState } from 'react';

const SearchBar = ({ countries, setSearch }) => {
  const [continents, setContinents] = useState('');

  const onSearchHandler = (e) => {
    if (!e.target.value) return setSearch(countries);

    const filteredCountries = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setSearch(filteredCountries);
  };

  const handleContinentChange = (e) => {
    const filteredCountries = countries.filter((country) => {
      return country.region
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setSearch(filteredCountries);
    setContinents(e.target.value);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.search_container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label
          htmlFor='search'
          style={{ backgroundColor: theme === 'dark' ? '#2b3844' : '' }}
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='search'>
              <path
                id='Shape'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z'
                fill={theme === 'dark' ? '#fff' : 'black'}
              />
            </g>
          </svg>
          <input
            style={{
              backgroundColor: theme === 'dark' ? '#2b3844' : '',
              color: theme === 'dark' ? '#fff' : '',
            }}
            type='text'
            id='search'
            placeholder='Search for a country...'
            onChange={onSearchHandler}
          />
        </label>
        <select
          value={continents}
          onChange={handleContinentChange}
          style={{
            backgroundColor: theme === 'dark' ? '#2b3844' : '',
            color: theme === 'dark' ? '#fff' : '',
          }}
        >
          <option
            style={{
              color: theme === 'dark' ? '#fff' : '',
            }}
            value=''
          >
            Filter by region
          </option>
          <option
            style={{
              color: theme === 'dark' ? '#fff' : '',
            }}
            value='Africa'
          >
            Africa
          </option>
          <option
            style={{
              color: theme === 'dark' ? '#fff' : '',
            }}
            value='Americas'
          >
            Americas
          </option>
          <option
            style={{
              color: theme === 'dark' ? '#fff' : '',
            }}
            value='Asia'
          >
            Asia
          </option>
          <option
            style={{
              color: theme === 'dark' ? '#fff' : '',
            }}
            value='Europe'
          >
            Europe
          </option>
          <option
            style={{
              color: theme === 'dark' ? '#fff' : '',
            }}
            value='Oceania'
          >
            Oceania
          </option>
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
