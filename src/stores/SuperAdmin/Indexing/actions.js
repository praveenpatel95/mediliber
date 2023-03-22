import * as types from './constant'

//GET LIST
export const indexingList = (payload) => ({
    type:types.INDEXING_LIST,
    payload
});

export const indexingListSuccess = (payload) => ({
    type:types.INDEXING_LIST_SUCCESS,
    payload
});


export const indexingListFailure = (error) => ({
    type:types.INDEXING_LIST_FAILURE,
    error
});

//CREATE
export const indexingCreate = (payload) => ({
    type:types.INDEXING_CREATE,
    payload
});

export const indexingCreateSuccess = (payload) => ({
    type:types.INDEXING_CREATE_SUCCESS,
    payload
});


export const indexingCreateFailure = (error) => ({
    type:types.INDEXING_CREATE_FAILURE,
    error
});

//GET BY ID
export const indexingGet = (payload) => ({
    type:types.INDEXING_GET,
    payload
});

export const indexingGetSuccess = (payload) => ({
    type:types.INDEXING_GET_SUCCESS,
    payload
});


export const indexingGetFailure = (error) => ({
    type:types.INDEXING_GET_FAILURE,
    error
});

//UPDATE BY ID
export const indexingUpdate = (payload) => ({
    type:types.INDEXING_UPDATE,
    payload
});

export const indexingUpdateSuccess = (payload) => ({
    type:types.INDEXING_UPDATE_SUCCESS,
    payload
});


export const indexingUpdateFailure = (error) => ({
    type:types.INDEXING_UPDATE_FAILURE,
    error
});

//DELETE BY ID
export const indexingDelete = (payload) => ({
    type:types.INDEXING_DELETE,
    payload
});

export const indexingDeleteSuccess = (payload) => ({
    type:types.INDEXING_DELETE_SUCCESS,
    payload
});


export const indexingDeleteFailure = (error) => ({
    type:types.INDEXING_DELETE_FAILURE,
    error
});