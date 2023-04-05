import * as types from './constant'

//GET LIST
export const tempArticleList = (payload) => ({
    type:types.TEMP_ARTICLE_LIST,
    payload
});

export const tempArticleListSuccess = (payload) => ({
    type:types.TEMP_ARTICLE_LIST_SUCCESS,
    payload
});


export const tempArticleListFailure = (error) => ({
    type:types.TEMP_ARTICLE_LIST_FAILURE,
    error
});

//CREATE
export const tempArticleCreate = (payload) => ({
    type:types.TEMP_ARTICLE_CREATE,
    payload
});

export const tempArticleCreateSuccess = (payload) => ({
    type:types.TEMP_ARTICLE_CREATE_SUCCESS,
    payload
});


export const tempArticleCreateFailure = (error) => ({
    type:types.TEMP_ARTICLE_CREATE_FAILURE,
    error
});

//GET BY ID
export const tempArticleGet = (payload) => ({
    type:types.TEMP_ARTICLE_GET,
    payload
});

export const tempArticleGetSuccess = (payload) => ({
    type:types.TEMP_ARTICLE_GET_SUCCESS,
    payload
});


export const tempArticleGetFailure = (error) => ({
    type:types.TEMP_ARTICLE_GET_FAILURE,
    error
});

//UPDATE BY ID
export const tempArticleUpdate = (payload) => ({
    type:types.TEMP_ARTICLE_UPDATE,
    payload
});

export const tempArticleUpdateSuccess = (payload) => ({
    type:types.TEMP_ARTICLE_UPDATE_SUCCESS,
    payload
});


export const tempArticleUpdateFailure = (error) => ({
    type:types.TEMP_ARTICLE_UPDATE_FAILURE,
    error
});

//DELETE BY ID
export const tempArticleDelete = (payload) => ({
    type:types.TEMP_ARTICLE_DELETE,
    payload
});

export const tempArticleDeleteSuccess = (payload) => ({
    type:types.TEMP_ARTICLE_DELETE_SUCCESS,
    payload
});


export const tempArticleDeleteFailure = (error) => ({
    type:types.TEMP_ARTICLE_DELETE_FAILURE,
    error
});