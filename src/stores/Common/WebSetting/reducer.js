import * as types from "./constant";

export const initialState = {
    isWebSettingDetailFetching: false,
    isWebSettingDetailFetchingError: null,
    webSettingDetail: {},

    isWebSettingUpdating: false,
    isWebSettingUpdatingError: null,
}

const WebSettingReducer = (state = initialState, action) => {
    switch (action.type) {

        //get detail
        case types.WEB_SETTING_DETAIL:
            return {
                ...state,
                isWebSettingDetailFetching: true,
                isWebSettingDetailFetchingError: null,
                webSettingDetail: {}
            }
        case types.WEB_SETTING_DETAIL_SUCCESS:
            return {
                ...state,
                isWebSettingDetailFetching: false,
                webSettingDetail: action.payload

            }
        case types.WEB_SETTING_DETAIL_FAILURE:
            return {
                ...state,
                isWebSettingDetailFetching: false,
                isWebSettingDetailFetchingError: action.error,
            }

        //Update detail
        case types.WEB_SETTING_UPDATE:
            return {
                ...state,
                isWebSettingUpdating: true,
                isWebSettingUpdatingError: null,
            }
        case types.WEB_SETTING_UPDATE_SUCCESS:
            return {
                ...state,
                isWebSettingUpdating: false,
            }
        case types.WEB_SETTING_UPDATE_FAILURE:
            return {
                ...state,
                isWebSettingUpdating: false,
                isWebSettingUpdatingError: action.error,
            }

        default:
            return state;
    }
};
export default WebSettingReducer;