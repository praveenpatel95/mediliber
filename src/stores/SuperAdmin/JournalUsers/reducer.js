import * as types from "./constant";

export const initialState = {
    isJournalUsersFetching: false,
    isJournalUsersFetchingError: null,
    accessUsers: [],

    isJournalUserCreating: false,
    isJournalUserCreatingError: null,

    isJournalUserDeleting: false,
    isJournalUserDeletingError: null,

    isJournalUserCreated: false,
    isJournalUserDeleted: false
}

const JournalUserReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.JOURNAL_USERS:
            return {
                ...state,
                isJournalUsersFetching: true,
                isJournalUsersFetchingError: null,
                isJournalUserCreated: false,
                isJournalDeleted: false
            }
        case types.JOURNAL_USERS_SUCCESS:
            return {
                ...state,
                isJournalUsersFetching: false,
                isJournalUsersFetchingError: null,
                accessUsers: action.payload
            }
        case types.JOURNAL_USERS_FAILURE:
            return {
                ...state,
                isJournalUsersFetching: false,
                isJournalUsersFetchingError: action.error,
            }

        //create
        case types.JOURNAL_USER_CREATE:
            return {
                ...state,
                isJournalUserCreating: true,
                isJournalUserCreatingError: null,
                isJournalUserCreated: false,
            }
        case types.JOURNAL_USER_CREATE_SUCCESS:
            return {
                ...state,
                isJournalUserCreating: false,
                isJournalUserCreatingError: null,
                isJournalUserCreated: true
            }
        case types.JOURNAL_USER_CREATE_FAILURE:
            return {
                ...state,
                isJournalUserCreating: false,
                isJournalUserCreatingError: action.error,
            }


        //DELETE
        case types.JOURNAL_USER_DELETE:
            return {
                ...state,
                isJournalUserDeleting: true,
                isJournalUserDeletingError: null,
                isJournalUserDeleted: false,
            }
        case types.JOURNAL_USER_DELETE_SUCCESS:
            return {
                ...state,
                isJournalUserDeleting: false,
                isJournalUserDeletingError: null,
                isJournalUserDeleted: true
            }
        case types.JOURNAL_USER_DELETE_FAILURE:
            return {
                ...state,
                isJournalUserDeleting: false,
                isJournalUserDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default JournalUserReducer;