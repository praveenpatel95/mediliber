import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getMainPageDetailFailure, getMainPageDetailSuccess, getOtherPageDetailFailure, getOtherPageDetailSuccess

} from "./actions";
import {
    GET_MAIN_PAGE_DETAIL, GET_OTHER_PAGE_DETAIL

} from "./constant";

//main page data
export function* getMainPageData({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/main-page/${payload}`,
            payload
        );
        yield put(getMainPageDetailSuccess(response?.data));

    } catch (e) {
        yield put(getMainPageDetailFailure(e.response?.data?.message));
    }
}

//othe rpage data api
export function* getOtherPageData({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/other-page/${payload}`,
            payload
        );
        yield put(getOtherPageDetailSuccess(response?.data));

    } catch (e) {
        yield put(getOtherPageDetailFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */

export function* mainPageDataFlow() {
    yield takeLatest(GET_MAIN_PAGE_DETAIL, getMainPageData);
}
export function* otherPageDataFlow() {
    yield takeLatest(GET_OTHER_PAGE_DETAIL, getOtherPageData);
}


export default function* WebPagesSaga() {
    yield all([
        mainPageDataFlow(),
        otherPageDataFlow(),
    ]);
}
