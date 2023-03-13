import { configureStore } from '@reduxjs/toolkit'
import products from './reducer/products'
import users from './reducer/userSlice'

export const store = configureStore({
    reducer:{
        products,
        users
    }
})
