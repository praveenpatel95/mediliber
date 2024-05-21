import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    articleAdminCreateFailure,
    articleAdminCreateSuccess,
    articleAdminDeleteFailure,
    articleAdminDeleteSuccess, articleFileUploadDeleteFailure, articleFileUploadDeleteSuccess,
    articleFileUploadFailure,
    articleFileUploadSuccess,
    articlePublishCreateFailure,
    articlePublishCreateSuccess,
    articlePublishUpdateFailure,
    articlePublishUpdateSuccess, getArticleFileUploadFailure, getArticleFileUploadSuccess,
    getJournalArticleDetailFailure,
    getJournalArticleDetailSuccess,
    getJournalArticleListFailure,
    getJournalArticleListSuccess,
    updateJournalArticleStatusFailure,
    updateJournalArticleStatusSuccess


} from "./actions";
import {
    ADMIN_ARTICLE_CREATE, ADMIN_ARTICLE_DELETE, ARTICLE_FILE_UPLOAD, ARTICLE_FILE_UPLOAD_DELETE,
    ARTICLE_PUBLISH_CREATE, ARTICLE_PUBLISH_UPDATE, GET_ARTICLE_FILE_UPLOAD,
    JOURNAL_ARTICLE_DETAIL,
    JOURNAL_ARTICLE_LIST, JOURNAL_ARTICLE_UPDATE_STATUS,
} from "./constant";


export function* getList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/article?status=${payload}`,
            payload
        );
        yield put(getJournalArticleListSuccess(response?.data));

    } catch (e) {
        yield put(getJournalArticleListFailure(e.response?.data?.message));
    }
}

export function* getDetailById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/article/${payload}`);
        yield put(getJournalArticleDetailSuccess(response?.data));

    } catch (e) {
        yield put(getJournalArticleDetailFailure(e.response?.data?.message));
    }
}

export function* updateStatus({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/article/updateStatus/${payload.id}?status=${payload.status}`);
        yield put(updateJournalArticleStatusSuccess(response?.data));

    } catch (e) {
        yield put(updateJournalArticleStatusFailure(e.response?.data?.message));
    }
}



export function* articleCreate({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/article`,
            payload
        );
        yield put(articleAdminCreateSuccess(response?.data));

    } catch (e) {
        yield put(articleAdminCreateFailure(e.response?.data?.message));
    }
}

export function* articleDelete({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/admin/article/${payload.id}`,
            payload
        );
        yield put(articleAdminDeleteSuccess(response?.data));

    } catch (e) {
        yield put(articleAdminDeleteFailure(e.response?.data?.message));
    }
}

export function* articlePublishCreate({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/article-publish`,
            payload
        );
        yield put(articlePublishCreateSuccess(response?.data));

    } catch (e) {
        yield put(articlePublishCreateFailure(e.response?.data?.message));
    }
}

export function* articlePublishUpdate({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/article-publish/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(articlePublishUpdateSuccess(response?.data));

    } catch (e) {
        yield put(articlePublishUpdateFailure(e.response?.data?.message));
    }
}

export function* articleFileUploadApi({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/article/upload`,
            payload
        );
        yield put(articleFileUploadSuccess(response?.data));

    } catch (e) {
        yield put(articleFileUploadFailure(e.response?.data?.message));
    }
}

export function* getArticleFileUploadApi({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/article/upload/${payload}/files`,
            payload
        );
        yield put(getArticleFileUploadSuccess(response?.data));

    } catch (e) {
        yield put(getArticleFileUploadFailure(e.response?.data?.message));
    }
}

export function* articleFileUploadDeleteApi({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/admin/article/upload/${payload}/delete`,
            payload
        );
        yield put(articleFileUploadDeleteSuccess(response?.data));

    } catch (e) {
        yield put(articleFileUploadDeleteFailure(e.response?.data?.message));
    }
}
/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(JOURNAL_ARTICLE_LIST, getList);
}

export function* getDetailFlow() {
    yield takeLatest(JOURNAL_ARTICLE_DETAIL, getDetailById);
}

export function* updateStatusFlow() {
    yield takeLatest(JOURNAL_ARTICLE_UPDATE_STATUS, updateStatus);
}

export function* articlePublishCreateFlow() {
    yield takeLatest(ARTICLE_PUBLISH_CREATE, articlePublishCreate);
}

export function* articlePublishUpdateFlow() {
    yield takeLatest(ARTICLE_PUBLISH_UPDATE, articlePublishUpdate);
}
export function* articleCreateFlow() {
    yield takeLatest(ADMIN_ARTICLE_CREATE, articleCreate);
}
export function* articleDeleteFlow() {
    yield takeLatest(ADMIN_ARTICLE_DELETE, articleDelete);
}
export function* articleFileUploadApiFlow() {
    yield takeLatest(ARTICLE_FILE_UPLOAD, articleFileUploadApi);
}

export function* getArticleFileUploadApiFlow() {
    yield takeLatest(GET_ARTICLE_FILE_UPLOAD, getArticleFileUploadApi);
}

export function* articleFileUploadDeleteApiFlow() {
    yield takeLatest(ARTICLE_FILE_UPLOAD_DELETE, articleFileUploadDeleteApi);
}

export default function* JournalArticleSaga() {
    yield all([
        listFlow(),
        getDetailFlow(),
        updateStatusFlow(),
        articlePublishCreateFlow(),
        articleCreateFlow(),
        articleDeleteFlow(),
        articlePublishUpdateFlow(),
        getArticleFileUploadApiFlow(),
        articleFileUploadApiFlow(),
        articleFileUploadDeleteApiFlow(),
    ]);
}
