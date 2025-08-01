import React from 'react'
import Cards from '../components/Product.jsx';
import productsData from "../components/data.js";

const Product = () => {
  return (
    <div className='bg-gray-100'>
      <Cards products={productsData} />
    </div>
  )
}

export default Product;