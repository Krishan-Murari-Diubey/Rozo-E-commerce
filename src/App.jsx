import { useState } from 'react'

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
    path: "/checkoutpage",
    element: <Protected><CheckOutPage/></Protected> ,
  }, 
    {
    path: "/Product-Detail/:id",
    element:<Protected><ProductDetailPage/></Protected>,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}>
  
  </RouterProvider>
    </>
  )
}

export default App
