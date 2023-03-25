import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getJournalDetailBySlugFailure,
    getJournalDetailBySlugSuccess,
    getJournalEditorialBoardFailure,
    getJournalEditorialBoardSuccess,
    getJournalPageDetailFailure,
    getJournalPageDetailSuccess,
    getJournalReviewerBoardFailure,
    getJournalReviewerBoardSuccess,
    journalFeaturedListFailure,
    journalFeaturedListSuccess,

    journalListFailure,
    journalListSuccess
} from "./actions";
import {
    JOURNAL_BY_SLUG,
    JOURNAL_EDITORIAL_BOARD,
    JOURNAL_FEATURED_LIST,
    JOURNAL_LIST,
    JOURNAL_PAGE_DETAIL, JOURNAL_REVIEWER_BOARD
} from "./constant";

export function* getJournalList({payload}) {
    try {
        let query = null;
        if(payload?.byCategory){
            query = `byCategory=${payload?.byCategory}`;
        }
        const response = yield call(api(null, null)
                .get, `/v1/journal?${query}`,
            payload
        );
        yield put(journalListSuccess(response?.data));

    } catch (e) {
        yield put(journalListFailure(e.response?.data?.message));
    }
}

export function* getJournalFeaturedList({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/featured`,
            payload
        );
        yield put(journalFeaturedListSuccess(response?.data));

    } catch (e) {
        yield put(journalFeaturedListFailure(e.response?.data?.message));
    }
}

//get detail by slug
export function* getDetailBySlug({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/${payload}`,
            payload
        );
        yield put(getJournalDetailBySlugSuccess(response?.data));

    } catch (e) {
        yield put(getJournalDetailBySlugFailure(e.response?.data?.message));
    }
}

//get PAGE detail by slug
export function* getPageDetailBySlug({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/page/${payload}`,
            payload
        );
        yield put(getJournalPageDetailSuccess(response?.data));

    } catch (e) {
        yield put(getJournalPageDetailFailure(e.response?.data?.message));
    }
}

//get EDITORIAL BOARD
export function* getEditorialBoardBySlug({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/editorial-board/${payload}`,
            payload
        );
        yield put(getJournalEditorialBoardSuccess(response?.data));

    } catch (e) {
        yield put(getJournalEditorialBoardFailure(e.response?.data?.message));
    }
}

//get REVIEWER BOARD
export function* getReviewerBoardBySlug({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/reviewer-board/${payload}`,
            payload
        );
        yield put(getJournalReviewerBoardSuccess(response?.data));

    } catch (e) {
        yield put(getJournalReviewerBoardFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(JOURNAL_LIST, getJournalList);
}
export function* listFeaturedFlow() {
    yield takeLatest(JOURNAL_FEATURED_LIST, getJournalFeaturedList);
}
export function* getSlugFlow() {
    yield takeLatest(JOURNAL_BY_SLUG, getDetailBySlug);
}
export function* getPageDetailFlow() {
    yield takeLatest(JOURNAL_PAGE_DETAIL, getPageDetailBySlug);
}
export function* getEditorialBoardFlow() {
    yield takeLatest(JOURNAL_EDITORIAL_BOARD, getEditorialBoardBySlug);
}
export function* getReviewerBoardBySlugFlow() {
    yield takeLatest(JOURNAL_REVIEWER_BOARD, getReviewerBoardBySlug);
}


export default function* WebJournalSaga() {
    yield all([
        listFlow(),
        listFeaturedFlow(),
        getSlugFlow(),
        getPageDetailFlow(),
        getEditorialBoardFlow(),
        getReviewerBoardBySlugFlow(),
    ]);
}
