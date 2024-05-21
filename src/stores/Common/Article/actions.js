import * as types from './constant'
import {WEB_ARTICLE_FILE_DETAIL, WEB_ARTICLE_FILE_DETAIL_FAILURE, WEB_ARTICLE_FILE_DETAIL_SUCCESS} from "./constant";

//GET LIST
export const webJournalArticleList = (payload) => ({
    type: types.WEB_JOURNAL_ARTICLE_LIST,
    payload
});

export const webJournalArticleListSuccess = (payload) => ({
    type: types.WEB_JOURNAL_ARTICLE_LIST_SUCCESS,
    payload
});


export const webJournalArticleListFailure = (error) => ({
    type: types.WEB_JOURNAL_ARTICLE_LIST_FAILURE,
    error
});

//GET BY ID
export const webJournalArticleDetail = (payload) => ({
    type: types.WEB_JOURNAL_ARTICLE_DETAIL,
    payload
});

export const webJournalArticleDetailSuccess = (payload) => ({
    type: types.WEB_JOURNAL_ARTICLE_DETAIL_SUCCESS,
    payload
});


export const webJournalArticleDetailFailure = (error) => ({
    type: types.WEB_JOURNAL_ARTICLE_DETAIL_FAILURE,
    error
});



//GET DETAIL Upload File
export const webArticleFileDetail = (payload) => ({
    type:types.WEB_ARTICLE_FILE_DETAIL,
    payload
});

export const webArticleFileDetailSuccess = (payload) => ({
    type:types.WEB_ARTICLE_FILE_DETAIL_SUCCESS,
    payload
});

export const webArticleFileDetailFailure = (error) => ({
    type:types.WEB_ARTICLE_FILE_DETAIL_FAILURE,
    error
});