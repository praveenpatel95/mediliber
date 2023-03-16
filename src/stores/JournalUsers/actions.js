import * as types from './constant'

//GET LIST
export const journalUsers = (payload) => ({
    type:types.JOURNAL_USERS,
    payload
});

export const journalUsersSuccess = (payload) => ({
    type:types.JOURNAL_USERS_SUCCESS,
    payload
});

export const journalUsersFailure = (error) => ({
    type:types.JOURNAL_USERS_FAILURE,
    error
});

//CREATE
export const journalUserCreate = (payload) => ({
    type:types.JOURNAL_USER_CREATE,
    payload
});

export const journalUserCreatSuccess = (payload) => ({
    type:types.JOURNAL_USER_CREATE_SUCCESS,
    payload
});


export const journalUserCreateFailure = (error) => ({
    type:types.JOURNAL_USER_CREATE_FAILURE,
    error
});

//DELETE BY ID
export const journalUserDelete = (payload) => ({
    type:types.JOURNAL_USER_DELETE,
    payload
});

export const journalUserDeleteSuccess = (payload) => ({
    type:types.JOURNAL_USER_DELETE_SUCCESS,
    payload
});


export const journalUserDeleteFailure = (error) => ({
    type:types.JOURNAL_USER_DELETE_FAILURE,
    error
});