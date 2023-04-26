import {darkModeSlice} from "./DarkModeSlice";

export const DarkModeActionCreator = {
    setIsDarkMode: (boolean) => dispatch => {
        dispatch(darkModeSlice.actions.setIsDarkMode(boolean))
    }
}