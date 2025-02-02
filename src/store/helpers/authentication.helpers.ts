import { IAuthenticationState } from "@/types/redux/authentication-state";

export const getIsAuthenticated = (state: IAuthenticationState) => state.authentication.isAuthenticated;