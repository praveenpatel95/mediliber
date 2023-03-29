import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getOtherPageDetailFailure,
    getOtherPageDetailSuccess,
    getOtherPagesFailure,
    getOtherPagesSuccess, updateOtherPageDetailFailure, updateOtherPageDetailSuccess
} from "./actions";
import {
    GET_OTHER_PAGE_DETAIL,
    GET_OTHER_PAGES, UPDATE_OTHER_PAGE_DETAIL

} from "./constant";
import api from "../../../utils/api";

export function* getAll({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/otherpage`,
            payload
        );
        yield put(getOtherPagesSuccess(response?.data));

    } catch (e) {
        yield put(getOtherPagesFailure(e.response?.data?.message));
    }
}

export function* getPageDetailId({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/otherpage/${payload.id}`,
            payload
        );
        yield put(getOtherPageDetailSuccess(response?.data));

    } catch (e) {
        yield put(getOtherPageDetailFailure(e.response?.data?.message));
    }
}

export function* updatePageDetail({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/otherpage/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(updateOtherPageDetailSuccess(response?.data));

    } catch (e) {
        yield put(updateOtherPageDetailFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */



export function* getFlow() {
    yield takeLatest(GET_OTHER_PAGES, getAll);
}
export function* getByIdFlow() {
    yield takeLatest(GET_OTHER_PAGE_DETAIL, getPageDetailId);
}

export function* updateByIdFlow() {
    yield takeLatest(UPDATE_OTHER_PAGE_DETAIL, updatePageDetail);
}

export default function* OtherPageSaga() {
    yield all([
        getFlow(),
        getByIdFlow(),
        updateByIdFlow(),
    ]);
}
