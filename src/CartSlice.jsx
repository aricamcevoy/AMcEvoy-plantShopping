import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const itemExists = state.items.find(item => item.name === name);
        if (!itemExists) {
            state.items.push({ name, image, cost, quantity: 1 });
        } else {
            alert('Item Already in Cart');
        }
    },

    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
        }
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    
    },
  },
);

export const selectTotalItems = (state) => {
    return state.cart.items.reduce((total, item) => total + (item.quantity || 1), 0);
};

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
