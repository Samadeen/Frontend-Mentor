import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CountryCard from '../../components/CountryCard/CountryCard';
import Loader from '../../components/Loader/Loader';
import { motion as m } from 'framer-motion';
import { ThemeContext } from '../../utils/theme-context';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  const { name } = useParams();

  useEffect(() => {
    const fetchCountries = async () =>
      fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    fetchCountries();
  }, []);
  return (
    <div style={{ backgroundColor: theme === 'dark' ? '#202c36' : '' }}>
      {loading ? (
        <Loader />
      ) : (
        <m.div
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {countries.map((c) => {
            const nativeNames = Object.values(c.name?.nativeName);
            const language = Object.values(c?.languages);

            return (
              <CountryCard
                bc1={c.borders ? c.borders[0] : 'No border'}
                bc2={c.borders ? c.borders[1] : 'No border'}
                bc3={c.borders ? c.borders[2] : 'No border'}
                capital={c.capital}
                currencies={
                  c.currencies ? Object.keys(c.currencies)[0] : 'No Currencies'
                }
                flag={c.flags.png}
                languages={c.languages ? language[0] : 'No Language'}
                name={c.name.common}
                nativeName={
                  c.name.nativeNames
                    ? nativeNames?.[0]?.official
                    : c.name.common
                }
                population={c.population}
                region={c.region}
                subRegion={c.subregion}
                topLevelDomain={c.tld}
              />
            );
          })}
        </m.div>
      )}
    </div>
  );
};

export default Country;
