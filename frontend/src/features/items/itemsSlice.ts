import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ItemsState from './types/State';
import * as api from './api';
import Item, { ItemId } from './types/Item';

// 1. начальное состояние
const initialState: ItemsState = {
  items: [],
};

// 2. асинхронные операции - санки

// loadItems - это actionCreator
export const loadItems = createAsyncThunk('items/loadItems', async () => {
  const items = await api.loadItems();
  // то что возвращает thunk всегда попадает в action.payload
  return items;
});

export const itemDeleted = createAsyncThunk(
  'items/itemDeleted',
  async (id: ItemId) => {
    await api.deleteItem(id);
    return id;
  }
);

export const itemCreated = createAsyncThunk(
  'items/itemCreated',
  async (item: Item) => {
    return await api.createItem(item);
  }
);

export const itemUpdated = createAsyncThunk(
  'items/itemUpdated',
  async (item: Item) => {
    await api.updateItem(item);
    return item;
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  // здесь описываем реакции на асинхронные операции (санки)
  extraReducers: (builder) => {
    builder
      // то выполни этот редьюсер (измени стэйт)
      .addCase(loadItems.fulfilled, (state, action) => {
        const items = action.payload;
        state.items = items;
      })
      // когда thunk loadSuggestions завершиться неудачей
      .addCase(loadItems.rejected, (state, action) => {
        // в action.error попадёт ошибка сгенерированная санком
        state.loadError = action.error.message;
      })
      .addCase(itemDeleted.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(itemDeleted.rejected, (state, action) => {
        state.loadError = action.error.message;
      })
      .addCase(itemCreated.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(itemCreated.rejected, (state, action) => {
        state.loadError = action.error.message;
      })
      .addCase(itemUpdated.fulfilled, (state, action) => {
        const newItem = action.payload;
        state.items = state.items.map((item) =>
          item.id === newItem.id ? newItem : item
        );
      })
      .addCase(itemUpdated.rejected, (state, action) => {
        state.loadError = action.error.message;
    })
  },
});

export default itemsSlice.reducer;
