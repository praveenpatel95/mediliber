import * as types from './constant'

//GET LIST
export const webJournalCategoryList = (payload) => ({
    type:types.WEB_JOURNAL_CATEGORY_LIST,
    payload
});

export const webJournalCategoryListSuccess = (payload) => ({
    type:types.WEB_JOURNAL_CATEGORY_LIST_SUCCESS,
    payload
});


export const webJournalCategoryListFailure = (error) => ({
    type:types.WEB_JOURNAL_CATEGORY_LIST_FAILURE,
    error
});
