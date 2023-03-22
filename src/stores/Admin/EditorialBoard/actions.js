import * as types from './constant'

//GET LIST
export const editorialBoardList = (payload) => ({
    type:types.EDITORIAL_BOARD_LIST,
    payload
});

export const editorialBoardListSuccess = (payload) => ({
    type:types.EDITORIAL_BOARD_LIST_SUCCESS,
    payload
});


export const editorialBoardListFailure = (error) => ({
    type:types.EDITORIAL_BOARD_LIST_FAILURE,
    error
});

//CREATE
export const editorialBoardCreate = (payload) => ({
    type:types.EDITORIAL_BOARD_CREATE,
    payload
});

export const editorialBoardCreateSuccess = (payload) => ({
    type:types.EDITORIAL_BOARD_CREATE_SUCCESS,
    payload
});


export const editorialBoardCreateFailure = (error) => ({
    type:types.EDITORIAL_BOARD_CREATE_FAILURE,
    error
});

//GET BY ID
export const editorialBoardGet = (payload) => ({
    type:types.EDITORIAL_BOARD_GET,
    payload
});

export const editorialBoardGetSuccess = (payload) => ({
    type:types.EDITORIAL_BOARD_GET_SUCCESS,
    payload
});


export const editorialBoardGetFailure = (error) => ({
    type:types.EDITORIAL_BOARD_GET_FAILURE,
    error
});

//UPDATE BY ID
export const editorialBoardUpdate = (payload) => ({
    type:types.EDITORIAL_BOARD_UPDATE,
    payload
});

export const editorialBoardUpdateSuccess = (payload) => ({
    type:types.EDITORIAL_BOARD_UPDATE_SUCCESS,
    payload
});


export const editorialBoardUpdateFailure = (error) => ({
    type:types.EDITORIAL_BOARD_UPDATE_FAILURE,
    error
});

//DELETE BY ID
export const editorialBoardDelete = (payload) => ({
    type:types.EDITORIAL_BOARD_DELETE,
    payload
});

export const editorialBoardDeleteSuccess = (payload) => ({
    type:types.EDITORIAL_BOARD_DELETE_SUCCESS,
    payload
});


export const editorialBoardDeleteFailure = (error) => ({
    type:types.EDITORIAL_BOARD_DELETE_FAILURE,
    error
});