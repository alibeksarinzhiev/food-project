import { configureStore } from '@reduxjs/toolkit'
import products from './reducer/products'

export const store = configureStore({
    reducer:{
        products
    }
})
