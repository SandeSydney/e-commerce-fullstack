import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    content: [],
    error: null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const itemInCart = state.content.find((item) => item.id === action.payload.id)
            if (itemInCart) {
                itemInCart.quantity++
            } else {
                state.content.push({ ...action.payload, quantity: 1 })
            }
        },
        removeCartItem: (state, action) => {
            const newContent = state.content.filter((item) => item.id !== action.payload.id)
            state.content = newContent
        },
        increaseItemQuantity: (state, action) => {
            const item = state.content.find((item) => item.id === action.payload.id)
            item.quantity++
        },
        decreaseItemQuantity: (state, action) => {
            const item = state.content.find(item => item.id === action.payload.id)
            if (item.quantity === 1) {
                const newContent = state.content.filter((item) => item.id !== action.payload.id)
                state.content = newContent
            } else {
                item.quantity--
            }
        }
    }
})

export const selectAllCartItems = (state) => state.cart.content
export default cartSlice.reducer
export const { addCartItem, increaseItemQuantity, decreaseItemQuantity, removeCartItem } = cartSlice.actions