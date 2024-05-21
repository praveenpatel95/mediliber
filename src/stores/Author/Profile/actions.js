import * as types from './constant'

//GET profile
export const getAuthorProfile = (payload) => ({
    type:types.GET_AUTHOR_PROFILE,
    payload
});

export const getAuthorProfileSuccess = (payload) => ({
    type:types.GET_AUTHOR_PROFILE_SUCCESS,
    payload
});


export const getAuthorProfileFailure = (error) => ({
    type:types.GET_AUTHOR_PROFILE_FAILURE,
    error
});

//Update profile
export const updateAuthorProfile = (payload) => ({
    type:types.UPDATE_AUTHOR_PROFILE,
    payload
});

export const updateAuthorProfileSuccess = (payload) => ({
    type:types.UPDATE_AUTHOR_PROFILE_SUCCESS,
    payload
});


export const updateAuthorProfileFailure = (error) => ({
    type:types.UPDATE_AUTHOR_PROFILE_FAILURE,
    error
});
