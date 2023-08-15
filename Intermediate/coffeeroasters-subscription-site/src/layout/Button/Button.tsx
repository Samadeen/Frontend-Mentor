import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps {
  create: string;
  transparent?: boolean;
  to?: boolean;
  btnText: string;
}

const Button: React.FC<ButtonProps> = ({
  create,
  transparent,
  to,
  btnText,
}) => {
  return (
    <Link
      className={`${styles.button} ${transparent ? styles.transparent : ''} `}
      to={to ? create : ''}
    >
      {btnText}
    </Link>
  );
};

export default Button;
