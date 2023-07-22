import { ChangeEvent, useContext, useState } from 'react';
import { ProductContext } from '../../api/product-api';
import styles from './Checkout.module.scss';
import { useShoppingCart } from '../../contexts/cart-context';
import Layout from '../../layouts/Layout/Layout';
import cash from '../../assets/home/desktop/cash.svg';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import ThankYou from '../../components/ThankYou/ThankYou';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  number: Yup.string().required('Number is required'),
  address: Yup.string().required('Address is required'),
  zip: Yup.string().required('ZIP code is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
});

const Checkout = () => {
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
  const [paymentMethod, setPaymentMethod] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { selectedItems } = useContext(ProductContext) as ProductContextType;
  const { getItemQuantity, cartItems } = useShoppingCart();

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  //Validation
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      payment: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSubmitted(true);
      console.log(values);
      // Perform additional actions, such as submitting the form data to a server
    },
  });

  //Form Validation

  const totalBill: number = cartItems.reduce((total, cartItem) => {
    const item = selectedItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const vat = (totalBill / 100) * 5;

  const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };
  console.log(formik.errors.email, formik.touched.email);

  return (
    <Layout>
      <section className={styles.checkout_page}>
        <h6>Go back</h6>
        <form action='' onSubmit={formik.handleSubmit}>
          <div className={styles.checkingOut_details}>
            <h1>Checkout</h1>
            <div className={styles.billing}>
              <h2>Billing Details</h2>
              <div className={styles.billing_details}>
                <label
                  htmlFor='name'
                  style={
                    formik.touched.name && formik.errors.name
                      ? { color: '#cd2c2c' }
                      : {}
                  }
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : 'Name'}
                  <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    style={
                      formik.touched.name && formik.errors.name
                        ? { border: '2px solid #CD2C2C ' }
                        : {}
                    }
                  />
                </label>
                <label
                  htmlFor='email'
                  style={
                    formik.touched.email && formik.errors.email
                      ? { color: '#CD2C2C ' }
                      : {}
                  }
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : 'Email'}
                  <input
                    // required
                    type='email'
                    id='email'
                    name='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    style={
                      formik.touched.email && formik.errors.email
                        ? { border: '2px solid #CD2C2C ' }
                        : {}
                    }
                  />
                </label>
                <label
                  htmlFor='number'
                  style={
                    formik.touched.number && formik.errors.number
                      ? { color: ' #CD2C2C ' }
                      : {}
                  }
                >
                  {formik.touched.number && formik.errors.number
                    ? formik.errors.number
                    : 'Phone Number'}
                  <input
                    type='text'
                    id='number'
                    name='number'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                    style={
                      formik.touched.number && formik.errors.number
                        ? { border: '2px solid #CD2C2C ' }
                        : {}
                    }
                  />
                </label>
              </div>
            </div>
            <div className={styles.shipping}>
              <h2>Shipping Info</h2>
              <div className={styles.shipping_details}>
                <label
                  htmlFor='address'
                  className={styles.address}
                  style={
                    formik.touched.address && formik.errors.address
                      ? { color: ' #CD2C2C ' }
                      : {}
                  }
                >
                  {formik.touched.address && formik.errors.address
                    ? formik.errors.address
                    : 'Address'}
                  <input
                    type='text'
                    id='address'
                    name='address'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    style={
                      formik.touched.address && formik.errors.address
                        ? { border: '2px solid #CD2C2C ' }
                        : {}
                    }
                  />
                </label>
                <label
                  htmlFor='zip'
                  style={
                    formik.touched.zip && formik.errors.zip
                      ? { color: ' #CD2C2C ' }
                      : {}
                  }
                >
                  {formik.touched.zip && formik.errors.zip
                    ? formik.errors.zip
                    : 'Zip Code'}
                  <input
                    type='number'
                    id='zip'
                    name='zip'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.zip}
                    style={
                      formik.touched.zip && formik.errors.zip
                        ? { border: '2px solid #CD2C2C ' }
                        : {}
                    }
                  />
                </label>
                <label
                  htmlFor='city'
                  style={
                    formik.touched.city && formik.errors.city
                      ? { color: ' #CD2C2C ' }
                      : {}
                  }
                >
                  {formik.touched.city && formik.errors.city
                    ? formik.errors.city
                    : 'City'}
                  <input
                    type='text'
                    id='city'
                    name='city'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    style={
                      formik.touched.city && formik.errors.city
                        ? { border: '2px solid #CD2C2C ' }
                        : {}
                    }
                  />
                </label>
                <label
                  htmlFor='country'
                  style={
                    formik.touched.country && formik.errors.country
                      ? { color: ' #CD2C2C ' }
                      : {}
                  }
                >
                  Country
                  <input
                    type='text'
                    id='country'
                    name='country'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    style={
                      formik.touched.country && formik.errors.country
                        ? { border: '2px solid #CD2C2C ' }
                        : {}
                    }
                  />
                </label>
              </div>
            </div>
            <div className={styles.payment_details}>
              <h2>Payment Details</h2>
              <div className={styles.payment_method}>
                <h3>Payment Method</h3>
                <div className={styles.method}>
                  <label htmlFor='e_money'>
                    e-Money
                    <input
                      required
                      type='radio'
                      name='payment'
                      value='e-money'
                      checked={paymentMethod === 'e-money'}
                      onChange={handlePaymentChange}
                    />
                  </label>
                  <label htmlFor='cash'>
                    Cash on Delivery
                    <input
                      required
                      type='radio'
                      name='payment'
                      value='cash'
                      checked={paymentMethod === 'cash'}
                      onChange={handlePaymentChange}
                    />
                  </label>
                </div>
              </div>
              {paymentMethod === 'e-money' ? (
                <div className={styles.eMoney_details}>
                  <label htmlFor='eMoney_number'>
                    e-Money Number
                    <input required type='number' />
                  </label>
                  <label htmlFor='eMoney_pin'>
                    e-Money PIN
                    <input required type='number' maxLength={4} />
                  </label>
                </div>
              ) : paymentMethod === 'cash' ? (
                <div className={styles.cash_details}>
                  <img src={cash} alt='cash' />
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          {selectedItems.length > 0 ? (
            <div className={styles.summary}>
              <h2>Summary</h2>
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
              <div className={styles.summary_total}>
                <div className={styles.total}>
                  <p>Total</p>
                  <h3> $ {totalBill.toLocaleString()}</h3>
                </div>
                <div className={styles.shipping}>
                  <p>Shipping</p>
                  <h3>$ 50</h3>
                </div>
                <div className={styles.vat}>
                  <p>Vat (Include)</p>
                  <h3>$ {vat.toFixed(1)}</h3>
                </div>
                <div className={styles.grandTotal}>
                  <p>Grand Total</p>
                  <h3>$ {(totalBill + 50 + vat).toLocaleString()}</h3>
                </div>
              </div>
              <button onClick={() => setToggle(true)}>Continue</button>
            </div>
          ) : (
            <h4 className={styles.summary}>Your Cart is Empty</h4>
          )}
        </form>
      </section>
      {toggle && isSubmitted && <ThankYou handleToggle={handleToggle} />}
    </Layout>
  );
};

export default Checkout;
