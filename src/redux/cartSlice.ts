// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Regla: No duplicidad, solo incrementa la cantidad
        existingItem.quantity += 1;
      } else {
        // Regla: Agrega el producto con cantidad inicial de 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart: (state) => {
      // Regla: Vaciar completamente el carrito
      state.items = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;