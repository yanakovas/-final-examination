import { useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { selectCartItems, selectItems } from '../selectors';

import styles from './itemPage.module.css';
import ARRAYBACK from './ARRAYBACK.svg';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../cart/cartSlice';
import { useState } from 'react';
import { selectUser } from '../../auth/selectors';

function ItemPage(): JSX.Element {
  const { id } = useParams();
  const items = useSelector(selectItems);
  const cartItems = useSelector(selectCartItems);
  const user = useSelector(selectUser);

  const item = items.find((item) => item.id === Number(id));
  const cartItem = cartItems.find((item) => item.item.id === Number(id));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState(false);

  const handleByeClick = (): void => {
    dispatch(addToCart({ item }));
    setText(true);
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.pic}>
          <img src={item!.img} className="card-img" alt="..." />
        </div>
        <div className={styles.productText}>
          <div className={styles.name}>
            <h5>{item!.name}</h5>
            <p>{item!.price} рублей</p>
            <br />
            <p>{item!.description}</p>
          </div>
          {!user && (
            <>
              {text ? (
                <div>
                  <button onClick={handleByeClick} className={styles.buyButton}>
                    В корзине {cartItem?.quantity}
                  </button>
                </div>
              ) : (
                <div>
                  <button onClick={handleByeClick} className={styles.buyButton}>
                    Купить
                  </button>
                </div>
              )}

              {text && (
                <div>
                  <p>Товар добавлен в корзину</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className={styles.linkBack}>
        <Link to="#" onFocus={() => navigate(-1)}>
          <img src={ARRAYBACK} alt="array back" />
        </Link>
      </div>
    </div>
  );
}

export default ItemPage;
