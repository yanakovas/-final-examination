import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OrdersState from "./types/State";
import * as api from "./api";
import Order, { OrderId } from "./types/Order";

// 1. начальное состояние
const initialState: OrdersState = {
  orders: [],
};

// 2. асинхронные операции - санки

// loadItems - это actionCreator
export const loadOrders = createAsyncThunk("orders/loadOrders", async () => {
  const orders = await api.loadOrders();
  // то что возвращает thunk всегда попадает в action.payload
  return orders;
});

export const orderDeleted = createAsyncThunk(
  "orders/orderDeleted",
  async (id: OrderId) => {
    const deletedItemId = await api.deleteOrder(id);    
    return deletedItemId;
  }
);


export const orderUpdated = createAsyncThunk(
  "orders/orderUpdated",
  async (order: Order) => {
    await api.updateOrder(order);
    return order;
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  // здесь описываем реакции на асинхронные операции (санки)
  extraReducers: (builder) => {
    builder
      // то выполни этот редьюсер (измени стэйт)
      .addCase(loadOrders.fulfilled, (state, action) => {
        const orders = action.payload;
        state.orders = orders;
      })
      // когда thunk loadSuggestions завершиться неудачей
      .addCase(loadOrders.rejected, (state, action) => {
        // в action.error попадёт ошибка сгенерированная санком
        state.loadError = action.error.message;
      })
      .addCase(orderDeleted.fulfilled, (state, action) => {
        state.orders = state.orders.filter((order) => order.id !== action.payload);
      })
      .addCase(orderDeleted.rejected, (state, action) => {
        state.loadError = action.error.message;
      })
      .addCase(orderUpdated.fulfilled, (state, action) => {
        const newOrder = action.payload;
        state.orders = state.orders.map((order) =>
          order.id === newOrder.id ? newOrder : order
        );
      })
      .addCase(orderUpdated.rejected, (state, action) => {
        state.loadError = action.error.message;
      });
  },
});

export default ordersSlice.reducer;
