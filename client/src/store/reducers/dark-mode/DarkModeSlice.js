import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: false
}

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        setIsDarkMode(state, action) {
            state.isDarkMode = action.payload
        }
    }
})

export default darkModeSlice.reducer;