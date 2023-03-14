import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: [],
    filter: {
        name: ''
    },
    error: '',
    status: ''
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.data = action.payload
        },
        searchProduct: (state,action)=>{
            state.filter={
                ...state.filter, name:action.payload
            }
        }
    }
})
export const { setAllProducts,searchProduct } = productsSlice.actions
export default productsSlice.reducer