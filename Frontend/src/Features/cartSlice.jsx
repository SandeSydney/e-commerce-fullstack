import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    content: [],
    error: null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action)=>{
            state.content.push(action.payload)
        }, 
        removeCartItem: (state, action)=>{
            return state.content.filter((item, idx)=>idx !== action.payload.index)
        },
        increaseItemQuantity: (state, action)=>{
            
        }
    }
})