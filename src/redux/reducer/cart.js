import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    data:[],
    filter:{

    }

}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setProduct:(state,action)=>{
            state.data = state.data.findIndex((el)=>el.id === action.payload.id)> -1?alert('уже есть'):[...state.data,{...action.payload, count:1,checked:false}]
        },
        addCount:(state,action)=>{
            state.data = state.data.map((el)=>{
                if (el.id === action.payload.id){
                    return {...el,count: el.count + 1}
                }
                return el
            })
        },
        minusCount: (state,action)=>{
            state.data=state.data.map((el)=>{
                if (el.id === action.payload.id){
                    return{...el,count:el.count === 1 ? el.count:el.count -1}
                }
                return el
            })
        }

    }
})
export const {setProduct,addCount,minusCount} = cartSlice.actions
export default cartSlice.reducer