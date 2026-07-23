// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Tipos inferidos requeridos por la rúbrica
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;