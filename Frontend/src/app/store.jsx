import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../Features/productsSlice'
import usersReducer from '../Features/usersSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  }
})

export default store