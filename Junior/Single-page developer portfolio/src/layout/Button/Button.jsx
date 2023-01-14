import styles from './Button.module.scss';

const Button = ({ linkText, linkHref, marginBottom }) => {
  return (
    <button
      className={`${styles.btn} ${marginBottom ? styles.marginBottom : ''} `}
    >
      {linkText}
    </button>
  );
};

export default Button;
