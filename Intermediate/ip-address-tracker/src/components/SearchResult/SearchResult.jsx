import styles from './SearchResult.module.scss';

const SearchResult = ({ locationData }) => {
  return (
    <section className={styles.search_container}>
      <div className={styles.address}>
        <p>Ip Address</p>
        <h2>{locationData.ip}</h2>
      </div>
      <div className={styles.location}>
        <p>Location</p>
        <h2>
          {`${locationData.location.city}, ${locationData.location.country}`}
        </h2>
        {/* <h2>{locationData.location.geonameId}</h2> */}
      </div>
      <div className={styles.time}>
        <p>Timezone</p>
        <h2>UTC {locationData.location.timezone}</h2>
      </div>
      <div className={styles.isp}>
        <p>ISP</p>
        <h2>{locationData.isp}</h2>
      </div>
    </section>
  );
};

export default SearchResult;
