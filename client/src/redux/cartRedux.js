import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state,action) => {
      state.quantity -= 1;
      for(let i=0;i<state.products.length;i++){
        if(state.products[i]===action.payload)
          state.products.splice(i,1)
      }
      // state.products.push(action.payload);
      state.total -= action.payload.price * action.payload.quantity;
    },
    emptyCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
      state.initial = 0; 
    },
    initialItem: (state, action) => {
      state.initial = action.payload;
    },
  },
});

export const { addProduct,removeProduct,emptyCart,initialItem } = cartSlice.actions;
export default cartSlice.reducer;