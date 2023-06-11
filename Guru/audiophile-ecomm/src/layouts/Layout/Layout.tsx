import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
