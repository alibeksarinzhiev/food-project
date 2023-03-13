import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState : {
        user : null
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
        }
    }
})
export default userSlice.reducer
export const { loginSuccess } = userSlice.actions