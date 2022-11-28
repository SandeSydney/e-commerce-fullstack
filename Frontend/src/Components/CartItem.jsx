import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { decreaseItemQuantity, increaseItemQuantity, singleItemQuantity } from '../Features/cartSlice'

function CartItem({ item }) {
    const dispatch = useDispatch()

    return (
        <div className="cartItem">
            <img src={item.image_url} alt="" />
            <div className="itemDetails">
                <p>{item.name}</p>
            </div>
            <div className="pricing">
                <div className='qtty'>
                    <p>Quantity:</p>
                    <div className='itemQuantity'>
                        <button className='operator' onClick={()=>{dispatch(decreaseItemQuantity)}}>-</button>
                        <p>{item.quantity}</p>
                        <button className='operator' onClick={()=>{dispatch(increaseItemQuantity)}}>+</button>
                    </div>

                </div>
                <p>Price: {item.price}</p>
            </div>
            <div>
                <button className='deleteBtn'>Delete</button>
            </div>
        </div>
    )
}

export default CartItem