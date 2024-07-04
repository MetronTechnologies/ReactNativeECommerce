import CartReducer from "./reducers/CartReducer";
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        cart: CartReducer
    }
});