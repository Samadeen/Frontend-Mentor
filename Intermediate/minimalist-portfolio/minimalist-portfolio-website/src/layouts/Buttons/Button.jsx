import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({ linkHref, linkText }) => {
  return (
    <Link className={styles.btn} to={linkHref}>
      {linkText}
    </Link>
  );
};

export default Button;
