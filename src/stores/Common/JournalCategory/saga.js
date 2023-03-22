import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    webJournalCategoryListFailure,
    webJournalCategoryListSuccess
} from "./actions";
import {
    WEB_JOURNAL_CATEGORY_LIST
} from "./constant";

export function* getJournalCategoryList({payload}) {
    try {
        const response = yield call(api(null, null)
                .get, `/v1/journal-category`,
            payload
        );
        yield put(webJournalCategoryListSuccess(response?.data));

    } catch (e) {
        yield put(webJournalCategoryListFailure(e.response?.data?.message));
    }
}


/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(WEB_JOURNAL_CATEGORY_LIST, getJournalCategoryList);
}


export default function* WebJournalCategorySaga() {
    yield all([
        listFlow(),
    ]);
}
