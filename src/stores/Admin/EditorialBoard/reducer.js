import * as types from "./constant";

export const initialState = {
    isEditorialBoardListFetching: false,
    isEditorialBoardListFetchingError: null,
    editorialBoards: [],

    isEditorialBoardCreating: false,
    isEditorialBoardCreatingError: null,

    isEditorialBoardGetFetching: false,
    isEditorialBoardGetFetchingError: false,
    editorialBoard: {},

    isEditorialBoardDeleting: false,
    isEditorialBoardDeletingError: null,

    isEditorialBoardCreated: false,
    isEditorialBoardDeleted: false
}

const AdminEditorialBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.EDITORIAL_BOARD_LIST:
            return {
                ...state,
                isEditorialBoardListFetching: true,
                isEditorialBoardListFetchingError: null,
                isEditorialBoardCreated: false,
                isEditorialBoardDeleted: false,
                editorialBoard:{}
            }
        case types.EDITORIAL_BOARD_LIST_SUCCESS:
            return {
                ...state,
                isEditorialBoardListFetching: false,
                isEditorialBoardListFetchingError: null,
                editorialBoards: action.payload
            }
        case types.EDITORIAL_BOARD_LIST_FAILURE:
            return {
                ...state,
                isEditorialBoardListFetching: false,
                isEditorialBoardListFetchingError: action.error,
            }

        //create
        case types.EDITORIAL_BOARD_CREATE:
            return {
                ...state,
                isEditorialBoardCreating: true,
                isEditorialBoardCreatingError: null,
                isEditorialBoardCreated: false,
            }
        case types.EDITORIAL_BOARD_CREATE_SUCCESS:
            return {
                ...state,
                isEditorialBoardCreating: false,
                isEditorialBoardCreatingError: null,
                isEditorialBoardCreated: true
            }
        case types.EDITORIAL_BOARD_CREATE_FAILURE:
            return {
                ...state,
                isEditorialBoardCreating: false,
                isEditorialBoardCreatingError: action.error,
            }

        //GET BY UD
        case types.EDITORIAL_BOARD_GET:
            return {
                ...state,
                isEditorialBoardGetFetching: true,
                isEditorialBoardGetFetchingError: null,
                editorialBoard: {}
            }
        case types.EDITORIAL_BOARD_GET_SUCCESS:
            return {
                ...state,
                isEditorialBoardGetFetching: false,
                isEditorialBoardGetFetchingError: null,
                editorialBoard: action.payload
            }
        case types.EDITORIAL_BOARD_GET_FAILURE:
            return {
                ...state,
                isEditorialBoardGetFetching: false,
                isEditorialBoardGetFetchingError: action.error,
            }

        //update
        case types.EDITORIAL_BOARD_UPDATE:
            return {
                ...state,
                isEditorialBoardCreating: true,
                isEditorialBoardCreatingError: null,
                isEditorialBoardCreated: false,
            }
        case types.EDITORIAL_BOARD_UPDATE_SUCCESS:
            return {
                ...state,
                isEditorialBoardCreating: false,
                isEditorialBoardCreatingError: null,
                isEditorialBoardCreated: true
            }
        case types.EDITORIAL_BOARD_UPDATE_FAILURE:
            return {
                ...state,
                isEditorialBoardCreating: false,
                isEditorialBoardCreatingError: action.error,
            }

        //DELETE
        case types.EDITORIAL_BOARD_DELETE:
            return {
                ...state,
                isEditorialBoardDeleting: true,
                isEditorialBoardDeletingError: null,
                isEditorialBoardDeleted: false,
            }
        case types.EDITORIAL_BOARD_DELETE_SUCCESS:
            return {
                ...state,
                isEditorialBoardDeleting: false,
                isEditorialBoardDeletingError: null,
                isEditorialBoardDeleted: true
            }
        case types.EDITORIAL_BOARD_DELETE_FAILURE:
            return {
                ...state,
                isEditorialBoardDeleting: false,
                isEditorialBoardDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default AdminEditorialBoardReducer;