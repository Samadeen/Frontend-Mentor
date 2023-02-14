import styles from './Skills.module.scss';
import { skillData } from '../../data';
import oval from '../../assets/Oval1.png';

const Skills = () => {
  return (
    <div className={`${styles.skillContainer} mw`}>
      {skillData.map((skill, idx) => {
        return (
          <div key={idx}>
            <h2>{skill.title}</h2>
            <p>{skill.years}</p>
          </div>
        );
      })}
      <img src={oval} alt='circle' />
    </div>
  );
};

export default Skills;
