import { IReduxAction } from "@/types/redux/action";
import { IAuthenticationState } from "@/types/redux/authentication-state";

const initialState: IAuthenticationState = {
    isAuthenticated: false
}

const authenticationReducer = (state = initialState, action: IReduxAction): IAuthenticationState => {
    switch (action.type) {
        case "update-authenticated": return { ...state, isAuthenticated: action.payload }
    }
    return state;
}

export default authenticationReducer;