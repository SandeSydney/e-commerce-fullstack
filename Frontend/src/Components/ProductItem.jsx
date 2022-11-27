import React from 'react'

function ProductItem({ product }) {
  return (
    <div className='productItem'>
      <img src={product.image_url} alt="Product Item" />
      <p>{product.name}</p>
      <p>Ksh. {product.price}</p>
      <p>{product.description}</p>
      <p>{product.discount_rate}% Off!</p>
      <button className='addToCartBtn'>Add to Cart</button>
    </div>
  )
}

export default ProductItem