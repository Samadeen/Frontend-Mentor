import { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

function Map() {
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState(null);
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    if (!map) {
      const newMap = L.map('mapid').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          "Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors",
        maxZoom: 18,
      }).addTo(newMap);

      setMap(newMap);
    }
  }, [map]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_pNNIJuCBwsgDOx0Dlx6Tf1RRO5sje&ipAddress=${ipAddress}`
      );
      const { lat, lng } = response.data.location;
      setLocation([lat, lng]);

      if (map) {
        map.flyTo([lat, lng], 13);
        L.marker([lat, lng]).addTo(map);
      }
    };

    if (map && ipAddress) {
      fetchData();
    }
  }, [map, ipAddress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ipAddress) {
      setIpAddress(ipAddress);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <div id='mapid' style={{ height: '500px' }}></div>
    </div>
  );
}

export default Map;
