import * as types from "./constant";

export const initialState = {
    isJournalArticleListFetching: false,
    isJournalArticleListFetchingError: null,
    articles: [],

    isJournalArticleFetching: false,
    isJournalArticleFetchingError: null,
    article: {},

    isArticleFileDetailFetching: false,
    isArticleFileDetailFetchingError: null,
    articleFileDetail: {},
}

const WebJournalArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.WEB_JOURNAL_ARTICLE_LIST:
            return {
                ...state,
                isJournalArticleListFetching: true,
                isJournalArticleListFetchingError: null,
                articles: []
            }
        case types.WEB_JOURNAL_ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                isJournalArticleListFetching: false,
                articles: action.payload
            }
        case types.WEB_JOURNAL_ARTICLE_LIST_FAILURE:
            return {
                ...state,
                isJournalArticleListFetching: false,
                isJournalArticleListFetchingError: action.error,
            }

            //get by id
        case types.WEB_JOURNAL_ARTICLE_DETAIL:
            return {
                ...state,
                isJournalArticleFetching: true,
                isJournalArticleFetchingError: null,
                articles: {}
            }
        case types.WEB_JOURNAL_ARTICLE_DETAIL_SUCCESS:
            return {
                ...state,
                isJournalArticleFetching: false,
                article: action.payload
            }
        case types.WEB_JOURNAL_ARTICLE_DETAIL_FAILURE:
            return {
                ...state,
                isJournalArticleFetching: false,
                isJournalArticleFetchingError: action.error,
            }

        //get file detail by id
        case types.WEB_ARTICLE_FILE_DETAIL:
            return {
                ...state,
                isArticleFileDetailFetching: true,
                isArticleFileDetailFetchingError: null,
                articleFileDetail: {}
            }
        case types.WEB_ARTICLE_FILE_DETAIL_SUCCESS:
            return {
                ...state,
                isArticleFileDetailFetching: false,
                articleFileDetail: action.payload
            }
        case types.WEB_ARTICLE_FILE_DETAIL_FAILURE:
            return {
                ...state,
                isArticleFileDetailFetching: false,
                isArticleFileDetailFetchingError: action.error,
            }

        default:
            return state;
    }
};
export default WebJournalArticleReducer;