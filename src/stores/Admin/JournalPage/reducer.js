import * as types from "./constant";

export const initialState = {

    isAdminJournalPageFetching: false,
    isAdminJournalPageFetchingError: null,
    journalPages: [],

    isAdminJournalPageDetailFetching: false,
    isAdminJournalPageDetailFetchingError: null,
    journalPageData: {},
    isUpdated: false,

    isAdminJournalPageUpdating: false,
    isAdminJournalPageUpdatingError: null,

}

const AdminJournalPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_ADMIN_JOURNAL_PAGES:
            return {
                ...state,
                isAdminJournalPageFetching: true,
                isAdminJournalPageFetchingError: null,
                journalPages: [],
                isUpdated: false,
                journalPageData:{}
            }

        case types.GET_ADMIN_JOURNAL_PAGES_SUCCESS:
            return {
                ...state,
                isAdminJournalPageFetching: false,
                journalPages: action.payload
            }
        case types.GET_ADMIN_JOURNAL_PAGES_FAILURE:
            return {
                ...state,
                isAdminJournalPageFetching: false,
                isAdminJournalPageFetchingError: action.error,
            }

        //get by id
        case types.GET_ADMIN_JOURNAL_PAGE_DETAIL:
            return {
                ...state,
                isAdminJournalPageDetailFetching: true,
                isAdminJournalPageDetailFetchingError: null,
                journalPageData: {}
            }

        case types.GET_ADMIN_JOURNAL_PAGE_DETAIL_SUCCESS:
            return {
                ...state,
                isAdminJournalPageDetailFetching: false,
                journalPageData: action.payload,
            }
        case types.GET_ADMIN_JOURNAL_PAGE_DETAIL_FAILURE:
            return {
                ...state,
                isAdminJournalPageDetailFetching: false,
                isAdminJournalPageDetailFetchingError: action.error,
            }

        //update page data
        case types.UPDATE_ADMIN_JOURNAL_PAGE_DETAIL:
            return {
                ...state,
                isAdminJournalPageUpdating: true,
                isAdminJournalPageUpdatingError: null,
            }

        case types.UPDATE_ADMIN_JOURNAL_PAGE_DETAIL_SUCCESS:
            return {
                ...state,
                isAdminJournalPageUpdating: false,
                isUpdated:true,
            }
        case types.UPDATE_ADMIN_JOURNAL_PAGE_DETAIL_FAILURE:
            return {
                ...state,
                isAdminJournalPageUpdating: false,
                isAdminJournalPageUpdatingError: action.error,
            }

        default:
            return state;
    }
};
export default AdminJournalPageReducer;