import * as types from './constant'

//GET LIST
export const getArticleType = (payload) => ({
    type:types.GET_ARTICLE_TYPE,
    payload
});

export const getArticleTypeSuccess = (payload) => ({
    type:types.GET_ARTICLE_TYPE_SUCCESS,
    payload
});


export const getArticleTypeFailure = (error) => ({
    type:types.GET_ARTICLE_TYPE_FAILURE,
    error
});
