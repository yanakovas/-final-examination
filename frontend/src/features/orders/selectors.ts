import { RootState } from '../../store';
// import OrderItem from '../orders//types/OrderItem';
import Order from './types/Order';

export const selectOrders = (state: RootState): Order[] => state.orders.orders;

export const selectLoaderror = (state: RootState): string | undefined => state.orders.loadError;

//export const selectLoaderror = (state: RootState): string | undefined =>
 // state.items.loadError;
// export const selectCartItems = (state: RootState): CartItem[] =>
//   state.cart.cart;
// export const selectCreateError = (state: RootState): string | undefined =>
//   state.cart.createError;

