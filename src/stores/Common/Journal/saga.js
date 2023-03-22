import api from "../../../utils/api";

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

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(JOURNAL_LIST, getJournalList);
}


export function* deleteFlow() {
    yield takeLatest(JOURNAL_DELETE, deleteJournal);
}

export default function* WebJournalSaga() {
    yield all([
        listFlow(),
    ]);
}
