import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "../CartSlice/CartSlice";



export const mystore= configureStore({
reducer:{
    cart:CartSlice,
},
});