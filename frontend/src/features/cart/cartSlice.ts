import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import CartItemView from './cartItem/CartItemView';

import Cart from './types/Cart';
import CartItem from './types/CartItem';

const initialState: Cart = {
  cart: [],
};

type CreateOrderPayload = {
  cart: CartItem[];
  contact: string;
};

export const createOrder = createAsyncThunk(
  'cart/createOrder',
  async ({ cart, contact }: CreateOrderPayload) => {
    return await api.createOrder(cart, contact);
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.item.id === action.payload.item.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.item.id === action.payload);
      item!.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.item.id === action.payload);
      if (item!.quantity === 1) {
        item!.quantity = 1;
      } else {
        item!.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
  extraReducers: (builder) => {
    builder
      // когда thunk loadSuggestions завершиться удачей (fulfilled)
      // то выполни этот редьюсер (измени стэйт)
      .addCase(createOrder.fulfilled, (state, action) => {
        state.cart = [];
      });
    //    .addCase(createOrder.rejected, (state, action) => {
    //   state..createError = action.error.message;
    // });
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
