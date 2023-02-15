import Card from '../../components/Card/Card';
import styles from './Portfolio.module.scss';
import manage from '../../assets/images/portfolio/desktop/image-portfolio-manage.jpg';
import insure from '../../assets/images/portfolio/desktop/image-portfolio-insure.jpg';
import fylo from '../../assets/images/portfolio/desktop/image-portfolio-fylo.jpg';
import bookmark from '../../assets/images/portfolio/desktop/image-portfolio-bookmark.jpg';
import Interested from '../../components/Interested/Interested';
import Layout from '../../layouts/Layout/Layout';
import { Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <section className={styles.portfolio_container}>
        <div className={styles.space}>
          <img src={manage} alt='project thumbnail' />
          <Card
            title='Manage'
            description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.'
            buttonHref='manage'
            buttonText='View Project'
            pad={true}
          />
        </div>
        <div className={`${styles.space} ${styles.reverse}`}>
          <img src={bookmark} alt='project thumbnail' />
          <Card
            title='Bookmark'
            description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.'
            buttonHref='bookmark'
            buttonText='View Project'
            pad={true}
          />
        </div>
        <div className={styles.space}>
          <img src={insure} alt='project thumbnail' />
          <Card
            title='Insure'
            description='This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.'
            buttonHref='insure'
            buttonText='View Project'
            pad={true}
          />
        </div>
        <div className={`${styles.space} ${styles.reverse}`}>
          <img src={fylo} alt='project thumbnail' />
          <Card
            title='Fylo'
            description='This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.'
            buttonHref='fylo'
            buttonText='View Project'
            pad={true}
          />
        </div>
        <Interested />
      </section>
    </>
  );
};

export default Portfolio;
