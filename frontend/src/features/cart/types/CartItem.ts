import Item from '../../items/types/Item';

type CartItem = { item: Item; quantity: number };

type CartItem1 = CartItem['item'];
export type CartItemId = CartItem1['id'];

export default CartItem;
