import {combineReducers} from "redux";
import AuthReducer from "./Auth/reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import JournalCategoryReducer from "./JournalCategory/reducer";
import JournalReducer from "./Journals/reducer";
import JournalUserReducer from "./JournalUsers/reducer";


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
        }
    )
;

export default rootReducer;
