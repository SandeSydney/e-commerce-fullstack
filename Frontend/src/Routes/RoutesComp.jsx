import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import About from '../Components/About'
import AddProduct from '../Components/AddProduct'
import Contact from '../Components/Contact'
import ErrorPage from '../Components/ErrorPage'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Products from '../Components/Products'
import ShoppingCart from '../Components/ShoppingCart'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: '/homepage',
        element: <Home />,
        children: [
            {
                path: 'products',
                element: <Products />,
                // children: [
                //     {
                //         path: 'add-product',
                //         element: <AddProduct />
                //     }
                // ]
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'shopping-cart',
                element: <ShoppingCart />
            }
        ]
    }
])

export default router