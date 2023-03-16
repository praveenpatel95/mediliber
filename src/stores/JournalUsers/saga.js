import api from "../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    journalUserCreateFailure, journalUserCreatSuccess, journalUserDeleteFailure,
    journalUserDeleteSuccess,
    journalUsersFailure,
    journalUsersSuccess
} from "./actions";
import {JOURNAL_USER_CREATE, JOURNAL_USER_DELETE, JOURNAL_USERS} from "./constant";


export function* getJournalUsers({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/journal/access`,
            payload
        );
        yield put(journalUsersSuccess(response?.data));

    } catch (e) {
        yield put(journalUsersFailure(e.response?.data?.message));
    }
}

//create
export function* createJournalUser({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/journal/access`,
            payload
        );
        yield put(journalUserCreatSuccess(response?.data));

    } catch (e) {
        yield put(journalUserCreateFailure(e.response?.data?.message));
    }
}

//delete
export function* deleteJournalUser({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/super-admin/journal/access/${payload.id}`,
            payload
        );
        yield put(journalUserDeleteSuccess(response?.data));

    } catch (e) {
        yield put(journalUserDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(JOURNAL_USERS, getJournalUsers);
}

export function* createFlow() {
    yield takeLatest(JOURNAL_USER_CREATE, createJournalUser);
}

export function* deleteFlow() {
    yield takeLatest(JOURNAL_USER_DELETE, deleteJournalUser);
}

export default function* JournalUserSaga() {
    yield all([
        listFlow(),
        createFlow(),
        deleteFlow(),
    ]);
}
