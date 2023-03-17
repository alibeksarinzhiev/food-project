import { createSlice } from "@reduxjs/toolkit";


 const initialState = {
    user : null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null
        }
    }
})
export default userSlice.reducer
export const { loginSuccess, logOut } = userSlice.actions