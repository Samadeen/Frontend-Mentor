import styles from './Button.module.scss';

const Button = ({
  buttonText,
  borderNormal,
  small,
  normalSmall,
  transparent,
  fullWidth,
}) => {
  return (
    <button
      type='submit'
      className={`${borderNormal ? styles.normal : ''} ${
        fullWidth ? styles.width : ''
      } ${normalSmall ? styles.normalSmall : ''} ${small ? styles.small : ''} ${
        transparent ? styles.transparent : ''
      } `}
    >
      {buttonText}
    </button>
  );
};

export default Button;
