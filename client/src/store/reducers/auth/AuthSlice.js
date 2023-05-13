import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    currentUser: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload
        },
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    }
})

export default authSlice.reducer;