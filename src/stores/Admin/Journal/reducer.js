import * as types from "./constant";

export const initialState = {
    isJournalFetching: false,
    isJournalFetchingError: null,
    journalData: {},

    isJournalUpdating: false,
    isJournalUpdatingError: null,

    isPageFetching: false,
    isPageFetchingError: null,
    pagesData: [],

}

const AdminJournalReducer = (state = initialState, action) => {
    switch (action.type) {
        //GET BY UD
        case types.GET_JOURNAL_PROFILE:
            return {
                ...state,
                isJournalFetching: true,
                isJournalFetchingError: null,
                journalData: {}
            }
        case types.GET_JOURNAL_PROFILE_SUCCESS:
            return {
                ...state,
                isJournalFetching: false,
                journalData: action.payload
            }
        case types.GET_JOURNAL_PROFILE_FAILURE:
            return {
                ...state,
                isJournalFetching: false,
                isJournalFetchingError: action.error,
            }

        //update
        case types.UPDATE_JOURNAL_PROFILE:
            return {
                ...state,
                isJournalUpdating: true,
                isJournalUpdatingError: null,
            }
        case types.UPDATE_JOURNAL_PROFILE_SUCCESS:
            return {
                ...state,
                isJournalUpdating: false,
                journalData: action.payload
            }
        case types.UPDATE_JOURNAL_PROFILE_FAILURE:
            return {
                ...state,
                isJournalUpdating: false,
                isJournalUpdatingError: action.error,
            }
//test
        case types.GET_PAGES:
            return {
                ...state,
                isPageFetching: true,
                isPageFetchingError: null,
                pagesData: []
            }

        case types.GET_PAGES_SUCCESS:
            return {
                ...state,
                isPageFetching: false,
                pagesData: action.payload
            }
        case types.GET_PAGES_FAILURE:
            return {
                ...state,
                isPageFetching: false,
                isPageFetchingError: action.error,
            }

        default:
            return state;
    }
};
export default AdminJournalReducer;