import styles from './Header.module.scss';
import arrow from '../../assets/images/icon-arrow.svg';
import SearchResult from '../SearchResult/SearchResult';

const Header = ({
  handleFormSubmit,
  ipAddress,
  setIpAddress,
  locationData,
}) => {
  return (
    <>
      <header className={styles.header_container}>
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='search'>
            <input
              type='text'
              name='search'
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              placeholder='Search for any IP address or domain'
            />
            <img src={arrow} alt='arrow icon' />
          </label>
        </form>
        {locationData && <SearchResult locationData={locationData} />}
      </header>
    </>
  );
};

export default Header;
