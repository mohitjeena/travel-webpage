import React from 'react'
import products from "../../images/products.jpg"
import Common from './common'
const Product = () => {
  return (
    <div className='product-div'>
     <Common imgURL={products} title="Products"/>
    </div>
  )
}

export default Product
