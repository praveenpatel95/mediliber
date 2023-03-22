import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    journalCategoryCreateFailure,
    journalCategoryCreateSuccess,
    journalCategoryDeleteFailure,
    journalCategoryDeleteSuccess,
    journalCategoryGetFailure,
    journalCategoryGetSuccess,
    journalCategoryListFailure,
    journalCategoryListSuccess,
    journalCategoryUpdateFailure,
    journalCategoryUpdateSuccess
} from "./actions";

import {
    JOURNAL_CATEGORY_CREATE, JOURNAL_CATEGORY_DELETE,
    JOURNAL_CATEGORY_GET,
    JOURNAL_CATEGORY_LIST,
    JOURNAL_CATEGORY_UPDATE
} from "./constant";

export function* getJournalCategoryList({payload}) {
    const token = localStorage.getItem("token");

    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/journal-category`,
            payload
        );
        yield put(journalCategoryListSuccess(response?.data));

    } catch (e) {
        yield put(journalCategoryListFailure(e.response?.data?.message));
    }
}

//CREATE
export function* createJournalCategory({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/journal-category`,
            payload
        );
        yield put(journalCategoryCreateSuccess());
    } catch (e) {
        yield put(journalCategoryCreateFailure(e.response?.data?.message));
    }
}

//GET BY ID
export function* getJournalCategory({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/journal-category/${payload.id}`,
            payload
        );
        yield put(journalCategoryGetSuccess(response?.data));
    } catch (e) {
        yield put(journalCategoryGetFailure(e.response?.data?.message));
    }
}

//UPDATE
export function* updateJournalCategory({payload}) {
    const token = localStorage.getItem("token");
    try {
        yield call(api(token, null)
                .post, `/v1/super-admin/journal-category/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(journalCategoryUpdateSuccess());
    } catch (e) {
        yield put(journalCategoryUpdateFailure(e.response?.data?.message));
    }
}

//DELETE
export function* deleteJournalCategory({payload}) {
    const token = localStorage.getItem("token");
    try {
        yield call(api(token, null)
                .delete, `/v1/super-admin/journal-category/${payload.id}`,
            payload
        );
        yield put(journalCategoryDeleteSuccess());
    } catch (e) {
        yield put(journalCategoryDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(JOURNAL_CATEGORY_LIST, getJournalCategoryList);
}

export function* createFlow() {
    yield takeLatest(JOURNAL_CATEGORY_CREATE, createJournalCategory);
}

export function* getFlow() {
    yield takeLatest(JOURNAL_CATEGORY_GET, getJournalCategory);
}

export function* updateFlow() {
    yield takeLatest(JOURNAL_CATEGORY_UPDATE, updateJournalCategory);
}
export function* deleteFlow() {
    yield takeLatest(JOURNAL_CATEGORY_DELETE, deleteJournalCategory);
}


export default function* JournalCategorySaga() {
    yield all([
        listFlow(),
        createFlow(),
        getFlow(),
        updateFlow(),
        deleteFlow(),
    ]);
}
