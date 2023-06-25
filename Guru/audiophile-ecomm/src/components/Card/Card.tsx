import Button from '../../layouts/Button/Button';
import styles from './Card.module.scss';

interface CardProps {
  newProduct?: boolean;
  title: string;
  description: string;
  img: string;
  id: number;
  reverse: boolean;
}

const Card: React.FC<CardProps> = ({
  newProduct,
  title,
  description,
  img,
  id,
  reverse,
}) => {
  const imgString = img.slice(1);
  return (
    <section
      className={styles.card_container}
      style={reverse ? { flexDirection: 'row-reverse' } : {}}
    >
      <img src={`src/${imgString}`} alt={title} />
      <div className={styles.card_details}>
        {newProduct && <h6>New Product</h6>}
        <h2>{title}</h2>
        <p>{description}</p>
        <Button
          btnText='See Product'
          orange={true}
          product={`/${id}`}
          to={true}
        />
      </div>
    </section>
  );
};

export default Card;
