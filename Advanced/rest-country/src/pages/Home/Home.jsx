import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import styles from './Home.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { ThemeContext } from '../../utils/theme-context';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchCountries = async () =>
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
          setLoading(false);
          return data;
        })
        .then((data) => {
          setSearch(data);
        })
        .catch((err) => console.log(err));
    fetchCountries();
  }, []);

  const results = search.map((country) => (
    <>
      <Link to={`/${country.name.common}`}>
        <Card
          key={country.name.common}
          country={country.name.common}
          capital={country.capital}
          population={country.population}
          region={country.region}
          img={country.flags.svg}
        />
      </Link>
    </>
  ));

  const content = results?.length ? (
    results
  ) : (
    <p
      style={{
        color: theme === 'dark' ? '#fff' : '',
      }}
    >
      No Matching results
    </p>
  );

  return (
    <m.div className={styles.home_wrapper}>
      <SearchBar countries={countries} setSearch={setSearch} />
      {loading ? (
        <Loader />
      ) : (
        <m.main className={styles.home_container}>{content}</m.main>
      )}
    </m.div>
  );
};

export default Home;
