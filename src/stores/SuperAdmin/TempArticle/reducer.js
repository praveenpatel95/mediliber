import * as types from "./constant";

export const initialState = {
    isTempArticleListFetching: false,
    isTempArticleListFetchingError: null,
    tempArticles: [],

    isTempArticleCreating: false,
    isTempArticleCreatingError: null,

    isTempArticleGetFetching: false,
    isTempArticleGetFetchingError: false,
    tempArticle: {},

    isTempArticleDeleting: false,
    isTempArticleDeletingError: null,

    isTempArticleCreated: false,
    isTempArticleDeleted: false
}

const TempArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.TEMP_ARTICLE_LIST:
            return {
                ...state,
                isTempArticleListFetching: true,
                isTempArticleListFetchingError: null,
                isTempArticleCreated: false,
                isTempArticleDeleted: false,
                tempArticle:{}
            }
        case types.TEMP_ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                isTempArticleListFetching: false,
                isTempArticleListFetchingError: null,
                tempArticles: action.payload
            }
        case types.TEMP_ARTICLE_LIST_FAILURE:
            return {
                ...state,
                isTempArticleListFetching: false,
                isTempArticleListFetchingError: action.error,
            }

        //create
        case types.TEMP_ARTICLE_CREATE:
            return {
                ...state,
                isTempArticleCreating: true,
                isTempArticleCreatingError: null,
                isTempArticleCreated: false,
            }
        case types.TEMP_ARTICLE_CREATE_SUCCESS:
            return {
                ...state,
                isTempArticleCreating: false,
                isTempArticleCreatingError: null,
                isTempArticleCreated: true
            }
        case types.TEMP_ARTICLE_CREATE_FAILURE:
            return {
                ...state,
                isTempArticleCreating: false,
                isTempArticleCreatingError: action.error,
            }

        //GET BY UD
        case types.TEMP_ARTICLE_GET:
            return {
                ...state,
                isTempArticleGetFetching: true,
                isTempArticleGetFetchingError: null,
                tempArticle: {}
            }
        case types.TEMP_ARTICLE_GET_SUCCESS:
            return {
                ...state,
                isTempArticleGetFetching: false,
                isTempArticleGetFetchingError: null,
                tempArticle: action.payload
            }
        case types.TEMP_ARTICLE_GET_FAILURE:
            return {
                ...state,
                isTempArticleGetFetching: false,
                isTempArticleGetFetchingError: action.error,
            }

        //update
        case types.TEMP_ARTICLE_UPDATE:
            return {
                ...state,
                isTempArticleCreating: true,
                isTempArticleCreatingError: null,
                isTempArticleCreated: false,
            }
        case types.TEMP_ARTICLE_UPDATE_SUCCESS:
            return {
                ...state,
                isTempArticleCreating: false,
                isTempArticleCreatingError: null,
                isTempArticleCreated: true
            }
        case types.TEMP_ARTICLE_UPDATE_FAILURE:
            return {
                ...state,
                isTempArticleCreating: false,
                isTempArticleCreatingError: action.error,
            }

        //DELETE
        case types.TEMP_ARTICLE_DELETE:
            return {
                ...state,
                isTempArticleDeleting: true,
                isTempArticleDeletingError: null,
                isTempArticleDeleted: false,
            }
        case types.TEMP_ARTICLE_DELETE_SUCCESS:
            return {
                ...state,
                isTempArticleDeleting: false,
                isTempArticleDeletingError: null,
                isTempArticleDeleted: true
            }
        case types.TEMP_ARTICLE_DELETE_FAILURE:
            return {
                ...state,
                isTempArticleDeleting: false,
                isTempArticleDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default TempArticleReducer;