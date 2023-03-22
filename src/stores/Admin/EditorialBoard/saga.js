import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    editorialBoardCreateFailure,
    editorialBoardCreateSuccess,
    editorialBoardDeleteFailure,
    editorialBoardDeleteSuccess,
    editorialBoardGetFailure,
    editorialBoardGetSuccess,
    editorialBoardListFailure,
    editorialBoardListSuccess,
    editorialBoardUpdateFailure,
    editorialBoardUpdateSuccess

} from "./actions";
import {
    EDITORIAL_BOARD_CREATE,
    EDITORIAL_BOARD_DELETE,
    EDITORIAL_BOARD_GET,
    EDITORIAL_BOARD_LIST,
    EDITORIAL_BOARD_UPDATE
} from "./constant";

export function* getList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/editorial`,
            payload
        );
        yield put(editorialBoardListSuccess(response?.data));

    } catch (e) {
        yield put(editorialBoardListFailure(e.response?.data?.message));
    }
}

//create
export function* create({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/editorial`,
            payload
        );
        yield put(editorialBoardCreateSuccess(response?.data));

    } catch (e) {
        yield put(editorialBoardCreateFailure(e.response?.data?.message));
    }
}

//gte by id
export function* getById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/editorial/${payload.id}`,
            payload
        );
        yield put(editorialBoardGetSuccess(response?.data));

    } catch (e) {
        yield put(editorialBoardGetFailure(e.response?.data?.message));
    }
}

//update
export function* update({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/editorial/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(editorialBoardUpdateSuccess(response?.data));

    } catch (e) {
        yield put(editorialBoardUpdateFailure(e.response?.data?.message));
    }
}

//delete
export function* deleteById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/admin/editorial/${payload.id}`,
            payload
        );
        yield put(editorialBoardDeleteSuccess(response?.data));

    } catch (e) {
        yield put(editorialBoardDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(EDITORIAL_BOARD_LIST, getList);
}

export function* createFlow() {
    yield takeLatest(EDITORIAL_BOARD_CREATE, create);
}

export function* getFlow() {
    yield takeLatest(EDITORIAL_BOARD_GET, getById);
}

export function* updateFlow() {
    yield takeLatest(EDITORIAL_BOARD_UPDATE, update);
}

export function* deleteFlow() {
    yield takeLatest(EDITORIAL_BOARD_DELETE, deleteById);
}

export default function* EditorialBoardSaga() {
    yield all([
        listFlow(),
        createFlow(),
        getFlow(),
        updateFlow(),
        deleteFlow(),
    ]);
}
