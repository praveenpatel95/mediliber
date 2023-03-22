import * as types from "./constant";

export const getAdminJournalPages = (payload) => ({
    type:types.GET_ADMIN_JOURNAL_PAGES,
    payload
});

export const getAdminJournalPagesSuccess = (payload) => ({
    type:types.GET_ADMIN_JOURNAL_PAGES_SUCCESS,
    payload
});

export const getAdminJournalPagesFailure = (error) => ({
    type:types.GET_ADMIN_JOURNAL_PAGES_FAILURE,
    error
});

export const getAdminJournalPageDetail = (payload) => ({
    type:types.GET_ADMIN_JOURNAL_PAGE_DETAIL,
    payload
});

export const getAdminJournalPageDetailSuccess = (payload) => ({
    type:types.GET_ADMIN_JOURNAL_PAGE_DETAIL_SUCCESS,
    payload
});

export const getAdminJournalPageDetailFailure = (error) => ({
    type:types.GET_ADMIN_JOURNAL_PAGE_DETAIL_FAILURE,
    error
});

//UPDATE
export const updateAdminJournalPageDetail = (payload) => ({
    type:types.UPDATE_ADMIN_JOURNAL_PAGE_DETAIL,
    payload
});

export const updateAdminJournalPageDetailSuccess = (payload) => ({
    type:types.UPDATE_ADMIN_JOURNAL_PAGE_DETAIL_SUCCESS,
    payload
});

export const updateAdminJournalPageDetailFailure = (error) => ({
    type:types.UPDATE_ADMIN_JOURNAL_PAGE_DETAIL_FAILURE,
    error
});