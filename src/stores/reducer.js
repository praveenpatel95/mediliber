import {combineReducers} from "redux";
import AuthReducer from "./Auth/reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import JournalCategoryReducer from "./SuperAdmin/JournalCategory/reducer";
import JournalReducer from "./SuperAdmin/Journals/reducer";
import JournalUserReducer from "./SuperAdmin/JournalUsers/reducer";
import AdminJournalReducer from "./Admin/Journal/reducer";
import AdminJournalPageReducer from "./Admin/JournalPage/reducer";
import AdminEditorialBoardReducer from "./Admin/EditorialBoard/reducer";
import AdminReviewerBoardReducer from "./Admin/ReviewerBoard/reducer";
import IndexingReducer from "./SuperAdmin/Indexing/reducer";
import CommonJournalReducer from "./Common/Journal/reducer";
import WebIndexingReducer from "./Common/Indexing/reducer";
import WebpageReducer from "./SuperAdmin/WebPage/reducer";
import OtherPageReducer from "./SuperAdmin/OtherlPage/reducer";
import WebPageReducer from "./Common/Pages/reducer";
import OrganizationReducer from "./SuperAdmin/Organization/reducer";
import WebOrganizationReducer from "./Common/Organization/reducer";
import WebSettingReducer from "./Common/WebSetting/reducer";
import WebJournalCategoryReducer from "./Common/JournalCategory/reducer";


const authPersistConfig = {
    key: "AuthReducer",
    storage: storage,
    blacklist: ["isLoggingIn", "isAuthenticating", "isLoggingOut"],
};

const rootReducer = combineReducers({
            AuthReducer: persistReducer(authPersistConfig, AuthReducer),
            JournalCategoryReducer: JournalCategoryReducer,
            JournalReducer: JournalReducer,
            JournalUserReducer: JournalUserReducer,
            AdminJournalReducer: AdminJournalReducer,
            WebJournalCategoryReducer: WebJournalCategoryReducer,
            AdminJournalPageReducer: AdminJournalPageReducer,
            AdminEditorialBoardReducer: AdminEditorialBoardReducer,
            AdminReviewerBoardReducer: AdminReviewerBoardReducer,
            IndexingReducer: IndexingReducer,
            CommonJournalReducer: CommonJournalReducer,
            WebIndexingReducer: WebIndexingReducer,
            WebpageReducer: WebpageReducer,
            OtherPageReducer: OtherPageReducer,
            WebPageReducer: WebPageReducer,
            OrganizationReducer: OrganizationReducer,
            WebOrganizationReducer: WebOrganizationReducer,
            WebSettingReducer: WebSettingReducer,
        }
    )
;

export default rootReducer;
