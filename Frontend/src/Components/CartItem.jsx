import React from 'react'

function CartItem({ item }) {
    return (

        <div className="cartItem">
            <img src={item.image} alt="" />
            <div className="itemDetails">
                <p>{item.title}</p>
            </div>
            <div className="pricing">
                <div className='qtty'>
                    <p>Quantity:</p>
                    <div className='itemQuantity'>
                        <p className='operator'>-</p>
                        <p>1</p>
                        <p className='operator'>+</p>
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