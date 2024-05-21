import * as types from "./constant";

export const initialState = {
    isAuthorProfileFetching: false,
    isAuthorProfileFetchingError: null,
    AuthorProfile: {},

    isProfileUpdating: false,
    isProfileUpdatingError: null,

}

const AuthorReducer = (state = initialState, action) => {
    switch (action.type) {
        //get PROFILE
        case types.GET_AUTHOR_PROFILE:
            return {
                ...state,
                isAuthorProfileFetching: true,
                isAuthorProfileFetchingError: null,
            }
        case types.GET_AUTHOR_PROFILE_SUCCESS:
            return {
                ...state,
                isAuthorProfileFetching: false,
                AuthorProfile: action.payload
            }
        case types.GET_AUTHOR_PROFILE_FAILURE:
            return {
                ...state,
                isAuthorProfileFetching: false,
                isAuthorProfileFetchingError: action.error,
            }

        //UPDATE PROFILE
        case types.UPDATE_AUTHOR_PROFILE:
            return {
                ...state,
                isProfileUpdating: true,
                isProfileUpdatingError: null,
            }
        case types.UPDATE_AUTHOR_PROFILE_SUCCESS:
            return {
                ...state,
                isProfileUpdating: false,
                isProfileUpdatingError: null,
            }
        case types.UPDATE_AUTHOR_PROFILE_FAILURE:
            return {
                ...state,
                isProfileUpdating: false,
                isProfileUpdatingError: action.error,
            }

        default:
            return state;
    }
};
export default AuthorReducer;