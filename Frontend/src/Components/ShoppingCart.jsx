import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCartItems } from '../Features/cartSlice'
import CartItem from './CartItem'

function ShoppingCart() {
  const dispatch = useDispatch()

  const cartItems = useSelector(selectAllCartItems)

  const gettotalitems = () => {
    if (cartItems.length) {
      let totalItems = 0
      for (let key in cartItems) {
        totalItems += cartItems[key].quantity
      }
      return totalItems
    } else {
      return 0
    }
  }

  const getTotalPrice = () => {
    if (cartItems.length) {
      let totalPrice = 0
      for (let key in cartItems) {
        let itemsPrice = (cartItems[key].price) * (cartItems[key].quantity)
        totalPrice += itemsPrice
      }
      return totalPrice
    } else{
      return 0
    }
  }

  return (
    <div className='container'>
      <h2><u>Your Cart</u></h2>
      <div className="cartDisplay">

        {/* <div className="cartHead">Cart Head</div> */}

        <div className="cartBody">
          {(cartItems.length) ?
            cartItems.map((item) => { return <CartItem key={item.id} item={item} /> }) :
            <p className='noCartItems'>No items in cart. Click on a product to add one!</p>}
        </div>
        <div className="cartFooter">
          <div className="emptyspace"></div>
          <div className="totalsDiv">
            <div className='totals'>
              <p>Total Items: </p>
              <p>{gettotalitems()}</p>
            </div>
            <div className='totals'>
              <p>Total Price: </p>
              <p>{getTotalPrice()}</p>
            </div>
            <div className='pay'>
              <button className='submitBtn'>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart