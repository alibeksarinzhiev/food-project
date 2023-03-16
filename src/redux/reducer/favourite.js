import {createSlice} from "@reduxjs/toolkit";

const initialState={
    data:[],
    filter:{}
}
export const favoriteSlice=createSlice({
    name:'favorite',
    initialState,
    reducers:{
    addFavorite: (state,action)=>{
        state.data = state.data.findIndex(({el})=>el.id === action.payload) ?alert('уже есть'):{...action.payload}
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
export const {addFavorite,removeFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer