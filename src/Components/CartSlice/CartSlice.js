import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items:[]
  },
  reducers: {
   addToCart: (state,actions)=>{
    state.items.push(actions.payload)
   }
  },
});


export const {addToCart} = CartSlice.actions;
export default CartSlice.reducer;
