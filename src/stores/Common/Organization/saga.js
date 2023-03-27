import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getOrganizationListFailure,
    getOrganizationListSuccess,
} from "./actions";
import {
    GET_ORGANIZATION_LIST,
} from "./constant";

export function* getAll({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/organization/recent`,
            payload
        );
        yield put(getOrganizationListSuccess(response?.data));

    } catch (e) {
        yield put(getOrganizationListFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(GET_ORGANIZATION_LIST, getAll);
}

export default function* WebOrganizationSaga() {
    yield all([
        listFlow(),
    ]);
}
