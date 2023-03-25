import * as types from "./constant";

export const initialState = {
    isIndexingListFetching: false,
    isIndexingListFetchingError: null,
    indexingList: [],

}

const WebIndexingReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.GET_INDEXING_LIST:
            return {
                ...state,
                isIndexingListFetching: true,
                isIndexingListFetchingError: null,
            }
        case types.GET_INDEXING_LIST_SUCCESS:
            return {
                ...state,
                isIndexingListFetching: false,
                indexingList: action.payload
            }
        case types.GET_INDEXING_LIST_FAILURE:
            return {
                ...state,
                isIndexingListFetching: false,
                isIndexingListFetchingError: action.error,
            }

        default:
            return state;
    }
};
export default WebIndexingReducer;