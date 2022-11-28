import React from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../Features/cartSlice'

function ProductItem({ product }) {
  const dispatch = useDispatch()
  const sendtocart = ()=>{
    dispatch(addCartItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      discount_rate: product.discount_rate,
      quantity: 1
    }))
  }

  return (
    <div className='productItem'>
      <img src={product.image_url} alt="Product Item" />
      <p>{product.name}</p>
      <p>Ksh. {product.price}</p>
      <p>{product.description}</p>
      <p>{product.discount_rate}% Off!</p>
      <button className='addToCartBtn' onClick={sendtocart}>Add to Cart</button>
    </div>
  )
}

export default ProductItem