import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import authSlice from './features/auth/authSlice';
import itemsSlice from './features/items/itemsSlice';
import categoriesSlice from './features/categories/categoriesSlice';
import { cartReducer } from './features/cart/cartSlice';
import  orderReducer  from './features/orders/ordersSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import searchSlice from './features/items/searchSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const reducers = combineReducers({
  auth: authSlice,
  items: itemsSlice,
  categories: categoriesSlice,
  cart: cartReducer,
  orders: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
export const persistor = persistStore(store);
