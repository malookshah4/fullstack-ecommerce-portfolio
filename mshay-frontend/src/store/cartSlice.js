import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push({...newItem, quantity: 1 });
      }
    },
    removeItem: (state,action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id != idToRemove)

    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
})

export const { toggleCart, addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;