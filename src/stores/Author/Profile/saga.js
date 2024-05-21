
import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getAuthorProfileFailure,
    getAuthorProfileSuccess, updateAuthorProfileFailure, updateAuthorProfileSuccess

} from "./actions";
import {
    GET_AUTHOR_PROFILE, UPDATE_AUTHOR_PROFILE,
} from "./constant";
import api from "../../../utils/api";

export function* fetchAuthorProfile({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `v1/author/profile`,
            payload
        );
        yield put(getAuthorProfileSuccess(response?.data));

    } catch (e) {
        yield put(getAuthorProfileFailure(e.response?.data?.message));
    }
}

export function* updateAuthorProfile({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `v1/author/profile`,
            payload
        );
        yield put(updateAuthorProfileSuccess(response?.data));

    } catch (e) {
        yield put(updateAuthorProfileFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */

export function* getFlow() {
    yield takeLatest(GET_AUTHOR_PROFILE, fetchAuthorProfile);
}

export function* updateFlow() {
    yield takeLatest(UPDATE_AUTHOR_PROFILE, updateAuthorProfile);
}


export default function* AuthorProfileSaga() {
    yield all([
        getFlow(),
        updateFlow(),
    ]);
}
