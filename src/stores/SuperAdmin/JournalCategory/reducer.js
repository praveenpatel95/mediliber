import * as types from "./constant";

export const initialState = {
    isJournalCategoryCreating: false,
    isJournalCategoryCreated: false,
    errorJournalCategoryCreate: null,

    isJournalCategoryListFetching: false,
    isJournalCategoryListFetchingError: null,
    journalCategories: [],

    isJournalCategoryGetFetching: false,
    isJournalCategoryGetFetchingError: false,
    journalCategory: {},

    isJournalCategoryDeleting: false,
    isJournalCategoryDeletingError: false,
    isJournalCategoryDeleted: false,

}
const JournalCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.JOURNAL_CATEGORY_LIST:
            return {
                ...state,
                isJournalCategoryListFetching: true,
                isJournalCategoryListFetchingError: null,
                isJournalCategoryCreated: false,
                isJournalCategoryDeleted:false,
                journalCategory: {},
            }
        case types.JOURNAL_CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                isJournalCategoryListFetching: false,
                isJournalCategoryListFetchingError: null,
                journalCategories: action.payload
            }
        case types.JOURNAL_CATEGORY_LIST_FAILURE:
            return {
                ...state,
                isJournalCategoryListFetching: false,
                isJournalCategoryListFetchingError: action.error,
            }

        //CREATE
        case types.JOURNAL_CATEGORY_CREATE:
            return {
                ...state,
                isJournalCategoryCreating: true,
                errorJournalCategoryCreate: null,
                isJournalCategoryCreated: false
            }
        case types.JOURNAL_CATEGORY_CREATE_SUCCESS:
            return {
                ...state,
                isJournalCategoryCreating: false,
                errorJournalCategoryCreate: null,
                isJournalCategoryCreated: true
            }
        case types.JOURNAL_CATEGORY_CREATE_FAILURE:
            return {
                ...state,
                isJournalCategoryCreating: false,
                errorJournalCategoryCreate: action.error,
                isJournalCategoryCreated: false
            }

        //GET BY UD
        case types.JOURNAL_CATEGORY_GET:
            return {
                ...state,
                isJournalCategoryGetFetching: true,
                isJournalCategoryGetFetchingError: null,
                journalCategory: {}
            }
        case types.JOURNAL_CATEGORY_GET_SUCCESS:
            return {
                ...state,
                isJournalCategoryGetFetching: false,
                isJournalCategoryGetFetchingError: null,
                journalCategory: action.payload
            }
        case types.JOURNAL_CATEGORY_GET_FAILURE:
            return {
                ...state,
                isJournalCategoryGetFetching: false,
                isJournalCategoryGetFetchingError: action.error,
            }

        //UPDATE
        case types.JOURNAL_CATEGORY_UPDATE:
            return {
                ...state,
                isJournalCategoryCreating: true,
                errorJournalCategoryCreate: null,
                isJournalCategoryCreated: false
            }
        case types.JOURNAL_CATEGORY_UPDATE_SUCCESS:
            return {
                ...state,
                isJournalCategoryCreating: false,
                errorJournalCategoryCreate: null,
                isJournalCategoryCreated: true
            }
        case types.JOURNAL_CATEGORY_UPDATE_FAILURE:
            return {
                ...state,
                isJournalCategoryCreating: false,
                errorJournalCategoryCreate: action.error,
                isJournalCategoryCreated: false
            }

            //Delete
        case types.JOURNAL_CATEGORY_DELETE:
            return {
                ...state,
                isJournalCategoryDeleting: true,
                isJournalCategoryDeletingError: null,
                isJournalCategoryDeleted: false,
            }
        case types.JOURNAL_CATEGORY_DELETE_SUCCESS:
            return {
                ...state,
                isJournalCategoryDeleting: false,
                isJournalCategoryDeleted: true,
            }
        case types.JOURNAL_CATEGORY_DELETE_FAILURE:
            return {
                ...state,
                isJournalCategoryDeleting: false,
                isJournalCategoryDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default JournalCategoryReducer;