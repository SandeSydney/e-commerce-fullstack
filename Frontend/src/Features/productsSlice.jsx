import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const DB_URL = 'http://localhost:4000/products'

const initialState = {
    value: [],
    status: 'idle',
    error: null,
    showAdd: false
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await axios.get(DB_URL)
        let productData = []
        for(let key in response.data){
            productData.push({
                id: response.data[key].id,
                name: response.data[key].name,
                description: response.data[key].description,
                price: response.data[key].price,
                image_url: response.data[key].image_url,
                discount_rate: response.data[key].discount_rate
            })
        }
        // console.log(productData);
        return productData
    } catch (err) {
        return err.message
    }
})

export const addNewProduct = createAsyncThunk('products/addNewProduct', async (initialProduct) => {
    try {
        const response = await axios.post(DB_URL, initialProduct)
        return response.data
    } catch (error) {
        return error.message
    }
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            return state.value.filter((item, i) => i !== action.payload.index)
        },
        showAddForm: (state, action) => {
            state.showAdd = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const loadedProducts = action.payload.map(product => {
                    return product
                })

                state.value = state.value.concat(loadedProducts)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewProduct.fulfilled, (state, action) => {
                state.value.push(action.payload)
            })
    }
})

export const selectAllProducts = (state) => state.products.value
export const getproductsStatus = (state) => state.products.status
export const getProductsError = (state) => state.products.error
export const getShowAddForm = (state) => state.products.showAdd
export const { addProduct, deleteProduct, showAddForm } = productsSlice.actions
export default productsSlice.reducer