import { useEffect, useState } from 'react'

import './App.css'
// import  Product  from './features/productList/Product'
import Home from './Pages/Home'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
import CheckOutPage from './Pages/CheckOutPage'

import CartPage from './Pages/CartPage'

import ProductDetailPage from './Pages/ProductDetailPage'
import Protected from './features/Auth/Components/Protected'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from './features/Auth/AuthSlice'
import { fetchItemsByUserIdAsync } from './features/Cart/CartSlice'
import PageNotFound from './Pages/404'
import OrderSuccessPage from './Pages/OrderSuccessPage'
import UserOrderPage from './Pages/UserOrderPage'
import UserProfile from "../src/features/user/components/UserProfile"
import { fetchLoggedInUserAsync } from './features/user/userSlice'
import Logout from './features/Auth/Components/Logout'
import ForgotPasswordPage from './Pages/ForgotPasswordPage'
import ProtectedAdmin from './features/Auth/Components/ProtectedAdmin'
import AdminHome from './Pages/AdminHome'
import AdminProductDetailPage from './features/admin/components/AdminProductDetail'
import AdminProductFormPage from './Pages/AdminProductFormPage'
import AdminOrdersPage from './Pages/AdminOrdersPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home/></Protected>,
  },
  
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signUp",
    element: <SignUpPage/>
    ,
  },
   {
    path: "/cart",
    element: <Protected><CartPage/></Protected> ,
  },
     {
    path: "/checkoutPage",
    element: <Protected><CheckOutPage/></Protected> ,
  }, 
    {
    path: "/Product-Detail/:id",
    element:<Protected><ProductDetailPage/></Protected>,
  }, 
    {
    path: "/Order-Success/:id",
    element:<OrderSuccessPage/>,
  },  
   {
    path: "*",
    element:<PageNotFound/>,
  },  
  {
    path: '/orders',
    element: <UserOrderPage/>,
  },
  {
    path: '/profile',
    element: <UserProfile/>,
  },  {
    path: '/logout',
    element: <Logout/>,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage/>,
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-detail/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
]);

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  },[dispatch, user])

  return (
    <>
    <RouterProvider router={router}>
  
  </RouterProvider>
    </>
  )
}

export default App
