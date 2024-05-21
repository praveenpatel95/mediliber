import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    editorialBoardCategoryList, editorialBoardCategoryListFailure, editorialBoardCategoryListSuccess,
    getJournalDetailBySlugFailure,
    getJournalDetailBySlugSuccess,
    getJournalEditorialBoardFailure,
    getJournalEditorialBoardSuccess,
    getJournalPageDetailFailure,
    getJournalPageDetailSuccess,
    getJournalReviewerBoardFailure,
    getJournalReviewerBoardSuccess,
    getJournalVolumeArticlesFailure,
    getJournalVolumeArticlesSuccess,
    getJournalVolumeListFailure,
    getJournalVolumeListSuccess,
    getRecentEditorialBoardFailure,
    getRecentEditorialBoardSuccess,
    journalFeaturedListFailure,
    journalFeaturedListSuccess,

    journalListFailure,
    journalListSuccess
} from "./actions";
import {
    EDITOIRAL_BOARD_CATEGORY_LIST,
    JOURNAL_BY_SLUG,
    JOURNAL_EDITORIAL_BOARD,
    JOURNAL_FEATURED_LIST,
    JOURNAL_LIST,
    JOURNAL_PAGE_DETAIL,
    JOURNAL_REVIEWER_BOARD,
    JOURNAL_VOLUME_ISSUE_ARTICLES,
    JOURNAL_VOLUME_LIST,
    RECENT_EDITORIAL_BOARD
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
                .get, `/v1/journal/page/detail${payload}`,
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

//get recently editorial board
export function* getRecentEditorialBoard({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/boardmember/recent`,
            payload
        );
        yield put(getRecentEditorialBoardSuccess(response?.data));

    } catch (e) {
        yield put(getRecentEditorialBoardFailure(e.response?.data?.message));
    }
}

//get volume list
export function* getJournalVolumeListApi({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/volume/${payload}/list`,
            payload
        );
        yield put(getJournalVolumeListSuccess(response?.data));

    } catch (e) {
        yield put(getJournalVolumeListFailure(e.response?.data?.message));
    }
}

//get volume articles
export function* getJournalVolumeArticlesListApi({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/volume/article/${payload.journalId}/${payload.volume}/${payload.issue}`,
            payload
        );
        yield put(getJournalVolumeArticlesSuccess(response?.data));

    } catch (e) {
        yield put(getJournalVolumeArticlesFailure(e.response?.data?.message));
    }
}

export function* getEditorialBoardCategoryListApi({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/editorial/board-category`,
            payload
        );
        yield put(editorialBoardCategoryListSuccess(response?.data));

    } catch (e) {
        yield put(editorialBoardCategoryListFailure(e.response?.data?.message));
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
export function* getRecentlyEditorialBoardFlow() {
    yield takeLatest(RECENT_EDITORIAL_BOARD, getRecentEditorialBoard);
}
export function* getJournalVolumeListApiFlow() {
    yield takeLatest(JOURNAL_VOLUME_LIST, getJournalVolumeListApi);
}

export function* getJournalVolumeArticlesListApiFlow() {
    yield takeLatest(JOURNAL_VOLUME_ISSUE_ARTICLES, getJournalVolumeArticlesListApi);
}

export function* getEditorialBoardCategoryListApiFlow() {
    yield takeLatest(EDITOIRAL_BOARD_CATEGORY_LIST, getEditorialBoardCategoryListApi);
}


export default function* WebJournalSaga() {
    yield all([
        listFlow(),
        listFeaturedFlow(),
        getSlugFlow(),
        getPageDetailFlow(),
        getEditorialBoardFlow(),
        getReviewerBoardBySlugFlow(),
        getRecentlyEditorialBoardFlow(),
        getJournalVolumeListApiFlow(),
        getJournalVolumeArticlesListApiFlow(),
        getEditorialBoardCategoryListApiFlow(),
    ]);
}
