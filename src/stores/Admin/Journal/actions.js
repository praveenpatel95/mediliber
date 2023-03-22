import * as types from "./constant";

//GET journal profile
export const getJournalProfile = (payload) => ({
    type:types.GET_JOURNAL_PROFILE,
    payload
});

export const getJournalProfileSuccess = (payload) => ({
    type:types.GET_JOURNAL_PROFILE_SUCCESS,
    payload
});

export const getJournalProfileFailure = (error) => ({
    type:types.GET_JOURNAL_PROFILE_FAILURE,
    error
});


//UPDATE journal profile
export const updateJournalProfile = (payload) => ({
    type:types.UPDATE_JOURNAL_PROFILE,
    payload
});

export const updateJournalProfileSuccess = (payload) => ({
    type:types.UPDATE_JOURNAL_PROFILE_SUCCESS,
    payload
});

export const updateJournalProfileFailure = (error) => ({
    type:types.UPDATE_JOURNAL_PROFILE_FAILURE,
    error
});


//ttes
export const getPages = (payload) => ({
    type:types.GET_PAGES,
    payload
});

export const getPagesSuccess = (payload) => ({
    type:types.GET_PAGES_SUCCESS,
    payload
});

export const getPagesFailure = (error) => ({
    type:types.GET_PAGES_FAILURE,
    error
});
