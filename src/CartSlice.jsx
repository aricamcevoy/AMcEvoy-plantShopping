import { createSlice, isPlainObject } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        console.log('Dispatching addItem with payload:', action.payload);
        const { name, image, cost } = action.payload;
        const itemExists = state.items.find(item => item.name === name);
        if (!itemExists) {
            console.log('Adding item to state:', action.payload)
            state.items.push({ name, image, cost, quantity: 1 });
        } else {
            console.log('Item already exists in state:', action.payload);
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

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
