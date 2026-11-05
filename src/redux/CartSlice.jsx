import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },

    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        const difference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalQuantity += difference;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;