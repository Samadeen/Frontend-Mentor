import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Home from './pages/Home';
import Test from '../Test';

const App = () => {
  const position = [6.45407, 3.39467];

  return (
    // <MapContainer center={position} zoom={13} style={{ height: '100vh' }}>
    //   <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
    //   <Marker position={position}>
    //     <Popup>Hello from React Leaflet!</Popup>
    //   </Marker>
    // </MapContainer>
    // <Home />
    <Test />
  );
};

export default App;
