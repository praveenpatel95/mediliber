import * as types from "./constant";

export const initialState = {
    isArticleTypeFetching: false,
    isArticleTypeFetchingError: null,
    articleTypeList: [],

}

const ArticleTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.GET_ARTICLE_TYPE:
            return {
                ...state,
                isArticleTypeFetching: true,
                isArticleTypeFetchingError: null,
            }
        case types.GET_ARTICLE_TYPE_SUCCESS:
            return {
                ...state,
                isArticleTypeFetching: false,
                articleTypeList: action.payload
            }
        case types.GET_ARTICLE_TYPE_FAILURE:
            return {
                ...state,
                isArticleTypeFetching: false,
                isArticleTypeFetchingError: action.error,
            }

        default:
            return state;
    }
};
export default ArticleTypeReducer;