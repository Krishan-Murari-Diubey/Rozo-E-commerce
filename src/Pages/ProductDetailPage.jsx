import React from 'react'
import ProductDetail from '../features/productList/Components/ProductDetail'
import Navbar from '../features/Auth/Components/Navbar'

const ProductDetailPage = () => {
  return (
    <div>
        <Navbar>
      <ProductDetail/>
      </Navbar>
    </div>
  )
}

export default ProductDetailPage
