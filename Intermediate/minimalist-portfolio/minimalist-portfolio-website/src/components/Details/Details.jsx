import Card from '../Card/Card';
import Navigation from '../Navigation/Navigation';
import styles from './Details.module.scss';

const Details = ({
  heroImg,
  projectBackground,
  staticImageOne,
  staticImageTwo,
  buttonHref,
  buttonText,
  title,
  tag,
  pad,
  stack,
  description,
  nextHref,
  nextText,
  prevHref,
  prevText,
}) => {
  return (
    <section className={styles.details_container}>
      <img src={heroImg} alt='hero image' />
      <div className={styles.details_holder}>
        <Card
          buttonHref={buttonHref}
          buttonText={buttonText}
          description={description}
          pad={pad}
          stack={stack}
          tag={tag}
          title={title}
          tags={true}
        />
        <div className={styles.project}>
          <div className={styles.project_background}>
            <h3>Project Background</h3>
            <p>{projectBackground}</p>
          </div>
          <div className={styles.static_preview}>
            <h3>Static Preview</h3>
            <img src={staticImageOne} alt='static image' />
            <img src={staticImageTwo} alt='static image' />
          </div>
        </div>
      </div>
      <Navigation
        nextHref={nextHref}
        nextText={nextText}
        prevHref={prevHref}
        prevText={prevText}
      />
    </section>
  );
};

export default Details;
