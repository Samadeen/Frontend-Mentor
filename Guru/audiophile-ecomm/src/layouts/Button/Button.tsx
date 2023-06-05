import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps {
  product: string;
  btnText: string;
  orange?: boolean;
  black?: boolean;
  transparent?: boolean;
  to?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  product,
  btnText,
  orange,
  black,
  transparent,
  to,
}) => {
  return (
    <Link
      className={`${styles.button} ${orange ? styles.orange : ''} ${
        black ? styles.black : ''
      } ${transparent ? styles.transparent : ''} `}
      to={to ? product : ''}
    >
      {btnText}
    </Link>
  );
};

export default Button;
