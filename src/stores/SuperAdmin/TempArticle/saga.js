import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    tempArticleCreateFailure,
    tempArticleCreateSuccess,
    tempArticleDeleteFailure,
    tempArticleDeleteSuccess,
    tempArticleGetFailure,
    tempArticleGetSuccess,
    tempArticleListFailure,
    tempArticleListSuccess,
    tempArticleUpdateFailure,
    tempArticleUpdateSuccess

} from "./actions";
import {
    TEMP_ARTICLE_CREATE,
    TEMP_ARTICLE_DELETE,
    TEMP_ARTICLE_GET,
    TEMP_ARTICLE_LIST,
    TEMP_ARTICLE_UPDATE
} from "./constant";

export function* getList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(null, null)
                .get, `/v1/temp-articles`,
            payload
        );
        // const response = yield call(api(token, null)
        //         .get, `/v1/super-admin/temparticle`,
        //     payload
        // );
        yield put(tempArticleListSuccess(response?.data));

    } catch (e) {
        yield put(tempArticleListFailure(e.response?.data?.message));
    }
}

//create
export function* create({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/temparticle`,
            payload
        );
        yield put(tempArticleCreateSuccess(response?.data));

    } catch (e) {
        yield put(tempArticleCreateFailure(e.response?.data?.message));
    }
}

//gte by id
export function* getById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/temparticle/${payload.id}`,
            payload
        );
        yield put(tempArticleGetSuccess(response?.data));

    } catch (e) {
        yield put(tempArticleGetFailure(e.response?.data?.message));
    }
}

//update
export function* update({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/temparticle/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(tempArticleUpdateSuccess(response?.data));

    } catch (e) {
        yield put(tempArticleUpdateFailure(e.response?.data?.message));
    }
}

//delete
export function* deleteById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/super-admin/temparticle/${payload.id}`,
            payload
        );
        yield put(tempArticleDeleteSuccess(response?.data));

    } catch (e) {
        yield put(tempArticleDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(TEMP_ARTICLE_LIST, getList);
}

export function* createFlow() {
    yield takeLatest(TEMP_ARTICLE_CREATE, create);
}

export function* getFlow() {
    yield takeLatest(TEMP_ARTICLE_GET, getById);
}

export function* updateFlow() {
    yield takeLatest(TEMP_ARTICLE_UPDATE, update);
}

export function* deleteFlow() {
    yield takeLatest(TEMP_ARTICLE_DELETE, deleteById);
}

export default function* TempArticleSaga() {
    yield all([
        listFlow(),
        createFlow(),
        getFlow(),
        updateFlow(),
        deleteFlow(),
    ]);
}
