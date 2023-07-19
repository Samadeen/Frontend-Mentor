import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps {
  product: any;
  btnText: string;
  orange?: boolean;
  width?: boolean;
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
  width,
}) => {
  return (
    <Link
      className={`${styles.button} ${orange ? styles.orange : ''} ${
        width ? styles.width : ''
      } ${black ? styles.black : ''} ${transparent ? styles.transparent : ''} `}
      to={to ? product : ''}
    >
      {btnText}
    </Link>
  );
};

export default Button;
