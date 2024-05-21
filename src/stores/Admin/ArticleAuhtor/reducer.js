import * as types from "./constant";

export const initialState = {
    isArticleDeleting: false,
    isArticleDeletingError: null,
}

const JournalArticleAuthorReducer = (state = initialState, action) => {
    switch (action.type) {
        // delete
        case types.ADMIN_ARTICLE_AUTHOR_DELETE:
            return {
                ...state,
                isArticleDeleting: true,
                isArticleDeletingError: null,
                isArticleUpdated: false,
            }
        case types.ADMIN_ARTICLE_AUTHOR_DELETE_SUCCESS:
            return {
                ...state,
                isArticleDeleting: false,
                isArticleUpdated: true
            }

        case types.ADMIN_ARTICLE_AUTHOR_DELETE_FAILURE:
            return {
                ...state,
                isArticleDeleting: false,
                isArticleDeletingError: action.error,
            }

        default:
            return state;
    }
};
export default JournalArticleAuthorReducer;