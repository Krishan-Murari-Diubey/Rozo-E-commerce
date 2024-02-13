import React from 'react'
import Navbar from '../features/Auth/Components/Navbar'
import ProductList from '../features/productList/Components/ProductList'

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList/>
      </Navbar>
    </div>
  )
}

export default Home
