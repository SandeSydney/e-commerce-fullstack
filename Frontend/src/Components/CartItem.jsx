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
                        <button className='operator'>-</button>
                        <p>1</p>
                        <button className='operator'>+</button>
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