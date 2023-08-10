import React, { useState } from 'react';
import styles from './CreateTab.module.scss';
import {
  deliveriesItem,
  drinkItem,
  grindItem,
  quantityItem,
  typeItem,
} from '../../collection-data';
import arrow from '../../assets/plan/desktop/icon-arrow.svg';
import { Link } from 'react-router-dom';

const CreateTab: React.FC = () => {
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<string | null>(null);
  const [selectedGrind, setSelectedGrind] = useState<string | null>(null);
  const [selectedDeliveries, setSelectedDeliveries] = useState<string | null>(
    null
  );
  const [drinkToggle, setDrinkToggle] = useState(true);
  const [typeToggle, setTypeToggle] = useState(false);
  const [quantityToggle, setQuantityToggle] = useState(false);
  const [grindToggle, setGrindToggle] = useState(false);
  const [deliveriesToggle, setDeliveriesToggle] = useState(false);
  const [modal, setModal] = useState(false);

  const drinkToggleHandler = () => {
    setDrinkToggle((prevState) => !prevState);
  };

  const typeToggleHandler = () => {
    setTypeToggle((prevState) => !prevState);
  };

  const quantityToggleHandler = () => {
    setQuantityToggle((prevState) => !prevState);
  };

  const grindToggleHandler = () => {
    setGrindToggle((prevState) => !prevState);
  };

  const deliveriesToggleHandler = () => {
    setDeliveriesToggle((prevState) => !prevState);
  };

  const modalHandler = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <section className={styles.createTab_container}>
      <div className={styles.tabs}>
        <button
          type='button'
          className={`${styles.tab} ${drinkToggle && styles.active} `}
          onClick={drinkToggleHandler}
        >
          <span>01</span> Preference
        </button>
        <button
          type='button'
          className={`${styles.tab} ${typeToggle && styles.active} `}
          onClick={typeToggleHandler}
        >
          <span>02</span> Bean Type
        </button>
        <button
          type='button'
          className={`${styles.tab} ${quantityToggle && styles.active} `}
          onClick={quantityToggleHandler}
        >
          <span>03</span> Quantity
        </button>
        <button
          type='button'
          className={`${styles.tab} ${grindToggle && styles.active} `}
          onClick={grindToggleHandler}
        >
          <span>04</span> Grind Option
        </button>
        <button
          type='button'
          className={`${styles.tab} ${deliveriesToggle && styles.active} `}
          onClick={deliveriesToggleHandler}
        >
          <span>05</span> Deliveries
        </button>
      </div>
      <div className={styles.select}>
        <div className={styles.drinks}>
          <h2 onClick={drinkToggleHandler}>
            How do you drink your coffee?
            <img
              src={arrow}
              alt='arrow icon'
              style={{
                transform: drinkToggle ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </h2>
          {drinkToggle && (
            <div className={styles.drink}>
              {drinkItem.map((drink) => {
                const flip = () => {
                  setSelectedDrink(drink.title);
                };
                return (
                  <div
                    onClick={flip}
                    key={drink.title}
                    className={styles.create_card}
                    style={{
                      backgroundColor:
                        selectedDrink === drink.title ? '#0E8784' : ' #f4f1eb',
                      color:
                        selectedDrink === drink.title ? '#f4f1eb' : '#333d4b',
                    }}
                  >
                    <h3>{drink.title}</h3>
                    <p>{drink.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.drinks}>
          <h2 onClick={typeToggleHandler}>
            What type of coffee?
            <img
              src={arrow}
              alt='arrow icon'
              style={{
                transform: typeToggle ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </h2>
          {typeToggle && (
            <div className={styles.drink}>
              {typeItem.map((type) => {
                const flip = () => {
                  setSelectedType(type.title);
                };
                return (
                  <div
                    onClick={flip}
                    key={type.title}
                    className={styles.create_card}
                    style={{
                      backgroundColor:
                        selectedType === type.title ? '#0E8784' : ' #f4f1eb',
                      color:
                        selectedType === type.title ? '#f4f1eb' : '#333d4b',
                    }}
                  >
                    <h3>{type.title}</h3>
                    <p>{type.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.drinks}>
          <h2 onClick={quantityToggleHandler}>
            How much would you like?
            <img
              src={arrow}
              alt='arrow icon'
              style={{
                transform: quantityToggle ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </h2>
          {quantityToggle && (
            <div className={styles.drink}>
              {quantityItem.map((quantity) => {
                const flip = () => {
                  setSelectedQuantity(quantity.title);
                };
                return (
                  <div
                    onClick={flip}
                    key={quantity.title}
                    className={styles.create_card}
                    style={{
                      backgroundColor:
                        selectedQuantity === quantity.title
                          ? '#0E8784'
                          : ' #f4f1eb',
                      color:
                        selectedQuantity === quantity.title
                          ? '#f4f1eb'
                          : '#333d4b',
                    }}
                  >
                    <h3>{quantity.title}</h3>
                    <p>{quantity.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.drinks}>
          <h2 onClick={grindToggleHandler}>
            How do you drink your coffee{' '}
            <img
              src={arrow}
              alt='arrow icon'
              style={{
                transform: grindToggle ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </h2>
          {grindToggle && (
            <div className={styles.drink}>
              {grindItem.map((grind) => {
                const flip = () => {
                  setSelectedGrind(grind.title);
                };
                return (
                  <div
                    onClick={flip}
                    key={grind.title}
                    className={styles.create_card}
                    style={{
                      backgroundColor:
                        selectedGrind === grind.title ? '#0E8784' : ' #f4f1eb',
                      color:
                        selectedGrind === grind.title ? '#f4f1eb' : '#333d4b',
                    }}
                  >
                    <h3>{grind.title}</h3>
                    <p>{grind.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.drinks}>
          <h2 onClick={deliveriesToggleHandler}>
            How do you drink your coffee{' '}
            <img
              src={arrow}
              alt='arrow icon'
              style={{
                transform: deliveriesToggle ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </h2>
          {deliveriesToggle && (
            <div className={styles.drink}>
              {deliveriesItem.map((deliveries) => {
                const flip = () => {
                  setSelectedDeliveries(deliveries.title);
                };
                return (
                  <div
                    onClick={flip}
                    key={deliveries.title}
                    className={styles.create_card}
                    style={{
                      backgroundColor:
                        selectedDeliveries === deliveries.title
                          ? '#0E8784'
                          : ' #f4f1eb',
                      color:
                        selectedDeliveries === deliveries.title
                          ? '#f4f1eb'
                          : '#333d4b',
                    }}
                  >
                    <h3>{deliveries.title}</h3>
                    <p>{deliveries.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.order}>
          <h4>Order Summary</h4>
          <p>
            "I drink my coffee using{' '}
            <span>
              {selectedDrink === null ? '_____________' : selectedDrink}
            </span>{' '}
            , with a{' '}
            <span>
              {' '}
              {selectedType === null ? '_____________' : selectedType}
            </span>{' '}
            type of bean,{' '}
            <span>
              {selectedQuantity === null ? '_____________' : selectedQuantity}{' '}
            </span>
            ground ala{' '}
            <span>
              {selectedGrind === null ? '_____________' : selectedGrind}
            </span>
            , sent to me{' '}
            <span>
              {selectedDeliveries === null
                ? '_____________'
                : selectedDeliveries}
            </span>
          </p>
        </div>
        {selectedDeliveries === null ||
        selectedDrink === null ||
        selectedGrind === null ||
        selectedQuantity === null ||
        selectedType === null ? (
          <button className={styles.button} disabled>
            Create my plan!
          </button>
        ) : (
          <button className={styles.button} onClick={modalHandler}>
            Create my plan!
          </button>
        )}
      </div>
      {modal && (
        <div className={styles.modal}>
          <div className={styles.backdrop} onClick={modalHandler} />
          <div className={styles.modal_summary}>
            <h2>Order Summary</h2>
            <p className={styles.summary}>
              "I drink my coffee using{' '}
              <span>
                {selectedDrink === null ? '_____________' : selectedDrink}
              </span>{' '}
              , with a{' '}
              <span>
                {' '}
                {selectedType === null ? '_____________' : selectedType}
              </span>{' '}
              type of bean,{' '}
              <span>
                {selectedQuantity === null ? '_____________' : selectedQuantity}{' '}
              </span>
              ground ala{' '}
              <span>
                {selectedGrind === null ? '_____________' : selectedGrind}
              </span>
              , sent to me{' '}
              <span>
                {selectedDeliveries === null
                  ? '_____________'
                  : selectedDeliveries}
              </span>
            </p>
            <p>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
            <div className={styles.checkout}>
              <h3>$14.00/mo</h3>
              <Link to='/' className={styles.button}>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreateTab;
