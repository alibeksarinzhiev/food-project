import { configureStore } from '@reduxjs/toolkit'
import products from './reducer/products'
import users from './reducer/userSlice'
import cart from './reducer/cart'
import favourite from './reducer/favourite'

export const store = configureStore({
    reducer:{
        products,
        users,
        cart,
        favourite

    }
})
