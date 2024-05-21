import * as types from './constant'

//Delete
export const articleAuthorAdminDelete = (payload) => ({
    type:types.ADMIN_ARTICLE_AUTHOR_DELETE,
    payload
});

export const articleAuthorAdminDeleteSuccess = (payload) => ({
    type:types.ADMIN_ARTICLE_AUTHOR_DELETE_SUCCESS,
    payload
});


export const articleAuthorAdminDeleteFailure = (error) => ({
    type:types.ADMIN_ARTICLE_AUTHOR_DELETE_FAILURE,
    error
});
