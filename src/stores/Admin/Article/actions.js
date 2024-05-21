import * as types from './constant'

//Create article
export const articleAdminCreate = (payload) => ({
    type:types.ADMIN_ARTICLE_CREATE,
    payload
});

export const articleAdminCreateSuccess = (payload) => ({
    type:types.ADMIN_ARTICLE_CREATE_SUCCESS,
    payload
});


export const articleAdminCreateFailure = (error) => ({
    type:types.ADMIN_ARTICLE_CREATE_FAILURE,
    error
});

//Delete article
export const articleAdminDelete = (payload) => ({
    type:types.ADMIN_ARTICLE_DELETE,
    payload
});

export const articleAdminDeleteSuccess = (payload) => ({
    type:types.ADMIN_ARTICLE_DELETE_SUCCESS,
    payload
});


export const articleAdminDeleteFailure = (error) => ({
    type:types.ADMIN_ARTICLE_DELETE_FAILURE,
    error
});


//GET LIST
export const getJournalArticleList = (payload) => ({
    type:types.JOURNAL_ARTICLE_LIST,
    payload
});

export const getJournalArticleListSuccess = (payload) => ({
    type:types.JOURNAL_ARTICLE_LIST_SUCCESS,
    payload
});


export const getJournalArticleListFailure = (error) => ({
    type:types.JOURNAL_ARTICLE_LIST_FAILURE,
    error
});


//GET DETAIL
export const getJournalArticleDetail = (payload) => ({
    type:types.JOURNAL_ARTICLE_DETAIL,
    payload
});

export const getJournalArticleDetailSuccess = (payload) => ({
    type:types.JOURNAL_ARTICLE_DETAIL_SUCCESS,
    payload
});


export const getJournalArticleDetailFailure = (error) => ({
    type:types.JOURNAL_ARTICLE_DETAIL_FAILURE,
    error
});

//UPDATE STATUS
export const updateJournalArticleStatus = (payload) => ({
    type:types.JOURNAL_ARTICLE_UPDATE_STATUS,
    payload
});

export const updateJournalArticleStatusSuccess = (payload) => ({
    type:types.JOURNAL_ARTICLE_UPDATE_STATUS_SUCCESS,
    payload
});


export const updateJournalArticleStatusFailure = (error) => ({
    type:types.JOURNAL_ARTICLE_UPDATE_STATUS_FAILURE,
    error
});

//Publish article
export const articlePublishCreate = (payload) => ({
    type:types.ARTICLE_PUBLISH_CREATE,
    payload
});

export const articlePublishCreateSuccess = (payload) => ({
    type:types.ARTICLE_PUBLISH_CREATE_SUCCESS,
    payload
});

export const articlePublishCreateFailure = (error) => ({
    type:types.ARTICLE_PUBLISH_CREATE_FAILURE,
    error
});

//Publish article UPDATE
export const articlePublishUpdate = (payload) => ({
    type:types.ARTICLE_PUBLISH_UPDATE,
    payload
});

export const articlePublishUpdateSuccess = (payload) => ({
    type:types.ARTICLE_PUBLISH_UPDATE_SUCCESS,
    payload
});

export const articlePublishUpdateFailure = (error) => ({
    type:types.ARTICLE_PUBLISH_UPDATE_FAILURE,
    error
});

//Upload File
export const getArticleFileUpload = (payload) => ({
    type:types.GET_ARTICLE_FILE_UPLOAD,
    payload
});

export const getArticleFileUploadSuccess = (payload) => ({
    type:types.GET_ARTICLE_FILE_UPLOAD_SUCCESS,
    payload
});

export const getArticleFileUploadFailure = (error) => ({
    type:types.GET_ARTICLE_FILE_UPLOAD_FAILURE,
    error
});

//Upload File
export const articleFileUpload = (payload) => ({
    type:types.ARTICLE_FILE_UPLOAD,
    payload
});

export const articleFileUploadSuccess = (payload) => ({
    type:types.ARTICLE_FILE_UPLOAD_SUCCESS,
    payload
});

export const articleFileUploadFailure = (error) => ({
    type:types.ARTICLE_FILE_UPLOAD_FAILURE,
    error
});

//Upload File DELETE
export const articleFileUploadDelete = (payload) => ({
    type:types.ARTICLE_FILE_UPLOAD_DELETE,
    payload
});

export const articleFileUploadDeleteSuccess = (payload) => ({
    type:types.ARTICLE_FILE_UPLOAD_DELETE_SUCCESS,
    payload
});

export const articleFileUploadDeleteFailure = (error) => ({
    type:types.ARTICLE_FILE_UPLOAD_DELETE_FAILURE,
    error
});

