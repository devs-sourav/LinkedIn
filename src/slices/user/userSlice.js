import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      userData: (state, action) => {
        state.loginUser = action.payload
      },
    },
})

export const { userData } = userSlice.actions
export default userSlice.reducer