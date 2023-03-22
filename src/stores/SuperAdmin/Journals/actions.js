import * as types from './constant'

//GET LIST
export const journalList = (payload) => ({
    type:types.JOURNAL_LIST,
    payload
});

export const journalListSuccess = (payload) => ({
    type:types.JOURNAL_LIST_SUCCESS,
    payload
});


export const journalListFailure = (error) => ({
    type:types.JOURNAL_LIST_FAILURE,
    error
});

//CREATE
export const journalCreate = (payload) => ({
    type:types.JOURNAL_CREATE,
    payload
});

export const journalCreateSuccess = (payload) => ({
    type:types.JOURNAL_CREATE_SUCCESS,
    payload
});


export const journalCreateFailure = (error) => ({
    type:types.JOURNAL_CREATE_FAILURE,
    error
});

//GET BY ID
export const journalGet = (payload) => ({
    type:types.JOURNAL_GET,
    payload
});

export const journalGetSuccess = (payload) => ({
    type:types.JOURNAL_GET_SUCCESS,
    payload
});


export const journalGetFailure = (error) => ({
    type:types.JOURNAL_GET_FAILURE,
    error
});

//UPDATE BY ID
export const journalUpdate = (payload) => ({
    type:types.JOURNAL_UPDATE,
    payload
});

export const journalUpdateSuccess = (payload) => ({
    type:types.JOURNAL_UPDATE_SUCCESS,
    payload
});


export const journalUpdateFailure = (error) => ({
    type:types.JOURNAL_UPDATE_FAILURE,
    error
});

//DELETE BY ID
export const journalDelete = (payload) => ({
    type:types.JOURNAL_DELETE,
    payload
});

export const journalDeleteSuccess = (payload) => ({
    type:types.JOURNAL_DELETE_SUCCESS,
    payload
});


export const journalDeleteFailure = (error) => ({
    type:types.JOURNAL_DELETE_FAILURE,
    error
});