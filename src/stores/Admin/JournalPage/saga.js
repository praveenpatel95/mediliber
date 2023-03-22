import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getAdminJournalPageDetailFailure,
    getAdminJournalPageDetailSuccess,
    getAdminJournalPagesFailure,
    getAdminJournalPagesSuccess, updateAdminJournalPageDetailFailure, updateAdminJournalPageDetailSuccess,
} from "./actions";
import {
    GET_ADMIN_JOURNAL_PAGE_DETAIL,
    GET_ADMIN_JOURNAL_PAGES, UPDATE_ADMIN_JOURNAL_PAGE_DETAIL,
} from "./constant";
import api from "../../../utils/api";

export function* getAll({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/journal/pages`,
            payload
        );
        yield put(getAdminJournalPagesSuccess(response?.data));

    } catch (e) {
        yield put(getAdminJournalPagesFailure(e.response?.data?.message));
    }
}

export function* getPageDetailId({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/journal/pages/${payload.id}`,
            payload
        );
        yield put(getAdminJournalPageDetailSuccess(response?.data));

    } catch (e) {
        yield put(getAdminJournalPageDetailFailure(e.response?.data?.message));
    }
}

export function* updatePageDetail({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/journal/pages/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(updateAdminJournalPageDetailSuccess(response?.data));

    } catch (e) {
        yield put(updateAdminJournalPageDetailFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */



export function* getFlow() {
    yield takeLatest(GET_ADMIN_JOURNAL_PAGES, getAll);
}
export function* getByIdFlow() {
    yield takeLatest(GET_ADMIN_JOURNAL_PAGE_DETAIL, getPageDetailId);
}

export function* updateByIdFlow() {
    yield takeLatest(UPDATE_ADMIN_JOURNAL_PAGE_DETAIL, updatePageDetail);
}

export default function* AdminJournalPageSaga() {
    yield all([
        getFlow(),
        getByIdFlow(),
        updateByIdFlow(),
    ]);
}
