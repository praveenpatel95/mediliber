import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    webArticleFileDetailFailure,
    webArticleFileDetailSuccess,
    webJournalArticleDetailFailure,
    webJournalArticleDetailSuccess,
    webJournalArticleListFailure,
    webJournalArticleListSuccess

} from "./actions";
import {
    WEB_ARTICLE_FILE_DETAIL,
    WEB_JOURNAL_ARTICLE_DETAIL,
    WEB_JOURNAL_ARTICLE_LIST
} from "./constant";

export function* getJournalArticleList({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/articles/${payload.journalId}/${payload.articleMode}`,
            payload
        );
        yield put(webJournalArticleListSuccess(response?.data));

    } catch (e) {
        yield put(webJournalArticleListFailure(e.response?.data?.message));
    }
}

export function* getJournalArticle({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/article/${payload.articleId}`,
            payload
        );
        yield put(webJournalArticleDetailSuccess(response?.data));

    } catch (e) {
        yield put(webJournalArticleDetailFailure(e.response?.data?.message));
    }
}

export function* getJournalArticleFileDetail({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal/article/file/${payload}`,
            payload
        );
        yield put(webArticleFileDetailSuccess(response?.data));

    } catch (e) {
        yield put(webArticleFileDetailFailure(e.response?.data?.message));
    }
}

export function* listFlow() {
    yield takeLatest(WEB_JOURNAL_ARTICLE_LIST, getJournalArticleList);
}

export function* detailByIdFlow() {
    yield takeLatest(WEB_JOURNAL_ARTICLE_DETAIL, getJournalArticle);
}

export function* getJournalArticleFileDetailFlow() {
    yield takeLatest(WEB_ARTICLE_FILE_DETAIL, getJournalArticleFileDetail);
}

export default function* WebJournalArticleSaga() {
    yield all([
        listFlow(),
        detailByIdFlow(),
        getJournalArticleFileDetailFlow(),
    ]);
}
