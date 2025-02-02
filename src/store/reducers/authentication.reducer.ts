import { IAuthenticationType } from "@/types/redux/authentication-state";
import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

const initialState: IAuthenticationType = {
    isAuthenticated: false
}


const AuthenticationSlice = createSlice({
    initialState: initialState,
    name: 'Authentication',
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    }
})

export default AuthenticationSlice.reducer;

export const { setAuthenticated } = AuthenticationSlice.actions;