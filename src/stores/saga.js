import { all } from "redux-saga/effects";
import AuthSaga from "./Auth/saga";
import JournalCategorySaga from "./JournalCategory/saga";
import JournalSaga from "./Journals/saga";
import JournalUserSaga from "./JournalUsers/saga";

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        JournalCategorySaga(),
        JournalSaga(),
        JournalUserSaga(),
    ]);
}
