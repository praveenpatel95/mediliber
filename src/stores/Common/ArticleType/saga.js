
import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    getArticleTypeFailure,
    getArticleTypeSuccess,
    getCountryListFailure,
    getCountryListSuccess

} from "./actions";
import {
    GET_ARTICLE_TYPE,
} from "./constant";
import api from "../../../utils/api";

export function* getAll({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `v1/article_types`,
            payload
        );
        yield put(getArticleTypeSuccess(response?.data));

    } catch (e) {
        yield put(getArticleTypeFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(GET_ARTICLE_TYPE, getAll);
}


export default function* ArticleTypeSaga() {
    yield all([
        listFlow(),
    ]);
}
