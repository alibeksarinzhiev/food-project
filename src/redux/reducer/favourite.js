import {createSlice} from "@reduxjs/toolkit";

const initialState={
    data:[],
    filter:{}
}
export const favouriteSlice=createSlice({
    name:'favourite',
    initialState,
    reducers:{
    addFavorite: (state,action)=>{
        state.data = state.data.findIndex((el)=>el.id === action.payload.id) >-1 ?alert('уже есть'):[...state.data,{...action.payload}]
     },
      removeFavorite: (state,action)=>{
        state.data=state.data.map((el)=>{
    if(el.id === action.payload.id){
        return { el }
    }
    return el
        })

     },
  
     
    }
})
export const {addFavorite,removeFavorite} = favouriteSlice.actions
export default favouriteSlice.reducer