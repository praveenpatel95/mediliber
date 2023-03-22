import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    indexingCreateFailure,
    indexingCreateSuccess, indexingDeleteFailure, indexingDeleteSuccess, indexingGetFailure,
    indexingGetSuccess,
    indexingListFailure,
    indexingListSuccess, indexingUpdateFailure, indexingUpdateSuccess
} from "./actions";
import {INDEXING_CREATE, INDEXING_DELETE, INDEXING_GET, INDEXING_LIST, INDEXING_UPDATE} from "./constant";

export function* getIndexingList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/indexing`,
            payload
        );
        yield put(indexingListSuccess(response?.data));

    } catch (e) {
        yield put(indexingListFailure(e.response?.data?.message));
    }
}

//create
export function* createIndexing({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/indexing`,
            payload
        );
        yield put(indexingCreateSuccess(response?.data));

    } catch (e) {
        yield put(indexingCreateFailure(e.response?.data?.message));
    }
}

//gte by id
export function* getIndexing({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/indexing/${payload.id}`,
            payload
        );
        yield put(indexingGetSuccess(response?.data));

    } catch (e) {
        yield put(indexingGetFailure(e.response?.data?.message));
    }
}

//update
export function* updateIndexing({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/indexing/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(indexingUpdateSuccess(response?.data));

    } catch (e) {
        yield put(indexingUpdateFailure(e.response?.data?.message));
    }
}

//delete
export function* deleteIndexing({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/super-admin/indexing/${payload.id}`,
            payload
        );
        yield put(indexingDeleteSuccess(response?.data));

    } catch (e) {
        yield put(indexingDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(INDEXING_LIST, getIndexingList);
}

export function* createFlow() {
    yield takeLatest(INDEXING_CREATE, createIndexing);
}

export function* getFlow() {
    yield takeLatest(INDEXING_GET, getIndexing);
}

export function* updateFlow() {
    yield takeLatest(INDEXING_UPDATE, updateIndexing);
}

export function* deleteFlow() {
    yield takeLatest(INDEXING_DELETE, deleteIndexing);
}

export default function* IndexingSaga() {
    yield all([
        listFlow(),
        createFlow(),
        getFlow(),
        updateFlow(),
        deleteFlow(),
    ]);
}
