import styles from './Header.module.scss';
import linkedln from '../../assets/linkedIn.svg';
import fem from '../../assets/icons_frontendmentor.svg';
import twitter from '../../assets/icons_twitter.svg';
import github from '../../assets/icons_github.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <p>adamkeyes</p>
      <div className={styles.icons}>
        <img src={github} alt='linkedln' />
        <img src={fem} alt='linkedln' />
        <img src={linkedln} alt='linkedln' />
        <img src={twitter} alt='linkedln' />
      </div>
    </div>
  );
};

export default Header;
