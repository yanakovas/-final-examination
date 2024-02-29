import { useSelector } from 'react-redux';
import { selectCartItems } from '../../items/selectors';

type TotalCart = {
  totalPrice: number;
  totalQuantity: number;
};

function Total(): JSX.Element {
  const cart = useSelector(selectCartItems);

  const getTotal = (): TotalCart => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <p>
      Итого({getTotal().totalQuantity} шт) :{' '}
      <strong>{getTotal().totalPrice} рублей</strong>
    </p>
  );
}

export default Total;
