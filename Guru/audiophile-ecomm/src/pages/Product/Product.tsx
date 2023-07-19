import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Product.module.scss';
import Button from '../../layouts/Button/Button';
import Shop from '../../components/Shop/Shop';
import Ad from '../../components/Ad/Ad';
import Layout from '../../layouts/Layout/Layout';
import { useShoppingCart } from '../../contexts/cart-context';

interface Product {
  id: number;
  name: string;
  image: {
    desktop: string;
  };
  gallery: {
    first: {
      desktop: string;
    };
    second: {
      desktop: string;
    };
    third: {
      desktop: string;
    };
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  others: {
    slug: string;
    name: string;
    image: {
      desktop: string;
    };
  }[];
}

const Product: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get<Product>(`http://localhost:3000/data/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(product);

  const back = () => {
    return navigate(-1);
  };

  const {
    decreaseCartQuantity,
    increaseCartQuantity,
    getItemQuantity,
    addToCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(parseInt(id ?? ''));

  const productDesktopImage = product?.image?.desktop?.slice(1);
  const galleryFirstDesktopImage = product?.gallery?.first?.desktop?.slice(1);
  const gallerySecondDesktopImage = product?.gallery?.second?.desktop?.slice(1);
  const galleryThirdDesktopImage = product?.gallery?.third?.desktop?.slice(1);

  const imagesYouMayLikeOne = product?.others?.[0]?.image?.desktop?.slice(1);
  const imagesYouMayLikeTwo = product?.others?.[1]?.image?.desktop?.slice(1);
  const imagesYouMayLikeThree = product?.others?.[2]?.image?.desktop?.slice(1);

  if (!product) {
    // Optional: Render a loading state or handle the null case
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <section className={styles.product_container}>
        <h6 onClick={back}>Go Back</h6>
        <div className={styles.product_details}>
          <img src={`src/${productDesktopImage}`} alt={product.name} />
          <div className={styles.productCard_details}>
            {product.new && <h5>New Product</h5>}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>${(product.price * quantity).toLocaleString()}</h4>
            <div className={styles.pricing}>
              <div className={styles.control}>
                <button
                  disabled={quantity === 1 && true}
                  style={quantity === 1 ? { cursor: 'not-allowed' } : {}}
                  onClick={() => decreaseCartQuantity(parseInt(id ?? ''))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => increaseCartQuantity(parseInt(id ?? ''))}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className={styles.button}
                  onClick={() => addToCart(parseInt(id ?? ''))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product_features}>
          <div className={styles.product_feature}>
            <h2>Features</h2>
            <p>{product.features}</p>
          </div>
          <div className={styles.product_box}>
            <h2>In the Box</h2>
            <ul>
              {product.includes.map((prods, index) => {
                return (
                  <li key={index}>
                    <span>{prods.quantity}x</span> {prods.item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.product_gallery}>
          <div className={styles.image_small}>
            <img src={`src/${galleryFirstDesktopImage}`} alt={product.name} />
            <img src={`src/${gallerySecondDesktopImage}`} alt={product.name} />
          </div>
          <img src={`src/${galleryThirdDesktopImage}`} alt={product.name} />
        </div>
        <div className={styles.product_alike}>
          <h2>You may also like</h2>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <img src={`src/${imagesYouMayLikeOne}`} alt={product.name} />
              <h3>{product.others[0]?.name}</h3>
              <Button
                btnText='See Product'
                orange={true}
                product={`/${
                  product.others[0]?.slug === 'xx99-mark-one-headphones'
                    ? 3
                    : product.others[0]?.slug === 'xx99-mark-two-headphones'
                    ? 4
                    : product.others[0]?.slug === 'yx1-earphones'
                    ? 1
                    : product.others[0]?.slug === 'xx59-headphones'
                    ? 2
                    : product.others[0]?.slug === 'zx7-speaker'
                    ? 5
                    : product.others[0]?.slug === 'zx9-speaker'
                    ? 6
                    : ''
                }`}
                to={true}
              />
            </div>
            <div className={styles.box}>
              <img src={`src/${imagesYouMayLikeTwo}`} alt={product.name} />
              <h3>{product.others[1]?.name}</h3>
              <Button
                btnText='See Product'
                orange={true}
                product={`/${
                  product.others[1]?.slug === 'xx99-mark-one-headphones'
                    ? 3
                    : product.others[1]?.slug === 'xx99-mark-two-headphones'
                    ? 4
                    : product.others[1]?.slug === 'yx1-earphones'
                    ? 1
                    : product.others[1]?.slug === 'xx59-headphones'
                    ? 2
                    : product.others[1]?.slug === 'zx7-speaker'
                    ? 5
                    : product.others[1]?.slug === 'zx9-speaker'
                    ? 6
                    : ''
                }`}
                to={true}
              />
            </div>
            <div className={styles.box}>
              <img src={`src/${imagesYouMayLikeThree}`} alt={product.name} />
              <h3>{product.others[2]?.name}</h3>
              <Button
                btnText='See Product'
                orange={true}
                product={`/${
                  product.others[2]?.slug === 'xx99-mark-one-headphones'
                    ? 3
                    : product.others[2]?.slug === 'xx99-mark-two-headphones'
                    ? 4
                    : product.others[2]?.slug === 'yx1-earphones'
                    ? 1
                    : product.others[2]?.slug === 'xx59-headphones'
                    ? 2
                    : product.others[2]?.slug === 'zx7-speaker'
                    ? 5
                    : product.others[2]?.slug === 'zx9-speaker'
                    ? 6
                    : ''
                }`}
                to={true}
              />
            </div>
          </div>
        </div>
        <Shop />
        <Ad />
      </section>
    </Layout>
  );
};

export default Product;
