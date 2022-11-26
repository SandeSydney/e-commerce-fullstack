import React from 'react'

function CartItem({ item }) {
    return (

        <div className="cartBody">
            <img src={item.image} alt="" />
            <div className="itemDetails">
                <p>{item.title}</p>
            </div>
            <div className="pricing">
                <div className='qtty'>
                    <p>Quantity:</p>
                    <div className='itemQuantity'>
                        <p className='operator'>+</p>
                        <p>1</p>
                        <p className='operator'>-</p>
                    </div>

                </div>
                <p>Price: {item.price}</p>
            </div>
        </div>
    )
}

export default CartItem