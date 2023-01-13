import styles from './Button.module.scss';

const Button = ({ linkText, linkHref }) => {
  return <div className={styles.btn}>{linkText}</div>;
};

export default Button;
