import * as types from "./constant";

export const initialState = {
    isJournalListFetching: false,
    isJournalListFetchingError: null,
    journals: [],

}

const CommonJournalReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.JOURNAL_LIST:
            return {
                ...state,
                isJournalListFetching: true,
                isJournalListFetchingError: null,
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

        default:
            return state;
    }
};
export default CommonJournalReducer;