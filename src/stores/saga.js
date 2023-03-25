import { all } from "redux-saga/effects";
import AuthSaga from "./Auth/saga";
import JournalCategorySaga from "./SuperAdmin/JournalCategory/saga";
import JournalSaga from "./SuperAdmin/Journals/saga";
import JournalUserSaga from "./SuperAdmin/JournalUsers/saga";
import AdminJournalSaga from "./Admin/Journal/saga";
import WebJournalCategorySaga from "./Common/Indexing/saga";
import AdminJournalPageSaga from "./Admin/JournalPage/saga";
import EditorialBoardSaga from "./Admin/EditorialBoard/saga";
import ReviewerBoardSaga from "./Admin/ReviewerBoard/saga";
import IndexingSaga from "./SuperAdmin/Indexing/saga";
import WebJournalSaga from "./Common/Journal/saga";
import WebIndexingSaga from "./Common/Indexing/saga";

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        JournalCategorySaga(),
        JournalSaga(),
        JournalUserSaga(),
        AdminJournalSaga(),
        WebJournalCategorySaga(),
        AdminJournalPageSaga(),
        EditorialBoardSaga(),
        ReviewerBoardSaga(),
        IndexingSaga(),
        WebJournalSaga(),
        WebIndexingSaga(),
    ]);
}
