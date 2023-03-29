import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {getWebSettingFailure, getWebSettingSuccess, updateWebSettingFailure, updateWebSettingSuccess} from "./actions";
import {WEB_SETTING_DETAIL, WEB_SETTING_UPDATE} from "./constant";


export function* getWebDetail({payload}) {
    try {
      //  const token = localStorage.getItem("token");
        const response = yield call(api(null, null)
                .get, `/v1/web-setting`,
            payload
        );
        yield put(getWebSettingSuccess(response?.data));

    } catch (e) {
        yield put(getWebSettingFailure(e.response?.data?.message));
    }
}

export function* updateWebDetail({payload}) {
    try {
       const token = localStorage.getItem("token");
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/web-setting?_method=put`,
            payload
        );
        yield put(updateWebSettingSuccess(response?.data));

    } catch (e) {
        yield put(updateWebSettingFailure(e.response?.data?.message));
    }
}

export function* getWebDetailFlow() {
    yield takeLatest(WEB_SETTING_DETAIL, getWebDetail);
}

export function* updateWebDetailFlow() {
    yield takeLatest(WEB_SETTING_UPDATE, updateWebDetail);
}


export default function* WebSettingSaga() {
    yield all([
        getWebDetailFlow(),
        updateWebDetailFlow(),
    ]);
}
