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
