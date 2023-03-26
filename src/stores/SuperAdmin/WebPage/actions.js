import * as types from './constant'

//GET LIST
export const webpageList = (payload) => ({
    type:types.WEBPAGE_LIST,
    payload
});

export const webpageListSuccess = (payload) => ({
    type:types.WEBPAGE_LIST_SUCCESS,
    payload
});


export const webpageListFailure = (error) => ({
    type:types.WEBPAGE_LIST_FAILURE,
    error
});


//GET BY ID
export const webpageGetDetail = (payload) => ({
    type:types.WEBPAGE_GET,
    payload
});

export const webpageGetSuccess = (payload) => ({
    type:types.WEBPAGE_GET_SUCCESS,
    payload
});


export const webpageGetFailure = (error) => ({
    type:types.WEBPAGE_GET_FAILURE,
    error
});

//UPDATE BY ID
export const webpageUpdateDetail = (payload) => ({
    type:types.WEBPAGE_UPDATE,
    payload
});

export const webpageUpdateSuccess = (payload) => ({
    type:types.WEBPAGE_UPDATE_SUCCESS,
    payload
});


export const webpageUpdateFailure = (error) => ({
    type:types.WEBPAGE_UPDATE_FAILURE,
    error
});
