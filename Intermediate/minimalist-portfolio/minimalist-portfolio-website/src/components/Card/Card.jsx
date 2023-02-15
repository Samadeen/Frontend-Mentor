import Button from '../../layouts/Buttons/Button';
import styles from './Card.module.scss';

const Card = ({
  title,
  description,
  stack,
  tag,
  buttonText,
  buttonHref,
  pad,
  tags,
}) => {
  return (
    <div
      className={`${styles.card_container} ${pad ? styles.pad : ''}
      }`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={tags ? styles.margin : ''}>
        {tag ? <h3>{tag}</h3> : ''}
        {stack ? <h3>{stack}</h3> : ''}
      </div>
      <Button linkText={buttonText} linkHref={buttonHref} />
    </div>
  );
};

export default Card;
