import * as types from './constant'

//GET LIST
export const journalList = (payload) => ({
    type: types.JOURNAL_LIST,
    payload
});

export const journalListSuccess = (payload) => ({
    type: types.JOURNAL_LIST_SUCCESS,
    payload
});


export const journalListFailure = (error) => ({
    type: types.JOURNAL_LIST_FAILURE,
    error
});

//GET DETAIL BY SLUG
export const getJournalDetailBySlug = (payload) => ({
    type: types.JOURNAL_BY_SLUG,
    payload
});

export const getJournalDetailBySlugSuccess = (payload) => ({
    type: types.JOURNAL_BY_SLUG_SUCCESS,
    payload
});


export const getJournalDetailBySlugFailure = (error) => ({
    type: types.JOURNAL_BY_SLUG_FAILURE,
    error
});

//FEATURES JOURNALS
export const journalFeaturedList = (payload) => ({
    type: types.JOURNAL_FEATURED_LIST,
    payload
});

export const journalFeaturedListSuccess = (payload) => ({
    type: types.JOURNAL_FEATURED_LIST_SUCCESS,
    payload
});


export const journalFeaturedListFailure = (error) => ({
    type: types.JOURNAL_FEATURED_LIST_FAILURE,
    error
});

//GET JOURNAL PAGE DETAIL BY SLUG
export const getJournalPageDetail = (payload) => ({
    type: types.JOURNAL_PAGE_DETAIL,
    payload
});

export const getJournalPageDetailSuccess = (payload) => ({
    type: types.JOURNAL_PAGE_DETAIL_SUCCESS,
    payload
});


export const getJournalPageDetailFailure = (error) => ({
    type: types.JOURNAL_PAGE_DETAIL_FAILURE,
    error
});

//GET JOURNAL EDITORIAL BOARD
export const getJournalEditorialBoard = (payload) => ({
    type: types.JOURNAL_EDITORIAL_BOARD,
    payload
});

export const getJournalEditorialBoardSuccess = (payload) => ({
    type: types.JOURNAL_EDITORIAL_BOARD_SUCCESS,
    payload
});

export const getJournalEditorialBoardFailure = (error) => ({
    type: types.JOURNAL_EDITORIAL_BOARD_FAILURE,
    error
});

//GET JOURNAL REVIEWER BOARD
export const getJournalReviewerBoard = (payload) => ({
    type: types.JOURNAL_REVIEWER_BOARD,
    payload
});

export const getJournalReviewerBoardSuccess = (payload) => ({
    type: types.JOURNAL_REVIEWER_BOARD_SUCCESS,
    payload
});

export const getJournalReviewerBoardFailure = (error) => ({
    type: types.JOURNAL_REVIEWER_BOARD_FAILURE,
    error
});

//GET RECENT EDITORIAL BOARD
export const getRecentEditorialBoard = (payload) => ({
    type: types.RECENT_EDITORIAL_BOARD,
    payload
});

export const getRecentEditorialBoardSuccess = (payload) => ({
    type: types.RECENT_EDITORIAL_BOARD_SUCCESS,
    payload
});

export const getRecentEditorialBoardFailure = (error) => ({
    type: types.RECENT_EDITORIAL_BOARD_FAILURE,
    error
});