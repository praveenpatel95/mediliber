import * as types from './constant'

//GET LIST
export const reviewerBoardList = (payload) => ({
    type:types.REVIEWER_BOARD_LIST,
    payload
});

export const reviewerBoardListSuccess = (payload) => ({
    type:types.REVIEWER_BOARD_LIST_SUCCESS,
    payload
});


export const reviewerBoardListFailure = (error) => ({
    type:types.REVIEWER_BOARD_LIST_FAILURE,
    error
});

//CREATE
export const reviewerBoardCreate = (payload) => ({
    type:types.REVIEWER_BOARD_CREATE,
    payload
});

export const reviewerBoardCreateSuccess = (payload) => ({
    type:types.REVIEWER_BOARD_CREATE_SUCCESS,
    payload
});


export const reviewerBoardCreateFailure = (error) => ({
    type:types.REVIEWER_BOARD_CREATE_FAILURE,
    error
});

//GET BY ID
export const reviewerBoardGet = (payload) => ({
    type:types.REVIEWER_BOARD_GET,
    payload
});

export const reviewerBoardGetSuccess = (payload) => ({
    type:types.REVIEWER_BOARD_GET_SUCCESS,
    payload
});


export const reviewerBoardGetFailure = (error) => ({
    type:types.REVIEWER_BOARD_GET_FAILURE,
    error
});

//UPDATE BY ID
export const reviewerBoardUpdate = (payload) => ({
    type:types.REVIEWER_BOARD_UPDATE,
    payload
});

export const reviewerBoardUpdateSuccess = (payload) => ({
    type:types.REVIEWER_BOARD_UPDATE_SUCCESS,
    payload
});


export const reviewerBoardUpdateFailure = (error) => ({
    type:types.REVIEWER_BOARD_UPDATE_FAILURE,
    error
});

//DELETE BY ID
export const reviewerBoardDelete = (payload) => ({
    type:types.REVIEWER_BOARD_DELETE,
    payload
});

export const reviewerBoardDeleteSuccess = (payload) => ({
    type:types.REVIEWER_BOARD_DELETE_SUCCESS,
    payload
});


export const reviewerBoardDeleteFailure = (error) => ({
    type:types.REVIEWER_BOARD_DELETE_FAILURE,
    error
});