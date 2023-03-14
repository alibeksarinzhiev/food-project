import {createSlice} from "@reduxjs/toolkit";

const initialState={
    data:[],
    filter:{}
}
const favoriteSlice=createSlice({
    name:'favorite',
    initialState,
    reducers:{

    }
})
export default favoriteSlice.reducer