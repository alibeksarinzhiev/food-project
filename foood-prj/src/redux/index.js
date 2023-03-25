import { configureStore,combineReducers } from '@reduxjs/toolkit'
import products from './reducer/products'
import users from './reducer/userSlice'
import cart from './reducer/cart'
import favourite from './reducer/favourite'
import storage from 'redux-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";


const rootReducer = combineReducers({
    products,
    users,
    cart,
    favourite
})

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export default store

