import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items:[]
  },
  reducers: {
addToCart: (state, action) => {
  const existingItem = state.items.find(
    (item) => item.productid === action.payload.productid
  );

  // 1. { ...action.payload, quantity: 1 }
// This creates a new object using:
// Spread operator (...action.payload):

// Copies all properties from action.payload into the new object

//2. Adding quantity: 1:

// Adds a new property quantity with value 1
  if (existingItem) {
    existingItem.quantity += 1;  // ✅ Increase quantity
  } else {
    state.items.push({ ...action.payload, quantity: 1 });  // ✅ Add with quantity
  }
},

    removeCart: (state, action) => {

       
       const idToRemove = action.payload.productid; // item id passed from the component
       console.log("Action",action.payload)
       console.log("idToRemove",idToRemove)
      state.items =state.items.filter((item) => item.productid !== idToRemove);
    },


deleteQuantity: (state, action) => {
  const existingItem = state.items.find(
    (item) => item.productid === action.payload.productid
  );
  
  if (existingItem) {
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;  // ✅ Decrease if more than 1
    } else {
      // ✅ Remove item when quantity is 1
      state.items = state.items.filter(
        (item) => item.productid !== action.payload.productid
      );
    }
  }
},
  clearCart: (state) => {
      state.items = [];
    },
  },
});


export const {addToCart,clearCart,deleteQuantity,removeCart} = CartSlice.actions;
export default CartSlice.reducer;
