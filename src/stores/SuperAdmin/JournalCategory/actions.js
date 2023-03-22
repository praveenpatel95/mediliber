import * as types from './constant'

export const journalCategoryList = (payload) => ({
    type:types.JOURNAL_CATEGORY_LIST,
    payload
});

export const journalCategoryListSuccess = (payload) => ({
    type:types.JOURNAL_CATEGORY_LIST_SUCCESS,
    payload
});


export const journalCategoryListFailure = (error) => ({
    type:types.JOURNAL_CATEGORY_LIST_FAILURE,
    error
});

//create
export const journalCategoryCreate = (payload) => ({
    type:types.JOURNAL_CATEGORY_CREATE,
    payload
});

export const journalCategoryCreateSuccess = (payload) => ({
    type:types.JOURNAL_CATEGORY_CREATE_SUCCESS,
    payload
});


export const journalCategoryCreateFailure = (error) => ({
    type:types.JOURNAL_CATEGORY_CREATE_FAILURE,
    error
});

//GET BY ID
export const journalCategoryGet = (payload) => ({
    type:types.JOURNAL_CATEGORY_GET,
    payload
});

export const journalCategoryGetSuccess = (payload) => ({
    type:types.JOURNAL_CATEGORY_GET_SUCCESS,
    payload
});

export const journalCategoryGetFailure = (error) => ({
    type:types.JOURNAL_CATEGORY_GET_FAILURE,
    error
});

//update
export const journalCategoryUpdate = (payload) => ({
    type:types.JOURNAL_CATEGORY_UPDATE,
    payload
});

export const journalCategoryUpdateSuccess = (payload) => ({
    type:types.JOURNAL_CATEGORY_UPDATE_SUCCESS,
    payload
});

export const journalCategoryUpdateFailure = (error) => ({
    type:types.JOURNAL_CATEGORY_UPDATE_FAILURE,
    error
});

//DELETE ACTION
export const journalCategoryDelete = (payload) => ({
    type:types.JOURNAL_CATEGORY_DELETE,
    payload
});

export const journalCategoryDeleteSuccess = (payload) => ({
    type:types.JOURNAL_CATEGORY_DELETE_SUCCESS,
    payload
});

export const journalCategoryDeleteFailure = (error) => ({
    type:types.JOURNAL_CATEGORY_DELETE_FAILURE,
    error
});