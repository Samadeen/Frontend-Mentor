import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Map from '../components/Map/Map';

const Home = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [locationData, setLocationData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_API_KEY
    }&ipAddress=${ipAddress}`;
    const response = await fetch(url);
    const data = await response.json();
    setLocationData(data);
  };

  console.log(locationData);

  return (
    <>
      <Header
        handleFormSubmit={handleFormSubmit}
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
        locationData={locationData}
      />
      {locationData && <Map locationData={locationData} />}
    </>
  );
};

export default Home;
