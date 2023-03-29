import {all} from "redux-saga/effects";
import AuthSaga from "./Auth/saga";
import JournalCategorySaga from "./SuperAdmin/JournalCategory/saga";
import JournalSaga from "./SuperAdmin/Journals/saga";
import JournalUserSaga from "./SuperAdmin/JournalUsers/saga";
import AdminJournalSaga from "./Admin/Journal/saga";
import AdminJournalPageSaga from "./Admin/JournalPage/saga";
import EditorialBoardSaga from "./Admin/EditorialBoard/saga";
import ReviewerBoardSaga from "./Admin/ReviewerBoard/saga";
import IndexingSaga from "./SuperAdmin/Indexing/saga";
import WebJournalSaga from "./Common/Journal/saga";
import WebIndexingSaga from "./Common/Indexing/saga";
import WebpageSaga from "./SuperAdmin/WebPage/saga";
import OtherPageSaga from "./SuperAdmin/OtherlPage/saga";
import WebPagesSaga from "./Common/Pages/saga";
import OrganizationSaga from "./SuperAdmin/Organization/saga";
import WebOrganizationSaga from "./Common/Organization/saga";
import WebSettingSaga from "./Common/WebSetting/saga";
import WebJournalCategorySaga from "./Common/JournalCategory/saga";

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
        WebpageSaga(),
        OtherPageSaga(),
        WebPagesSaga(),
        OrganizationSaga(),
        WebOrganizationSaga(),
        WebSettingSaga(),
    ]);
}
