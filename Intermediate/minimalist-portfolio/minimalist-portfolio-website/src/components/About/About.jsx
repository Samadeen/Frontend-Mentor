import Card from '../Card/Card';
import styles from './About.module.scss';
import person from '../../assets/images/homepage/desktop/image-homepage-profile.jpg';

const About = () => {
  return (
    <section className={styles.about_container}>
      <img src={person} alt='My Picture' />
      <Card
        title='About Me'
        description='I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.'
        buttonText='Go To Portfolio'
        buttonHref='portfolio'
      />
    </section>
  );
};

export default About;
