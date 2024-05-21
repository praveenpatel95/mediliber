import * as types from './constant'

//GET LIST
export const articleList = (payload) => ({
    type:types.ARTICLE_LIST,
    payload
});

export const articleListSuccess = (payload) => ({
    type:types.ARTICLE_LIST_SUCCESS,
    payload
});


export const articleListFailure = (error) => ({
    type:types.ARTICLE_LIST_FAILURE,
    error
});

//CREATE
export const articleCreate = (payload) => ({
    type:types.ARTICLE_CREATE,
    payload
});

export const articleCreateSuccess = (payload) => ({
    type:types.ARTICLE_CREATE_SUCCESS,
    payload
});


export const articleCreateFailure = (error) => ({
    type:types.ARTICLE_CREATE_FAILURE,
    error
});

//GET BY ID
export const articleGet = (payload) => ({
    type:types.ARTICLE_GET,
    payload
});

export const articleGetSuccess = (payload) => ({
    type:types.ARTICLE_GET_SUCCESS,
    payload
});


export const articleGetFailure = (error) => ({
    type:types.ARTICLE_GET_FAILURE,
    error
});

//UPDATE BY ID
export const articleUpdate = (payload) => ({
    type:types.ARTICLE_UPDATE,
    payload
});

export const articleUpdateSuccess = (payload) => ({
    type:types.ARTICLE_UPDATE_SUCCESS,
    payload
});


export const articleUpdateFailure = (error) => ({
    type:types.ARTICLE_UPDATE_FAILURE,
    error
});

//DELETE BY ID
export const articleDelete = (payload) => ({
    type:types.ARTICLE_DELETE,
    payload
});

export const articleDeleteSuccess = (payload) => ({
    type:types.ARTICLE_DELETE_SUCCESS,
    payload
});


export const articleDeleteFailure = (error) => ({
    type:types.ARTICLE_DELETE_FAILURE,
    error
});