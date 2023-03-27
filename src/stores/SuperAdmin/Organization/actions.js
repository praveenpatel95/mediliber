import * as types from './constant'

//GET LIST
export const organizationList = (payload) => ({
    type:types.ORGANIZATION_LIST,
    payload
});

export const organizationListSuccess = (payload) => ({
    type:types.ORGANIZATION_LIST_SUCCESS,
    payload
});


export const organizationListFailure = (error) => ({
    type:types.ORGANIZATION_LIST_FAILURE,
    error
});

//CREATE
export const organizationCreate = (payload) => ({
    type:types.ORGANIZATION_CREATE,
    payload
});

export const organizationCreateSuccess = (payload) => ({
    type:types.ORGANIZATION_CREATE_SUCCESS,
    payload
});


export const organizationCreateFailure = (error) => ({
    type:types.ORGANIZATION_CREATE_FAILURE,
    error
});

//GET BY ID
export const organizationGet = (payload) => ({
    type:types.ORGANIZATION_GET,
    payload
});

export const organizationGetSuccess = (payload) => ({
    type:types.ORGANIZATION_GET_SUCCESS,
    payload
});


export const organizationGetFailure = (error) => ({
    type:types.ORGANIZATION_GET_FAILURE,
    error
});

//UPDATE BY ID
export const organizationUpdate = (payload) => ({
    type:types.ORGANIZATION_UPDATE,
    payload
});

export const organizationUpdateSuccess = (payload) => ({
    type:types.ORGANIZATION_UPDATE_SUCCESS,
    payload
});


export const organizationUpdateFailure = (error) => ({
    type:types.ORGANIZATION_UPDATE_FAILURE,
    error
});

//DELETE BY ID
export const organizationDelete = (payload) => ({
    type:types.ORGANIZATION_DELETE,
    payload
});

export const organizationDeleteSuccess = (payload) => ({
    type:types.ORGANIZATION_DELETE_SUCCESS,
    payload
});


export const organizationDeleteFailure = (error) => ({
    type:types.ORGANIZATION_DELETE_FAILURE,
    error
});