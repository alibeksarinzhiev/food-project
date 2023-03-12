import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    data:[],
    filter:{
        name:''
    },
    error:'',
    status:''
}
export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setAllProducts:(state,action)=>{
            state.data=action.payload
        }
        

    }
    
       
    
})
export const {setAllProducts} = productsSlice.actions
export default productsSlice.reducer