import * as types from "./constant";

export const initialState = {
    isIndexingListFetching: false,
    isIndexingListFetchingError: null,
    indexingList: [],

    isIndexingCreating: false,
    isIndexingCreatingError: null,

    isIndexingGetFetching: false,
    isIndexingGetFetchingError: false,
    indexing: {},

    isIndexingDeleting: false,
    isIndexingDeletingError: null,

    isIndexingCreated: false,
    isIndexingDeleted: false
}

const IndexingReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.INDEXING_LIST:
            return {
                ...state,
                isIndexingListFetching: true,
                isIndexingListFetchingError: null,
                isIndexingCreated: false,
                isIndexingDeleted: false,
                indexing:{}
            }
        case types.INDEXING_LIST_SUCCESS:
            return {
                ...state,
                isIndexingListFetching: false,
                isIndexingListFetchingError: null,
                indexingList: action.payload
            }
        case types.INDEXING_LIST_FAILURE:
            return {
                ...state,
                isIndexingListFetching: false,
                isIndexingListFetchingError: action.error,
            }

        //create
        case types.INDEXING_CREATE:
            return {
                ...state,
                isIndexingCreating: true,
                isIndexingCreatingError: null,
                isIndexingCreated: false,
            }
        case types.INDEXING_CREATE_SUCCESS:
            return {
                ...state,
                isIndexingCreating: false,
                isIndexingCreatingError: null,
                isIndexingCreated: true
            }
        case types.INDEXING_CREATE_FAILURE:
            return {
                ...state,
                isIndexingCreating: false,
                isIndexingCreatingError: action.error,
            }

        //GET BY UD
        case types.INDEXING_GET:
            return {
                ...state,
                isIndexingGetFetching: true,
                isIndexingGetFetchingError: null,
                indexing: {}
            }
        case types.INDEXING_GET_SUCCESS:
            return {
                ...state,
                isIndexingGetFetching: false,
                isIndexingGetFetchingError: null,
                indexing: action.payload
            }
        case types.INDEXING_GET_FAILURE:
            return {
                ...state,
                isIndexingGetFetching: false,
                isIndexingGetFetchingError: action.error,
            }

        //update
        case types.INDEXING_UPDATE:
            return {
                ...state,
                isIndexingCreating: true,
                isIndexingCreatingError: null,
                isIndexingCreated: false,
            }
        case types.INDEXING_UPDATE_SUCCESS:
            return {
                ...state,
                isIndexingCreating: false,
                isIndexingCreatingError: null,
                isIndexingCreated: true
            }
        case types.INDEXING_UPDATE_FAILURE:
            return {
                ...state,
                isIndexingCreating: false,
                isIndexingCreatingError: action.error,
            }

        //DELETE
        case types.INDEXING_DELETE:
            return {
                ...state,
                isIndexingDeleting: true,
                isIndexingDeletingError: null,
                isIndexingDeleted: false,
            }
        case types.INDEXING_DELETE_SUCCESS:
            return {
                ...state,
                isIndexingDeleting: false,
                isIndexingDeletingError: null,
                isIndexingDeleted: true
            }
        case types.INDEXING_DELETE_FAILURE:
            return {
                ...state,
                isIndexingDeleting: false,
                isIndexingDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default IndexingReducer;