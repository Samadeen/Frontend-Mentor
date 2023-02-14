import { projectData } from '../../data';
import Button from '../../layout/Button/Button';
import styles from './Project.module.scss';

const Projects = () => {
  return (
    <div className='mw'>
      <div className={`${styles.project_headings}`}>
        <h2>Projects</h2>
        <Button linkText='Contact Me' />
      </div>
      <div className={styles.projectContainer}>
        {projectData.map((project, idx) => {
          return (
            <div key={idx} className={styles.project_stack_details}>
              <div className={styles.hover}>
                <Button linkText='View Project' marginBottom />
                <Button linkText='View Code' />
              </div>
              <img src={project.img} alt={`${project.title}`} />
              <h3>{project.title}</h3>
              <div className={styles.stack}>
                <p>{project.html}</p>
                <p>{project.css}</p>
                <p>{project.javascript}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
