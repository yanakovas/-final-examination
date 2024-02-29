import styles from './CartItemView.module.css';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../../cart/cartSlice';
import { useDispatch } from 'react-redux';
import Item from '../../items/types/Item';
import CartItem from '../types/CartItem';

type CartItemViewProps = {
  cartItem: CartItem;
};

function CartItemView({ cartItem }: CartItemViewProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={cartItem.item.img} className={styles.img} alt="..." />
      <div className={styles.text}>
        <p className={styles.textP}>{cartItem.item.name}</p>
        <p>
          <strong>{cartItem.item.price} ₽</strong>
        </p>
        <div className={styles.btn}>
          <button onClick={() => dispatch(decrementQuantity(cartItem.item.id))}>
            -
          </button>
          <p>{cartItem.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(cartItem.item.id))}>
            +
          </button>
        </div>

        <button
          className={styles.btnDelet}
          onClick={() => dispatch(removeItem(cartItem.item.id))}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default CartItemView;
