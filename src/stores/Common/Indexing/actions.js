import * as types from './constant'

//GET LIST
export const getIndexingList = (payload) => ({
    type:types.GET_INDEXING_LIST,
    payload
});

export const getIndexingListSuccess = (payload) => ({
    type:types.GET_INDEXING_LIST_SUCCESS,
    payload
});


export const getIndexingListFailure = (error) => ({
    type:types.GET_INDEXING_LIST_FAILURE,
    error
});
