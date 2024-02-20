import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/productList/ProductSlice';
import CartSlice from '../features/Cart/CartSlice';
import AuthReducer from '../features/Auth/AuthSlice';
import OrderSlice from '../features/order/OrderSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart : CartSlice,
    auth: AuthReducer,
    order: OrderSlice,
    user:userSlice,
  },
  
});
