import * as types from "./constant";

export const initialState = {
    isLoggingIn: false,
    isAuthenticating: false,
    isLoggingOut: false,
    user: null,
    token: null,

    isAuthenticated: false,
    error: null,
    loginError: null,
    setPasswordSubmit: false,
    setPasswordStatus: false,
    setPasswordErr: null,

    isRegistering: false,
    isRegistered: false,
    registerError: false,

    isProfileUpdating: false,
    isProfileUpdatingError: null,

    isPasswordUpdating: false,
    isPasswordUpdatingError: null,

};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER:
            return {
                ...state,
                isRegistering: true,
                registerError: null,
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                registerError: false,
                isRegistered: true,
            }
        case types.REGISTER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                registerError: action.payload,
            };


        case types.LOGIN:
            return {
                ...state,
                isLoggingIn: true,
                loginError: null,
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isAuthenticating: false,
                isLoggingIn: false,
                user: action.payload.user,
                token: action.payload.token,
                loginError: null,
            };


        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                loginError: action.error,
            };

        //done above
        case types.LOGOUT:
            return {
                ...state,
                isLoggingOut: true,
                loginError: null,
            };

        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                isAuthenticating: false,
                user: null,
                token: null,
            };

        case types.LOGOUT_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                isAuthenticating: false,
                user: null,
                token: null,
            };

        //update profile
        case types.UPDATE_PROFILE:
            return {
                ...state,
                isProfileUpdating: true,
                isProfileUpdatingError: null,
            };
        case types.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isProfileUpdating: false,
                user: action.payload,
            };


        case types.UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                isProfileUpdating: false,
                isProfileUpdatingError: action.error,
            };

        //update password
        case types.UPDATE_PASSWORD:
            return {
                ...state,
                isPasswordUpdating: true,
                isPasswordUpdatingError: null,
            };
        case types.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                isPasswordUpdating: false,
            };


        case types.UPDATE_PASSWORD_FAILURE:
            return {
                ...state,
                isPasswordUpdating: false,
                isPasswordUpdatingError: action.error,
            };

        default:
            return state;
    }
};

export default AuthReducer;
