import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
