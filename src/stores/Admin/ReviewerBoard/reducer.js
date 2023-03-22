import * as types from "./constant";

export const initialState = {
    isReviewerBoardListFetching: false,
    isReviewerBoardListFetchingError: null,
    reviewerBoards: [],

    isReviewerBoardCreating: false,
    isReviewerBoardCreatingError: null,

    isReviewerBoardGetFetching: false,
    isReviewerBoardGetFetchingError: false,
    reviewerBoard: {},

    isReviewerBoardDeleting: false,
    isReviewerBoardDeletingError: null,

    isReviewerBoardCreated: false,
    isReviewerBoardDeleted: false
}

const AdminReviewerBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.REVIEWER_BOARD_LIST:
            return {
                ...state,
                isReviewerBoardListFetching: true,
                isReviewerBoardListFetchingError: null,
                isReviewerBoardCreated: false,
                isReviewerBoardDeleted: false,
                reviewerBoard:{}
            }
        case types.REVIEWER_BOARD_LIST_SUCCESS:
            return {
                ...state,
                isReviewerBoardListFetching: false,
                isReviewerBoardListFetchingError: null,
                reviewerBoards: action.payload
            }
        case types.REVIEWER_BOARD_LIST_FAILURE:
            return {
                ...state,
                isReviewerBoardListFetching: false,
                isReviewerBoardListFetchingError: action.error,
            }

        //create
        case types.REVIEWER_BOARD_CREATE:
            return {
                ...state,
                isReviewerBoardCreating: true,
                isReviewerBoardCreatingError: null,
                isReviewerBoardCreated: false,
            }
        case types.REVIEWER_BOARD_CREATE_SUCCESS:
            return {
                ...state,
                isReviewerBoardCreating: false,
                isReviewerBoardCreatingError: null,
                isReviewerBoardCreated: true
            }
        case types.REVIEWER_BOARD_CREATE_FAILURE:
            return {
                ...state,
                isReviewerBoardCreating: false,
                isReviewerBoardCreatingError: action.error,
            }

        //GET BY UD
        case types.REVIEWER_BOARD_GET:
            return {
                ...state,
                isReviewerBoardGetFetching: true,
                isReviewerBoardGetFetchingError: null,
                reviewerBoard: {}
            }
        case types.REVIEWER_BOARD_GET_SUCCESS:
            return {
                ...state,
                isReviewerBoardGetFetching: false,
                isReviewerBoardGetFetchingError: null,
                reviewerBoard: action.payload
            }
        case types.REVIEWER_BOARD_GET_FAILURE:
            return {
                ...state,
                isReviewerBoardGetFetching: false,
                isReviewerBoardGetFetchingError: action.error,
            }

        //update
        case types.REVIEWER_BOARD_UPDATE:
            return {
                ...state,
                isReviewerBoardCreating: true,
                isReviewerBoardCreatingError: null,
                isReviewerBoardCreated: false,
            }
        case types.REVIEWER_BOARD_UPDATE_SUCCESS:
            return {
                ...state,
                isReviewerBoardCreating: false,
                isReviewerBoardCreatingError: null,
                isReviewerBoardCreated: true
            }
        case types.REVIEWER_BOARD_UPDATE_FAILURE:
            return {
                ...state,
                isReviewerBoardCreating: false,
                isReviewerBoardCreatingError: action.error,
            }

        //DELETE
        case types.REVIEWER_BOARD_DELETE:
            return {
                ...state,
                isReviewerBoardDeleting: true,
                isReviewerBoardDeletingError: null,
                isReviewerBoardDeleted: false,
            }
        case types.REVIEWER_BOARD_DELETE_SUCCESS:
            return {
                ...state,
                isReviewerBoardDeleting: false,
                isReviewerBoardDeletingError: null,
                isReviewerBoardDeleted: true
            }
        case types.REVIEWER_BOARD_DELETE_FAILURE:
            return {
                ...state,
                isReviewerBoardDeleting: false,
                isReviewerBoardDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default AdminReviewerBoardReducer;