import styles from './Map.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ locationData }) => {
  const { lat, lng } = locationData.location;
  console.log(lat, lng);
  const position = [lat, lng];

  return (
    <div className={styles.map_container}>
      <MapContainer center={position} zoom={13} style={{ height: '65vh' }}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={position}>
          <Popup>Hello from React Leaflet!</Popup>
        </Marker>
      </MapContainer>
      {console.log('render new map')}
    </div>
  );
};

export default Map;
