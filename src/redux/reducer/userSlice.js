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
    }
})
export default userSlice.reducer
export const { loginSuccess } = userSlice.actions