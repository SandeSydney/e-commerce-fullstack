import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../Features/productsSlice'
import usersReducer from '../Features/usersSlice'
import cartReducer from '../Features/cartSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer
  }
})

export default store