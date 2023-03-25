import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    filter: {

    }

}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.data = state.data.findIndex((el) => el.id === action.payload.id) > -1 ? alert('уже есть') : [...state.data, { ...action.payload, count: 1, checked: false }]
        },
        removeProduct: (state, action) => {
            state.data = state.data.filter(el => el.checked !== action.payload)
        },
        changeCheck: (state, action) => {
            state.data = state.data.map(el => {
                if (el.id === action.payload) {
                    return { ...el, checked: el.checked = !el.checked }
                }
                return el
            })
        },
        changeAllChecked:(state , action) =>{
            state.data = state.data.map(el =>{
                return {...el,checked: el.checked = !el.checked}
            })
        },
        addCount: (state, action) => {
            state.data = state.data.map((el) => {
                if (el.id === action.payload.id) {
                    return { ...el, count: el.count + 1 }
                }
                return el
            })
        },
        minusCount: (state, action) => {
            state.data = state.data.map((el) => {
                if (el.id === action.payload.id) {
                    return { ...el, count: el.count === 1 ? el.count : el.count - 1 }
                }
                return el
            })
        }

    }
})
export const { setProduct, addCount, minusCount, removeProduct, changeCheck , changeAllChecked } = cartSlice.actions
export default cartSlice.reducer