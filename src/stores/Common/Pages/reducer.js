import * as types from "./constant";

export const initialState = {
    isMainPageDetailFetching: false,
    isMainPageDetailFetchingError: null,
    mainPageData: {},

    isOtherPageDetailFetching: false,
    isOtherPageDetailFetchingError: null,
    otherPageData: {},

}

const WebPageReducer = (state = initialState, action) => {
    switch (action.type) {
        //get main page data
        case types.GET_MAIN_PAGE_DETAIL:
            return {
                ...state,
                isMainPageDetailFetching: true,
                isMainPageDetailFetchingError: null,
                mainPageData:{}
            }
        case types.GET_MAIN_PAGE_DETAIL_SUCCESS:
            return {
                ...state,
                isMainPageDetailFetching: false,
                mainPageData: action.payload
            }
        case types.GET_MAIN_PAGE_DETAIL_FAILURE:
            return {
                ...state,
                isMainPageDetailFetching: false,
                isMainPageDetailFetchingError: action.error,
            }

        //get other page data
        case types.GET_OTHER_PAGE_DETAIL:
            return {
                ...state,
                isOtherPageDetailFetching: true,
                isOtherPageDetailFetchingError: null,
                otherPageData:{}
            }
        case types.GET_OTHER_PAGE_DETAIL_SUCCESS:
            return {
                ...state,
                isOtherPageDetailFetching: false,
                otherPageData: action.payload
            }
        case types.GET_OTHER_PAGE_DETAIL_FAILURE:
            return {
                ...state,
                isOtherPageDetailFetching: false,
                isOtherPageDetailFetchingError: action.error,
            }

        default:
            return state;
    }
};
export default WebPageReducer;