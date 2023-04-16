import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styles from './Home.module.scss';
import SearchBar from '../components/Search/SearchBar';
import Results, { DataProps } from '../components/Results/Results';

const Home = () => {
  const [user, setUser] = useState('');
  const [data, setData] = useState<string>('');
  const [noUser, setNoUser] = useState(false);

  const fetchUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${user}`)
      .then((res) => {
        if (res.status === 404) {
          setNoUser(true);
          return;
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.home_container}>
      <Header />
      <SearchBar setUser={setUser} fetchUser={fetchUser} noUser={noUser} />
      {data && <Results data={data as unknown as DataProps} />}
    </div>
  );
};

export default Home;
