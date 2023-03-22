import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    reviewerBoardCreateFailure,
    reviewerBoardCreateSuccess,
    reviewerBoardDeleteFailure,
    reviewerBoardDeleteSuccess,
    reviewerBoardGetFailure,
    reviewerBoardGetSuccess,
    reviewerBoardListFailure,
    reviewerBoardListSuccess,
    reviewerBoardUpdateFailure,
    reviewerBoardUpdateSuccess

} from "./actions";
import {
    REVIEWER_BOARD_CREATE,
    REVIEWER_BOARD_DELETE,
    REVIEWER_BOARD_GET,
    REVIEWER_BOARD_LIST,
    REVIEWER_BOARD_UPDATE
} from "./constant";

export function* getList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/reviewer_board`,
            payload
        );
        yield put(reviewerBoardListSuccess(response?.data));

    } catch (e) {
        yield put(reviewerBoardListFailure(e.response?.data?.message));
    }
}

//create
export function* create({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/reviewer_board`,
            payload
        );
        yield put(reviewerBoardCreateSuccess(response?.data));

    } catch (e) {
        yield put(reviewerBoardCreateFailure(e.response?.data?.message));
    }
}

//gte by id
export function* getById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/reviewer_board/${payload.id}`,
            payload
        );
        yield put(reviewerBoardGetSuccess(response?.data));

    } catch (e) {
        yield put(reviewerBoardGetFailure(e.response?.data?.message));
    }
}

//update
export function* update({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/reviewer_board/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(reviewerBoardUpdateSuccess(response?.data));

    } catch (e) {
        yield put(reviewerBoardUpdateFailure(e.response?.data?.message));
    }
}

//delete
export function* deleteById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/admin/reviewer_board/${payload.id}`,
            payload
        );
        yield put(reviewerBoardDeleteSuccess(response?.data));

    } catch (e) {
        yield put(reviewerBoardDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(REVIEWER_BOARD_LIST, getList);
}

export function* createFlow() {
    yield takeLatest(REVIEWER_BOARD_CREATE, create);
}

export function* getFlow() {
    yield takeLatest(REVIEWER_BOARD_GET, getById);
}

export function* updateFlow() {
    yield takeLatest(REVIEWER_BOARD_UPDATE, update);
}

export function* deleteFlow() {
    yield takeLatest(REVIEWER_BOARD_DELETE, deleteById);
}

export default function* ReviewerBoardSaga() {
    yield all([
        listFlow(),
        createFlow(),
        getFlow(),
        updateFlow(),
        deleteFlow(),
    ]);
}
