import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './reducers/authentication.reducer'


export const AppStore =  configureStore({
    reducer: {
        authentication: authenticationReducer
    }
})