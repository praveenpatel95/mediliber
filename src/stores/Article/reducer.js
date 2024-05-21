import * as types from "./constant";

export const initialState = {
    isArticleListFetching: false,
    isArticleListFetchingError: null,
    Articles: [],

    isArticleCreating: false,
    isArticleCreatingError: null,

    isArticleGetFetching: false,
    isArticleGetFetchingError: false,
    Article: {},

    isArticleDeleting: false,
    isArticleDeletingError: null,

    isArticleCreated: false,
    isArticleDeleted: false
}

const ArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.ARTICLE_LIST:
            return {
                ...state,
                isArticleListFetching: true,
                isArticleListFetchingError: null,
                isArticleCreated: false,
                isArticleDeleted: false,
                Article:{}
            }
        case types.ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                isArticleListFetching: false,
                isArticleListFetchingError: null,
                Articles: action.payload
            }
        case types.ARTICLE_LIST_FAILURE:
            return {
                ...state,
                isArticleListFetching: false,
                isArticleListFetchingError: action.error,
            }

        //create
        case types.ARTICLE_CREATE:
            return {
                ...state,
                isArticleCreating: true,
                isArticleCreatingError: null,
                isArticleCreated: false,
            }
        case types.ARTICLE_CREATE_SUCCESS:
            return {
                ...state,
                isArticleCreating: false,
                isArticleCreatingError: null,
                isArticleCreated: true
            }
        case types.ARTICLE_CREATE_FAILURE:
            return {
                ...state,
                isArticleCreating: false,
                isArticleCreatingError: action.error,
            }

        //GET BY UD
        case types.ARTICLE_GET:
            return {
                ...state,
                isArticleGetFetching: true,
                isArticleGetFetchingError: null,
                Article: {}
            }
        case types.ARTICLE_GET_SUCCESS:
            return {
                ...state,
                isArticleGetFetching: false,
                isArticleGetFetchingError: null,
                Article: action.payload
            }
        case types.ARTICLE_GET_FAILURE:
            return {
                ...state,
                isArticleGetFetching: false,
                isArticleGetFetchingError: action.error,
            }

        //update
        case types.ARTICLE_UPDATE:
            return {
                ...state,
                isArticleCreating: true,
                isArticleCreatingError: null,
                isArticleCreated: false,
            }
        case types.ARTICLE_UPDATE_SUCCESS:
            return {
                ...state,
                isArticleCreating: false,
                isArticleCreatingError: null,
                isArticleCreated: true
            }
        case types.ARTICLE_UPDATE_FAILURE:
            return {
                ...state,
                isArticleCreating: false,
                isArticleCreatingError: action.error,
            }

        //DELETE
        case types.ARTICLE_DELETE:
            return {
                ...state,
                isArticleDeleting: true,
                isArticleDeletingError: null,
                isArticleDeleted: false,
            }
        case types.ARTICLE_DELETE_SUCCESS:
            return {
                ...state,
                isArticleDeleting: false,
                isArticleDeletingError: null,
                isArticleDeleted: true
            }
        case types.ARTICLE_DELETE_FAILURE:
            return {
                ...state,
                isArticleDeleting: false,
                isArticleDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default ArticleReducer;