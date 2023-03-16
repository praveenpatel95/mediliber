import * as types from "./constant";

export const initialState = {
    isJournalListFetching: false,
    isJournalListFetchingError: null,
    journals: [],

    isJournalCreating: false,
    isJournalCreatingError: null,

    isJournalGetFetching: false,
    isJournalGetFetchingError: false,
    journal: {},

    isJournalDeleting: false,
    isJournalDeletingError: null,

    isJournalCreated: false,
    isJournalDeleted: false
}

const JournalReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.JOURNAL_LIST:
            return {
                ...state,
                isJournalListFetching: true,
                isJournalListFetchingError: null,
                isJournalCreated: false,
                isJournalDeleted: false
            }
        case types.JOURNAL_LIST_SUCCESS:
            return {
                ...state,
                isJournalListFetching: false,
                isJournalListFetchingError: null,
                journals: action.payload
            }
        case types.JOURNAL_LIST_FAILURE:
            return {
                ...state,
                isJournalListFetching: false,
                isJournalListFetchingError: action.error,
            }

        //create
        case types.JOURNAL_CREATE:
            return {
                ...state,
                isJournalCreating: true,
                isJournalCreatingError: null,
                isJournalCreated: false,
            }
        case types.JOURNAL_CREATE_SUCCESS:
            return {
                ...state,
                isJournalCreating: false,
                isJournalCreatingError: null,
                isJournalCreated: true
            }
        case types.JOURNAL_CREATE_FAILURE:
            return {
                ...state,
                isJournalCreating: false,
                isJournalCreatingError: action.error,
            }

        //GET BY UD
        case types.JOURNAL_GET:
            return {
                ...state,
                isJournalGetFetching: true,
                isJournalGetFetchingError: null,
                journal: {}
            }
        case types.JOURNAL_GET_SUCCESS:
            return {
                ...state,
                isJournalGetFetching: false,
                isJournalGetFetchingError: null,
                journal: action.payload
            }
        case types.JOURNAL_GET_FAILURE:
            return {
                ...state,
                isJournalGetFetching: false,
                isJournalGetFetchingError: action.error,
            }

        //update
        case types.JOURNAL_UPDATE:
            return {
                ...state,
                isJournalCreating: true,
                isJournalCreatingError: null,
                isJournalCreated: false,
            }
        case types.JOURNAL_UPDATE_SUCCESS:
            return {
                ...state,
                isJournalCreating: false,
                isJournalCreatingError: null,
                isJournalCreated: true
            }
        case types.JOURNAL_UPDATE_FAILURE:
            return {
                ...state,
                isJournalCreating: false,
                isJournalCreatingError: action.error,
            }

        //DELETE
        case types.JOURNAL_DELETE:
            return {
                ...state,
                isJournalDeleting: true,
                isJournalDeletingError: null,
                isJournalDeleted: false,
            }
        case types.JOURNAL_DELETE_SUCCESS:
            return {
                ...state,
                isJournalDeleting: false,
                isJournalDeletingError: null,
                isJournalDeleted: true
            }
        case types.JOURNAL_DELETE_FAILURE:
            return {
                ...state,
                isJournalDeleting: false,
                isJournalDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default JournalReducer;