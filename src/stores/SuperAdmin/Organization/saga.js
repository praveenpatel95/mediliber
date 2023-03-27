import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    organizationCreateFailure,
    organizationCreateSuccess,
    organizationDeleteFailure,
    organizationDeleteSuccess,
    organizationGetFailure,
    organizationGetSuccess,
    organizationListFailure,
    organizationListSuccess,
    organizationUpdateFailure,
    organizationUpdateSuccess

} from "./actions";
import {
    ORGANIZATION_CREATE,
    ORGANIZATION_DELETE,
    ORGANIZATION_GET,
    ORGANIZATION_LIST,
    ORGANIZATION_UPDATE
} from "./constant";

export function* getOrganizationList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/organization`,
            payload
        );
        yield put(organizationListSuccess(response?.data));

    } catch (e) {
        yield put(organizationListFailure(e.response?.data?.message));
    }
}

//create
export function* createOrganization({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/organization`,
            payload
        );
        yield put(organizationCreateSuccess(response?.data));

    } catch (e) {
        yield put(organizationCreateFailure(e.response?.data?.message));
    }
}

//gte by id
export function* getOrganization({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/organization/${payload.id}`,
            payload
        );
        yield put(organizationGetSuccess(response?.data));

    } catch (e) {
        yield put(organizationGetFailure(e.response?.data?.message));
    }
}

//update
export function* updateOrganization({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .post, `/v1/super-admin/organization/${payload.id}?_method=put`,
            payload.formData
        );
        yield put(organizationUpdateSuccess(response?.data));

    } catch (e) {
        yield put(organizationUpdateFailure(e.response?.data?.message));
    }
}

//delete
export function* deleteOrganization({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/super-admin/organization/${payload.id}`,
            payload
        );
        yield put(organizationDeleteSuccess(response?.data));

    } catch (e) {
        yield put(organizationDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(ORGANIZATION_LIST, getOrganizationList);
}

export function* createFlow() {
    yield takeLatest(ORGANIZATION_CREATE, createOrganization);
}

export function* getFlow() {
    yield takeLatest(ORGANIZATION_GET, getOrganization);
}

export function* updateFlow() {
    yield takeLatest(ORGANIZATION_UPDATE, updateOrganization);
}

export function* deleteFlow() {
    yield takeLatest(ORGANIZATION_DELETE, deleteOrganization);
}

export default function* OrganizationSaga() {
    yield all([
        listFlow(),
        createFlow(),
        getFlow(),
        updateFlow(),
        deleteFlow(),
    ]);
}
