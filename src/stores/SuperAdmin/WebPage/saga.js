import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    webpageGetFailure,
    webpageGetSuccess,
    webpageListFailure,
    webpageListSuccess, webpageUpdateFailure, webpageUpdateSuccess

} from "./actions";
import {WEBPAGE_GET, WEBPAGE_LIST, WEBPAGE_UPDATE} from "./constant";

export function* getList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/webpage`,
            payload
        );
        yield put(webpageListSuccess(response?.data));

    } catch (e) {
        yield put(webpageListFailure(e.response?.data?.message));
    }
}


//gte by id
export function* getById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/webpage/${payload.id}`,
            payload
        );
        yield put(webpageGetSuccess(response?.data));

    } catch (e) {
        yield put(webpageGetFailure(e.response?.data?.message));
    }
}

//update
export function* updateWebpage({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/webpage/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(webpageUpdateSuccess(response?.data));

    } catch (e) {
        yield put(webpageUpdateFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(WEBPAGE_LIST, getList);
}

export function* getFlow() {
    yield takeLatest(WEBPAGE_GET, getById);
}

export function* updateFlow() {
    yield takeLatest(WEBPAGE_UPDATE, updateWebpage);
}

export default function* WebpageSaga() {
    yield all([
        listFlow(),
        getFlow(),
        updateFlow(),
    ]);
}
