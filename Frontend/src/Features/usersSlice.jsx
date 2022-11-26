import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    logged: false
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        loginUser: (state) => {
            state.logged = true
        },
        logoutUser: (state) => {
            state.logged = false
        },
        removeUser: (state, action) => {
            let removeUsr = state.value.filter((item, i) => i === action.payload.index)
            state.value.splice(state.value.indexOf(removeUsr), 1)
            state.logged = false
        }
    }
})

export const { addUser, loginUser, logoutUser, removeUser } = usersSlice.actions

export default usersSlice.reducer