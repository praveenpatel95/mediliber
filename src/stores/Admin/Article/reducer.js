import * as types from "./constant";

export const initialState = {
    isJournalArticleListFetching: false,
    isJournalArticleListFetchingError: null,
    articles: [],

    isJournalArticleDetailFetching: false,
    isJournalArticleDetailFetchingError: null,
    article: {},

    isArticleCreating: false,
    isArticleCreatingError: null,

    isStatusUpdating: false,
    isStatusUpdatingError: null,
    isArticleUpdated: false,

    isArticlePublishCreating: false,
    isArticlePublishCreatingError: null,

    isArticleDeleting: false,
    isArticleDeletingError: null,

    isArticlePublishedUpdating: false,
    isArticlePublishedUpdatingError: null,

    isArticleFileUploading: false,
    isArticleFileUploadingError: null,
    articleFiles: [],

    isArticleFileDeleting: false,
    isArticleFileDeletingError: null,

    isArticleFileFetching: false,
    isArticleFileFetchingError: null,
}

const JournalArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.JOURNAL_ARTICLE_LIST:
            return {
                ...state,
                isJournalArticleListFetching: true,
                isJournalArticleListFetchingError: null,
                articles: [],
                isArticleUpdated: false,
                isArticleCreated: false,
            }
        case types.JOURNAL_ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                isJournalArticleListFetching: false,
                isJournalArticleListFetchingError: null,
                articles: action.payload
            }
        case types.JOURNAL_ARTICLE_LIST_FAILURE:
            return {
                ...state,
                isJournalArticleListFetching: false,
                isJournalArticleListFetchingError: action.error,
            }

        //get by id
        case types.JOURNAL_ARTICLE_DETAIL:
            return {
                ...state,
                isJournalArticleDetailFetching: true,
                isJournalArticleDetailFetchingError: null,
                article: {},
            }
        case types.JOURNAL_ARTICLE_DETAIL_SUCCESS:
            return {
                ...state,
                isJournalArticleDetailFetching: false,
                article: action.payload,
            }
        case types.JOURNAL_ARTICLE_DETAIL_FAILURE:
            return {
                ...state,
                isJournalArticleDetailFetching: false,
                isJournalArticleDetailFetchingError: action.error,
            }

        //UPDATE STATUS
        case types.JOURNAL_ARTICLE_UPDATE_STATUS:
            return {
                ...state,
                isStatusUpdating: true,
                isStatusUpdatingError: null,
            }
        case types.JOURNAL_ARTICLE_UPDATE_STATUS_SUCCESS:
            return {
                ...state,
                isStatusUpdating: false,
                isStatusUpdatingError: null,
                isArticleUpdated: true,
            }
        case types.JOURNAL_ARTICLE_UPDATE_STATUS_FAILURE:
            return {
                ...state,
                isStatusUpdating: false,
                isStatusUpdatingError: action.error,
            }



        //article create
        case types.ADMIN_ARTICLE_CREATE:
            return {
                ...state,
                isArticleCreating: true,
                isArticleCreatingError: null,
                isArticleUpdated: false,
            }
        case types.ADMIN_ARTICLE_CREATE_SUCCESS:
            return {
                ...state,
                isArticleCreating: false,
                isArticleUpdated: true
            }

        case types.ADMIN_ARTICLE_CREATE_FAILURE:
            return {
                ...state,
                isArticleCreating: false,
                isArticleCreatingError: action.error,
            }

        //article delete
        case types.ADMIN_ARTICLE_DELETE:
            return {
                ...state,
                isArticleDeleting: true,
                isArticleDeletingError: null,
                isArticleUpdated: false,
            }
        case types.ADMIN_ARTICLE_DELETE_SUCCESS:
            return {
                ...state,
                isArticleDeleting: false,
                isArticleUpdated: true
            }

        case types.ADMIN_ARTICLE_DELETE_FAILURE:
            return {
                ...state,
                isArticleDeleting: false,
                isArticleDeletingError: action.error,
            }

        //article publish create
        case types.ARTICLE_PUBLISH_CREATE:
            return {
                ...state,
                isArticlePublishCreating: true,
                isArticlePublishCreatingError: null,
                isArticleUpdated: false,
            }
        case types.ARTICLE_PUBLISH_CREATE_SUCCESS:
            return {
                ...state,
                isArticlePublishCreating: false,
                isArticlePublishCreatingError: null,
                isArticleUpdated: true
            }

        case types.ARTICLE_PUBLISH_CREATE_FAILURE:
            return {
                ...state,
                isArticlePublishCreating: false,
                isArticlePublishCreatingError: action.error,
            }

        //article publish update
        case types.ARTICLE_PUBLISH_UPDATE:
            return {
                ...state,
                isArticlePublishedUpdating: true,
                isArticlePublishedUpdatingError: null,
                isArticleUpdated: false,
            }
        case types.ARTICLE_PUBLISH_UPDATE_SUCCESS:
            return {
                ...state,
                isArticlePublishedUpdating: false,
                isArticlePublishedUpdatingError: null,
                isArticleUpdated: true
            }

        case types.ARTICLE_PUBLISH_UPDATE_FAILURE:
            return {
                ...state,
                isArticlePublishedUpdating: false,
                isArticlePublishedUpdatingError: action.error,
            }

        //get article file upload
        case types.GET_ARTICLE_FILE_UPLOAD:
            return {
                ...state,
                isArticleFileFetching: true,
                isArticleFileFetchingError: null,
            }
        case types.GET_ARTICLE_FILE_UPLOAD_SUCCESS:
            return {
                ...state,
                isArticleFileFetching: false,
                isArticleFileFetchingError: null,
                articleFiles: action.payload
            }

        case types.GET_ARTICLE_FILE_UPLOAD_FAILURE:
            return {
                ...state,
                isArticleFileFetching: false,
                isArticleFileFetchingError: action.error,
            }

        //article file upload
        case types.ARTICLE_FILE_UPLOAD:
            return {
                ...state,
                isArticleFileUploading: true,
                isArticleFileUploadingError: null,
            }
        case types.ARTICLE_FILE_UPLOAD_SUCCESS:
            return {
                ...state,
                isArticleFileUploading: false,
                isArticleFileUploadingError: null,
                articleFiles: action.payload
            }

        case types.ARTICLE_FILE_UPLOAD_FAILURE:
            return {
                ...state,
                isArticleFileUploading: false,
                isArticleFileUploadingError: action.error,
            }

        //article file upload delete
        case types.ARTICLE_FILE_UPLOAD_DELETE:
            return {
                ...state,
                isArticleFileDeleting: true,
                isArticleFileDeletingError: null,
            }
        case types.ARTICLE_FILE_UPLOAD_DELETE_SUCCESS:
            return {
                ...state,
                isArticleFileDeleting: false,
                isArticleFileDeletingError: null,
                articleFiles: action.payload
            }

        case types.ARTICLE_FILE_UPLOAD_DELETE_FAILURE:
            return {
                ...state,
                isArticleFileDeleting: false,
                isArticleFileDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default JournalArticleReducer;