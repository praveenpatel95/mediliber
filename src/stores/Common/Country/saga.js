
import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getCountryListFailure,
    getCountryListSuccess

} from "./actions";
import {
    GET_COUNTRY_LIST,
} from "./constant";
import api from "../../../utils/api";

export function* getAll({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `v1/countries`,
            payload
        );
        yield put(getCountryListSuccess(response?.data));

    } catch (e) {
        yield put(getCountryListFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(GET_COUNTRY_LIST, getAll);
}


export default function* CountrySaga() {
    yield all([
        listFlow(),
    ]);
}
