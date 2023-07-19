import { useContext } from 'react';
import { useShoppingCart } from '../../contexts/cart-context';
import styles from './Checkout.module.scss';
import Button from '../../layouts/Button/Button';
import { ProductContext } from '../../api/product-api';

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

interface ProductContextType {
  products: Product[];
  selectedItems: Product[];
}
const Checkout = () => {
  const {
    cartItems,
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
    clearCart,
    handleToggle,
  } = useShoppingCart();

  const { selectedItems } = useContext(ProductContext) as ProductContextType;
  return (
    <div className={styles.checkout_wrapper}>
      <div className={styles.backdrop} onClick={() => handleToggle()} />
      <section className={styles.checkout_container}>
        <div className={styles.top}>
          <h2>Cart ({selectedItems.length})</h2>
          <p onClick={() => clearCart()}>Remove all</p>
        </div>
        <div className={styles.items}>
          {selectedItems.length > 0 ? (
            selectedItems.map((item) => {
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
                  <div
                    className={styles.control}
                    onClick={() =>
                      getItemQuantity(item.id) < 1 && removeFromCart(item.id)
                    }
                  >
                    <button onClick={() => decreaseCartQuantity(item.id)}>
                      -
                    </button>
                    <span>{getItemQuantity(item.id)}</span>
                    <button onClick={() => increaseCartQuantity(item.id)}>
                      +
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>Your Cart is Empty</h2>
          )}
        </div>
        {selectedItems.length > 0 && (
          <div className={styles.total}>
            <p>Total</p>
            <h5>
              $
              {cartItems
                .reduce((total, cartItem) => {
                  const item = selectedItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
                .toLocaleString()}
            </h5>
          </div>
        )}
        {selectedItems.length > 0 && (
          <div className={styles.button} onClick={() => handleToggle()}>
            <Button
              btnText='Checkout'
              orange={true}
              to={true}
              product='/checkout-page'
              width={true}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Checkout;
