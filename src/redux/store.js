import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../redux/example/counterSlice";
// import cartReducer from "redux/reducer/cartSlice";
import userReducer from "./reducer/userSlice";
import categoryReducer from "./reducer/voucherSlice";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // shoppingCart: cartReducer,
    user: userReducer,
    category: categoryReducer,
  },
});
