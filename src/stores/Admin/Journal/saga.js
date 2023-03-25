

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getJournalProfileFailure,
    getJournalProfileSuccess, getPagesFailure, getPagesSuccess,
    updateJournalProfileFailure,
    updateJournalProfileSuccess
} from "./actions";
import {GET_JOURNAL_PROFILE, GET_PAGES, UPDATE_JOURNAL_PROFILE} from "./constant";
import api from "../../../utils/api";




//get journal
export function* getJournal({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/journal`,
            payload
        );
        yield put(getJournalProfileSuccess(response?.data));

    } catch (e) {
        yield put(getJournalProfileFailure(e.response?.data?.message));
    }
}

//update
export function* updateJournal({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/journal?_method=put`,
            payload
        );
        yield put(updateJournalProfileSuccess(response?.data));

    } catch (e) {
        yield put(updateJournalProfileFailure(e.response?.data?.message));
    }
}

export function* getPagesList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/journal/pages`,
            payload
        );
        yield put(getPagesSuccess(response?.data));

    } catch (e) {
        yield put(getPagesFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */

export function* getFlow() {
    yield takeLatest(GET_JOURNAL_PROFILE, getJournal);
}
export function* getPageFlow() {
    yield takeLatest(GET_PAGES, getPagesList);
}

export function* updateFlow() {
    yield takeLatest(UPDATE_JOURNAL_PROFILE, updateJournal);
}

export default function* AdminJournalSaga() {
    yield all([
        getFlow(),
        updateFlow(),
        getPageFlow(),
    ]);
}
