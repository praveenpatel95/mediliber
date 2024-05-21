
import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    articleCreateFailure,
    articleCreateSuccess,
    articleDeleteFailure,
    articleDeleteSuccess,
    articleGetFailure,
    articleGetSuccess,
    articleListFailure,
    articleListSuccess,
    articleUpdateFailure,
    articleUpdateSuccess

} from "./actions";
import {
    ARTICLE_CREATE,
    ARTICLE_DELETE,
    ARTICLE_GET,
    ARTICLE_LIST,
    ARTICLE_UPDATE
} from "./constant";
import api from "../../utils/api";

export function* getList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/author/article`,
            payload
        );
        yield put(articleListSuccess(response));

    } catch (e) {
        yield put(articleListFailure(e.response?.data?.message));
    }
}

//create
export function* create({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/author/article`,
            payload
        );
        yield put(articleCreateSuccess(response?.data));

    } catch (e) {
        yield put(articleCreateFailure(e.response?.data?.message));
    }
}

//gte by id
export function* getById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/admin/editorial/${payload.id}`,
            payload
        );
        yield put(articleGetSuccess(response?.data));

    } catch (e) {
        yield put(articleGetFailure(e.response?.data?.message));
    }
}

//update
export function* update({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/admin/editorial/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(articleUpdateSuccess(response?.data));

    } catch (e) {
        yield put(articleUpdateFailure(e.response?.data?.message));
    }
}

//delete
export function* deleteById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/admin/editorial/${payload.id}`,
            payload
        );
        yield put(articleDeleteSuccess(response?.data));

    } catch (e) {
        yield put(articleDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(ARTICLE_LIST, getList);
}

export function* createFlow() {
    yield takeLatest(ARTICLE_CREATE, create);
}

export function* getFlow() {
    yield takeLatest(ARTICLE_GET, getById);
}

export function* updateFlow() {
    yield takeLatest(ARTICLE_UPDATE, update);
}

export function* deleteFlow() {
    yield takeLatest(ARTICLE_DELETE, deleteById);
}

export default function* ArticleSaga() {
    yield all([
        listFlow(),
        createFlow(),
        getFlow(),
        updateFlow(),
        deleteFlow(),
    ]);
}
