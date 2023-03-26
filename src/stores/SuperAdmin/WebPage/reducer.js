import * as types from "./constant";

export const initialState = {
    isWebpageListFetching: false,
    isWebpageListFetchingError: null,
    webpageList: [],

    isWebpageGetFetching: false,
    isWebpageGetFetchingError: false,
    webpageData: {},

    isWebpageUpdating: false,
    isWebpageUpdatingError: false,

    isWebpageUpdated: false,
    isWebpageDeleted: false
}

const WebpageReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.WEBPAGE_LIST:
            return {
                ...state,
                isWebpageListFetching: true,
                isWebpageListFetchingError: null,
                isWebpageUpdated: false,
               // webpageData:{}
            }
        case types.WEBPAGE_LIST_SUCCESS:
            return {
                ...state,
                isWebpageListFetching: false,
                isWebpageListFetchingError: null,
                webpageList: action.payload
            }
        case types.WEBPAGE_LIST_FAILURE:
            return {
                ...state,
                isWebpageListFetching: false,
                isWebpageListFetchingError: action.error,
            }


        //GET BY UD
        case types.WEBPAGE_GET:
            return {
                ...state,
                isWebpageGetFetching: true,
                isWebpageGetFetchingError: null,
                webpageData: {}
            }
        case types.WEBPAGE_GET_SUCCESS:
            return {
                ...state,
                isWebpageGetFetching: false,
                webpageData: action.payload
            }
        case types.WEBPAGE_GET_FAILURE:
            return {
                ...state,
                isWebpageGetFetching: false,
                isWebpageGetFetchingError: action.error,
            }

        //update
        case types.WEBPAGE_UPDATE:
            return {
                ...state,
                isWebpageUpdating: true,
                isWebpageUpdatingError: null,
                isWebpageUpdated: false,
            }
        case types.WEBPAGE_UPDATE_SUCCESS:
            return {
                ...state,
                isWebpageUpdating: false,
                isWebpageUpdated: true
            }
        case types.WEBPAGE_UPDATE_FAILURE:
            return {
                ...state,
                isWebpageUpdating: false,
                isWebpageUpdatingError: action.error,
            }

        default:
            return state;
    }
};
export default WebpageReducer;