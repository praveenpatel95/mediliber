/* eslint-disable camelcase */
import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import api from "../../utils/api";
import {
    loginSuccess,
    loginFailure,
    logoutSuccess,
    registerSuccess,
    registerFailure,
    updateProfileSuccess,
    updateProfileFailure,
    updateUserPasswordSuccess, updateUserPasswordFailure,
} from "./actions";


import {
    LOGIN,
    LOGOUT,
    REGISTER, UPDATE_PASSWORD, UPDATE_PROFILE,
} from "./constant";

export function* fetchRegister({payload}) {
    try {
        const response = yield call(api(null, null, false)
                .post, `/v1/author/register`,
            payload
        );

        yield put(registerSuccess(response))

    } catch (e) {
        yield put(registerFailure(e.response.data));
    }
}

export function* fetchLogin({payload}) {

    try {
        const response = yield call(
            api(null, null, false).post,
            `/v1/auth/login`,
            payload
        );
        yield put(loginSuccess({token: response?.data?.token, user: response?.data}))
        localStorage.setItem("token", response?.data?.token);

    } catch (e) {
        yield put(loginFailure(e.response?.data?.message));
        localStorage.clear();
    }
}

//update profile
export function* updateUserProfile({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null, false)
                .post, `/v1/auth/change-profile`,
            payload
        );
        yield put(updateProfileSuccess(response?.data))

    } catch (e) {
        yield put(updateProfileFailure(e.response?.data?.message));
    }
}

//update password
export function* updateUserPassword({payload}) {
    const token = localStorage.getItem("token");
    try {
        yield call(api(token, null, false)
                .post, `/v1/auth/change-password`,
            payload
        );
        yield put(updateUserPasswordSuccess());

    } catch (e) {
        yield put(updateUserPasswordFailure(e.response?.data?.message));
    }
}

export function* fetchLogout() {
    yield put(logoutSuccess());
    localStorage.removeItem('token')
}

/**
 *
 * Saga flow
 */

export function* loginFlow() {
    yield takeLatest(LOGIN, fetchLogin);
}

export function* registerFlow() {
    yield takeLatest(REGISTER, fetchRegister);
}

export function* logoutFlow() {
    yield takeLatest(LOGOUT, fetchLogout);
}

export function* updateProfileFlow() {
    yield takeLatest(UPDATE_PROFILE, updateUserProfile);
}

export function* updateUserProfileFlow() {
    yield takeLatest(UPDATE_PASSWORD, updateUserPassword);
}

export default function* AuthSaga() {
    yield all([
        loginFlow(),
        registerFlow(),
        logoutFlow(),
        updateProfileFlow(),
        updateUserProfileFlow(),
    ]);
}
