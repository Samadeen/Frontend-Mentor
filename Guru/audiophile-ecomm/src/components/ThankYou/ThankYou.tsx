import styles from './ThankYou.module.scss';
import check from '../../assets/home/desktop/check.png';
import { useContext, useState } from 'react';
import { ProductContext } from '../../api/product-api';
import { useShoppingCart } from '../../contexts/cart-context';
import Button from '../../layouts/Button/Button';

const ThankYou = ({ handleToggle }) => {
  interface Product {
    id: number;
    name: string;
    slug: string;
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

  interface ProductContextType {
    products: Product[];
    selectedItems: Product[];
  }
  const { selectedItems } = useContext(ProductContext) as ProductContextType;
  const { getItemQuantity, cartItems, clearCart } = useShoppingCart();

  const totalBill: number = cartItems.reduce((total, cartItem) => {
    const item = selectedItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <div className={styles.thankYou_wrapper}>
      <div className={styles.backdrop} onClick={() => handleToggle} />
      <section className={styles.thankYou_container}>
        <img src={check} alt='check' />
        <h1>
          THANK YOU <br />
          FOR YOUR ORDER
        </h1>
        <p>You will receive an email confirmation shortly.</p>
        <div className={styles.order_summary}>
          <div className={styles.summary_details}>
            {selectedItems.map((item) => {
              return (
                <div className={styles.item_details} key={item.id}>
                  <div className={styles.item}>
                    <img
                      src={`/src${item.image.desktop.slice(1)}`}
                      alt={item.name}
                    />
                    <div className={styles.name}>
                      <h3>{item.name}</h3>
                      <p>$ {item.price * getItemQuantity(item.id)}</p>
                    </div>
                  </div>
                  <div className={styles.times}>
                    <p>x {getItemQuantity(item.id)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.total}>
            <h4>Grand Total</h4>
            <h2>$ {totalBill.toLocaleString()}</h2>
          </div>
        </div>
        <div className='' onClick={() => clearCart()}>
          <Button
            btnText='Back to Home'
            product='/'
            to={true}
            orange={true}
            width={true}
          />
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
