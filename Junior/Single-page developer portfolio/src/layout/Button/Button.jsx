import styles from './Button.module.scss';

const Button = ({ linkText, linkHref, marginBottom }) => {
  return (
    <div
      className={`${styles.btn} ${marginBottom ? styles.marginBottom : ''} `}
    >
      {linkText}
    </div>
  );
};

export default Button;
