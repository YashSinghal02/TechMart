import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items:[]
  },
  reducers: {
   addToCart: (state,actions)=>{
    state.items.push(actions.payload)
   },
   clearCart: (state) => {
      state.items = [];
    },
  },
});


export const {addToCart,clearCart} = CartSlice.actions;
export default CartSlice.reducer;
