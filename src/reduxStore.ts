//Store, Actions, Reducer
//Toolkit
// Store ->Slice(Reducer->actions(RTK))

import { configureStore } from "@reduxjs/toolkit";
import CartCountReducer from "./CartCountSlice"
import ProductReducer from "./ProductSlice"
//1. Create a Store
const store=configureStore({
    reducer:{
        cartCount:CartCountReducer,
        product:ProductReducer

    }
})
export default store;
//store.getState()
 export type RootType=ReturnType<typeof store.getState>
