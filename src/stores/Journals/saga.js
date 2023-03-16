import api from "../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    journalCreateFailure,
    journalCreateSuccess, journalDeleteFailure, journalDeleteSuccess, journalGetFailure,
    journalGetSuccess,
    journalListFailure,
    journalListSuccess, journalUpdateFailure, journalUpdateSuccess
} from "./actions";
import {JOURNAL_CREATE, JOURNAL_DELETE, JOURNAL_GET, JOURNAL_LIST, JOURNAL_UPDATE} from "./constant";

export function* getJournalList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/journals`,
            payload
        );
        yield put(journalListSuccess(response?.data));

    } catch (e) {
        yield put(journalListFailure(e.response?.data?.message));
    }
}

//create
export function* createJournal({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/journals`,
            payload
        );
        yield put(journalCreateSuccess(response?.data));

    } catch (e) {
        yield put(journalCreateFailure(e.response?.data?.message));
    }
}

//gte by id
export function* getJournal({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/journals/${payload.id}`,
            payload
        );
        yield put(journalGetSuccess(response?.data));

    } catch (e) {
        yield put(journalGetFailure(e.response?.data?.message));
    }
}

//update
export function* updateJournal({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/journals/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(journalUpdateSuccess(response?.data));

    } catch (e) {
        yield put(journalUpdateFailure(e.response?.data?.message));
    }
}

//delete
export function* deleteJournal({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/super-admin/journals/${payload.id}`,
            payload
        );
        yield put(journalDeleteSuccess(response?.data));

    } catch (e) {
        yield put(journalDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(JOURNAL_LIST, getJournalList);
}

export function* createFlow() {
    yield takeLatest(JOURNAL_CREATE, createJournal);
}

export function* getFlow() {
    yield takeLatest(JOURNAL_GET, getJournal);
}

export function* updateFlow() {
    yield takeLatest(JOURNAL_UPDATE, updateJournal);
}

export function* deleteFlow() {
    yield takeLatest(JOURNAL_DELETE, deleteJournal);
}

export default function* JournalSaga() {
    yield all([
        listFlow(),
        createFlow(),
        getFlow(),
        updateFlow(),
        deleteFlow(),
    ]);
}
