import * as types from './constant'

//GET LIST
export const getMainPageDetail = (payload) => ({
    type:types.GET_MAIN_PAGE_DETAIL,
    payload
});

export const getMainPageDetailSuccess = (payload) => ({
    type:types.GET_MAIN_PAGE_DETAIL_SUCCESS,
    payload
});


export const getMainPageDetailFailure = (error) => ({
    type:types.GET_MAIN_PAGE_DETAIL_FAILURE,
    error
});

//OTHER PAGES
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
