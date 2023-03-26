import * as types from "./constant";

export const initialState = {

    isOtherPageFetching: false,
    isOtherPageFetchingError: null,
    otherPages: [],

    isOtherPageDetailFetching: false,
    isOtherPageDetailFetchingError: null,
    otherPageData: {},
    isUpdated: false,

    isOtherPageUpdating: false,
    isOtherPageUpdatingError: null,

}

const OtherPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_OTHER_PAGES:
            return {
                ...state,
                isOtherPageFetching: true,
                isOtherPageFetchingError: null,
                otherPages: [],
                isUpdated: false,
                otherPageData:{}
            }

        case types.GET_OTHER_PAGES_SUCCESS:
            return {
                ...state,
                isOtherPageFetching: false,
                otherPages: action.payload
            }
        case types.GET_OTHER_PAGES_FAILURE:
            return {
                ...state,
                isOtherPageFetching: false,
                isOtherPageFetchingError: action.error,
            }

        //get by id
        case types.GET_OTHER_PAGE_DETAIL:
            return {
                ...state,
                isOtherPageDetailFetching: true,
                isOtherPageDetailFetchingError: null,
                otherPageData: {}
            }

        case types.GET_OTHER_PAGE_DETAIL_SUCCESS:
            return {
                ...state,
                isOtherPageDetailFetching: false,
                otherPageData: action.payload,
            }
        case types.GET_OTHER_PAGE_DETAIL_FAILURE:
            return {
                ...state,
                isOtherPageDetailFetching: false,
                isOtherPageDetailFetchingError: action.error,
            }

        //update page data
        case types.UPDATE_OTHER_PAGE_DETAIL:
            return {
                ...state,
                isOtherPageUpdating: true,
                isOtherPageUpdatingError: null,
            }

        case types.UPDATE_OTHER_PAGE_DETAIL_SUCCESS:
            return {
                ...state,
                isOtherPageUpdating: false,
                isUpdated:true,
            }
        case types.UPDATE_OTHER_PAGE_DETAIL_FAILURE:
            return {
                ...state,
                isOtherPageUpdating: false,
                isOtherPageUpdatingError: action.error,
            }

        default:
            return state;
    }
};
export default OtherPageReducer;