import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Test = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [locationData, setLocationData] = useState({});
  const [mapInitialized, setMapInitialized] = useState(false);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_pNNIJuCBwsgDOx0Dlx6Tf1RRO5sje&ipAddress=${ipAddress}`
        );
        const data = await response.json();
        setLocationData(data.location);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [ipAddress]);

  useEffect(() => {
    if (locationData.lat && locationData.lng) {
      if (markerRef.current) {
        markerRef.current.setLatLng([locationData.lat, locationData.lng]);

        if (!mapInitialized) {
          const map = L.map(mapRef.current).setView(
            [locationData.lat, locationData.lng],
            13
          );
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
          }).addTo(map);
          markerRef.current.addTo(map);
          setMapInitialized(true);
        }
      } else {
        markerRef.current = L.marker([locationData.lat, locationData.lng]);
      }
    }
  }, [locationData, mapInitialized]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIpAddress(event.target.elements.ipAddress.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='ipAddress'>Enter an IP address:</label>
        <input type='text' id='ipAddress' name='ipAddress' />
        <button type='submit'>Submit</button>
      </form>
      <div ref={mapRef} style={{ height: '500px' }}></div>
    </div>
  );
};

export default Test;
