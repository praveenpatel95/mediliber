import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    articleAuthorAdminDeleteFailure,
    articleAuthorAdminDeleteSuccess

} from "./actions";
import {
    ADMIN_ARTICLE_AUTHOR_DELETE

} from "./constant";

export function* articleAuthorDelete({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/admin/article-author/${payload}/delete`,
            payload
        );
        yield put(articleAuthorAdminDeleteSuccess(response?.data));

    } catch (e) {
        yield put(articleAuthorAdminDeleteFailure(e.response?.data?.message));
    }
}

export function* articleAuthorDeleteFlow() {
    yield takeLatest(ADMIN_ARTICLE_AUTHOR_DELETE, articleAuthorDelete);
}

export default function* JournalArticleAuthorSaga() {
    yield all([
        articleAuthorDeleteFlow(),
    ]);
}
