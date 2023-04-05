import * as types from "./constant";

export const getOtherPages = (payload) => ({
    type:types.GET_OTHER_PAGES,
    payload
});

export const getOtherPagesSuccess = (payload) => ({
    type:types.GET_OTHER_PAGES_SUCCESS,
    payload
});

export const getOtherPagesFailure = (error) => ({
    type:types.GET_OTHER_PAGES_FAILURE,
    error
});

export const getOtherPageDetail = (payload) => ({
    type:types.GET_OTHER_PAGE_DETAIL,
    payload
});

export const getOtherPageDetailSuccess = (payload) => ({
    type:types.GET_OTHER_PAGE_DETAIL_SUCCESS,
    payload
});

export const getOtherPageDetailFailure = (error) => ({
    type:types.GET_OTHER_PAGE_DETAIL_FAILURE,
    error
});

//UPDATE
export const updateOtherPageDetail = (payload) => ({
    type:types.UPDATE_OTHER_PAGE_DETAIL,
    payload
});

export const updateOtherPageDetailSuccess = (payload) => ({
    type:types.UPDATE_OTHER_PAGE_DETAIL_SUCCESS,
    payload
});

export const updateOtherPageDetailFailure = (error) => ({
    type:types.UPDATE_OTHER_PAGE_DETAIL_FAILURE,
    error
});