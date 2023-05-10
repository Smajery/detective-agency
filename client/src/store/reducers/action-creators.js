import {DarkModeActionCreator} from "./dark-mode/action-creator";
import {AuthActionCreator} from "./auth/action-creator";

export const AllActionCreators  = {
    ...DarkModeActionCreator,
    ...AuthActionCreator
}
