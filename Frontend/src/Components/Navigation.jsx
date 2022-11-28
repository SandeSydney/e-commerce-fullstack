import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectAllCartItems } from '../Features/cartSlice';
import { logoutUser, removeUser } from '../Features/usersSlice';

function Navigation({ user }) {
    let navUser
    user.forEach(element => {
        navUser = element.name
    });
    const dispatch = useDispatch()
    const logUserOut = () => {
        dispatch(logoutUser())
        dispatch(removeUser())
    }

    const cart = useSelector(selectAllCartItems)
    const gettotalitems = () => {
        if (cart.length) {
            let total = 0
            for (let key in cart) {
                total += cart[key].quantity
            }
            return total
        } else {
            return 0
        }
    }


    return (
        <nav>
            <h1>
                <Link className='linkItems' to={'/homepage/products'}>
                    SanMart Shopping
                </Link>
            </h1>
            <div className="navLinks">
                <Link className='links' to={"/homepage/products"}>Products</Link>
                <Link className='links' to={"/homepage/about"}>About</Link>
                <Link className='links' to={"/homepage/contact"}>Contact</Link>
                <div className='cartNavDiv'>
                    <Link className='links' to={"/homepage/shopping-cart"}>Cart
                    </Link>
                    <div className='cartImgDiv'>
                        <div className='cartQuantity'>
                            <p>
                                {gettotalitems()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Logout'>
                <p>Logged in as: {navUser}</p>
                <div className="logout">
                    <Link className='links' to={'/'} onClick={() => logUserOut}>Logout</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
