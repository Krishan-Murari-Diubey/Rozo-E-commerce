import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/productList/ProductSlice';
import CartSlice from '../features/Cart/CartSlice';
import AuthReducer from '../features/Auth/AuthSlice';
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart : CartSlice,
    auth: AuthReducer,
  },
});
