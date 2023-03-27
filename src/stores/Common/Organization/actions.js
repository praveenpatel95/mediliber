import * as types from './constant'

//GET LIST
export const getOrganizationList = (payload) => ({
    type:types.GET_ORGANIZATION_LIST,
    payload
});

export const getOrganizationListSuccess = (payload) => ({
    type:types.GET_ORGANIZATION_LIST_SUCCESS,
    payload
});


export const getOrganizationListFailure = (error) => ({
    type:types.GET_ORGANIZATION_LIST_FAILURE,
    error
});
