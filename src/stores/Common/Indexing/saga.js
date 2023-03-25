import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getIndexingListFailure,
    getIndexingListSuccess,
} from "./actions";
import {
    GET_INDEXING_LIST,
} from "./constant";

export function* getAll({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/indexing`,
            payload
        );
        yield put(getIndexingListSuccess(response?.data));

    } catch (e) {
        yield put(getIndexingListFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(GET_INDEXING_LIST, getAll);
}


export default function* WebIndexingSaga() {
    yield all([
        listFlow(),
    ]);
}
