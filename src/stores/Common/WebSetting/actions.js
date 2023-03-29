import * as types from './constant'

//GET LIST
export const getWebSetting = (payload) => ({
    type: types.WEB_SETTING_DETAIL,
    payload
});

export const getWebSettingSuccess = (payload) => ({
    type: types.WEB_SETTING_DETAIL_SUCCESS,
    payload
});


export const getWebSettingFailure = (error) => ({
    type: types.WEB_SETTING_DETAIL_FAILURE,
    error
});

//update
export const updateWebSetting = (payload) => ({
    type: types.WEB_SETTING_UPDATE,
    payload
});

export const updateWebSettingSuccess = (payload) => ({
    type: types.WEB_SETTING_UPDATE_SUCCESS,
    payload
});


export const updateWebSettingFailure = (error) => ({
    type: types.WEB_SETTING_UPDATE_FAILURE,
    error
});
