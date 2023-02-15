import styles from './Footer.module.scss';
import logo from '../../assets/images/logo.svg';
import github from '../../assets/images/icons/github.svg';
import linkedin from '../../assets/images/icons/linkedin.svg';
import twitter from '../../assets/images/icons/twitter.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_links}>
          <svg xmlns='http://www.w3.org/2000/svg' width='61' height='32'>
            <path
              fill='#fff'
              fillRule='evenodd'
              d='M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z'
            />
          </svg>
          <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='portfolio'>Portfolio</NavLink>
            <NavLink to='contact'>Contact Me</NavLink>
          </ul>
        </div>
        <div className={styles.footer_socials}>
          <img src={github} alt='github icon' />
          <img src={twitter} alt='twitter icon' />
          <img src={linkedin} alt='linkedin icon' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
