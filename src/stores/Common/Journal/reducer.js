import * as types from "./constant";

export const initialState = {
    isJournalListFetching: false,
    isJournalListFetchingError: null,
    journals: [],

    isJournalFeaturedListFetching: false,
    isJournalFeaturedListFetchingError: null,
    journalFeaturedList: [],

    isJournalDetailFetching: false,
    isJournalDetailFetchingError: null,
    journalDetail: {},

    isJournalPageDetailFetching: false,
    isJournalPageDetailFetchingError: null,
    journalPageDetail: {},

    isJournalEditorialBoardFetching: false,
    isJournalEditorialBoardFetchingError: null,
    journalEditorialBoards: [],

    isJournalReviewerBoardFetching: false,
    isJournalReviewerBoardFetchingError: null,
    journalReviewerBoards: [],

}

const CommonJournalReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.JOURNAL_LIST:
            return {
                ...state,
                isJournalListFetching: true,
                isJournalListFetchingError: null,
                journalDetail: {}
            }
        case types.JOURNAL_LIST_SUCCESS:
            return {
                ...state,
                isJournalListFetching: false,
                journals: action.payload
            }
        case types.JOURNAL_LIST_FAILURE:
            return {
                ...state,
                isJournalListFetching: false,
                isJournalListFetchingError: action.error,
            }
        //get detail
        case types.JOURNAL_BY_SLUG:
            return {
                ...state,
                isJournalDetailFetching: true,
                isJournalDetailFetchingError: null,
                journalDetail: {}
            }
        case types.JOURNAL_BY_SLUG_SUCCESS:
            return {
                ...state,
                isJournalDetailFetching: false,
                journalDetail: action.payload

            }
        case types.JOURNAL_BY_SLUG_FAILURE:
            return {
                ...state,
                isJournalDetailFetching: false,
                isJournalDetailFetchingError: action.error,
            }

        //get featured list
        case types.JOURNAL_FEATURED_LIST:
            return {
                ...state,
                isJournalFeaturedListFetching: true,
                isJournalFeaturedListFetchingError: null,
            }
        case types.JOURNAL_FEATURED_LIST_SUCCESS:
            return {
                ...state,
                isJournalFeaturedListFetching: false,
                journalFeaturedList: action.payload
            }
        case types.JOURNAL_FEATURED_LIST_FAILURE:
            return {
                ...state,
                isJournalFeaturedListFetching: false,
                isJournalFeaturedListFetchingError: action.error,
            }

        //journal page detail
        case types.JOURNAL_PAGE_DETAIL:
            return {
                ...state,
                isJournalPageDetailFetching: true,
                isJournalPageDetailFetchingError: null,
                journalPageDetail: {}
            }
        case types.JOURNAL_PAGE_DETAIL_SUCCESS:
            return {
                ...state,
                isJournalPageDetailFetching: false,
                journalPageDetail: action.payload

            }
        case types.JOURNAL_PAGE_DETAIL_FAILURE:
            return {
                ...state,
                isJournalPageDetailFetching: false,
                isJournalPageDetailFetchingError: action.error,
            }

        //journal editorial board list
        case types.JOURNAL_EDITORIAL_BOARD:
            return {
                ...state,
                isJournalEditorialBoardFetching: true,
                isJournalEditorialBoardFetchingError: null,
                journalEditorialBoards: []
            }
        case types.JOURNAL_EDITORIAL_BOARD_SUCCESS:
            return {
                ...state,
                isJournalEditorialBoardFetching: false,
                journalEditorialBoards: action.payload

            }
        case types.JOURNAL_EDITORIAL_BOARD_FAILURE:
            return {
                ...state,
                isJournalEditorialBoardFetching: false,
                isJournalEditorialBoardFetchingError: action.error,
            }

        //journal reviewer board list
        case types.JOURNAL_REVIEWER_BOARD:
            return {
                ...state,
                isJournalReviewerBoardFetching: true,
                isJournalReviewerBoardFetchingError: null,
                journalReviewerBoards: []
            }
        case types.JOURNAL_REVIEWER_BOARD_SUCCESS:
            return {
                ...state,
                isJournalReviewerBoardFetching: false,
                journalReviewerBoards: action.payload

            }
        case types.JOURNAL_REVIEWER_BOARD_FAILURE:
            return {
                ...state,
                isJournalReviewerBoardFetching: false,
                isJournalReviewerBoardFetchingError: action.error,
            }
        default:
            return state;
    }
};
export default CommonJournalReducer;