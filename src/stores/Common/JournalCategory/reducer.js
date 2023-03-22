import * as types from "./constant";

export const initialState = {
    isJournalCategoryListFetching: false,
    isJournalCategoryListFetchingError: null,
    journalCategories: [],

}

const WebJournalCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.WEB_JOURNAL_CATEGORY_LIST:
            return {
                ...state,
                isJournalCategoryListFetching: true,
                isJournalCategoryListFetchingError: null,
            }
        case types.WEB_JOURNAL_CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                isJournalCategoryListFetching: false,
                isJournalListFetchingError: null,
                journalCategories: action.payload
            }
        case types.WEB_JOURNAL_CATEGORY_LIST_FAILURE:
            return {
                ...state,
                isJournalCategoryListFetching: false,
                isJournalCategoryListFetchingError: action.error,
            }

        default:
            return state;
    }
};
export default WebJournalCategoryReducer;