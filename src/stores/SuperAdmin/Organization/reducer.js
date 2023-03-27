import * as types from "./constant";

export const initialState = {
    isOrganizationListFetching: false,
    isOrganizationListFetchingError: null,
    organizationList: [],

    isOrganizationCreating: false,
    isOrganizationCreatingError: null,

    isOrganizationGetFetching: false,
    isOrganizationGetFetchingError: false,
    organization: {},

    isOrganizationDeleting: false,
    isOrganizationDeletingError: null,

    isOrganizationCreated: false,
    isOrganizationDeleted: false
}

const OrganizationReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.ORGANIZATION_LIST:
            return {
                ...state,
                isOrganizationListFetching: true,
                isOrganizationListFetchingError: null,
                isOrganizationCreated: false,
                isOrganizationDeleted: false,
                organization:{}
            }
        case types.ORGANIZATION_LIST_SUCCESS:
            return {
                ...state,
                isOrganizationListFetching: false,
                isOrganizationListFetchingError: null,
                organizationList: action.payload
            }
        case types.ORGANIZATION_LIST_FAILURE:
            return {
                ...state,
                isOrganizationListFetching: false,
                isOrganizationListFetchingError: action.error,
            }

        //create
        case types.ORGANIZATION_CREATE:
            return {
                ...state,
                isOrganizationCreating: true,
                isOrganizationCreatingError: null,
                isOrganizationCreated: false,
            }
        case types.ORGANIZATION_CREATE_SUCCESS:
            return {
                ...state,
                isOrganizationCreating: false,
                isOrganizationCreatingError: null,
                isOrganizationCreated: true
            }
        case types.ORGANIZATION_CREATE_FAILURE:
            return {
                ...state,
                isOrganizationCreating: false,
                isOrganizationCreatingError: action.error,
            }

        //GET BY UD
        case types.ORGANIZATION_GET:
            return {
                ...state,
                isOrganizationGetFetching: true,
                isOrganizationGetFetchingError: null,
                organization: {}
            }
        case types.ORGANIZATION_GET_SUCCESS:
            return {
                ...state,
                isOrganizationGetFetching: false,
                isOrganizationGetFetchingError: null,
                organization: action.payload
            }
        case types.ORGANIZATION_GET_FAILURE:
            return {
                ...state,
                isOrganizationGetFetching: false,
                isOrganizationGetFetchingError: action.error,
            }

        //update
        case types.ORGANIZATION_UPDATE:
            return {
                ...state,
                isOrganizationCreating: true,
                isOrganizationCreatingError: null,
                isOrganizationCreated: false,
            }
        case types.ORGANIZATION_UPDATE_SUCCESS:
            return {
                ...state,
                isOrganizationCreating: false,
                isOrganizationCreatingError: null,
                isOrganizationCreated: true
            }
        case types.ORGANIZATION_UPDATE_FAILURE:
            return {
                ...state,
                isOrganizationCreating: false,
                isOrganizationCreatingError: action.error,
            }

        //DELETE
        case types.ORGANIZATION_DELETE:
            return {
                ...state,
                isOrganizationDeleting: true,
                isOrganizationDeletingError: null,
                isOrganizationDeleted: false,
            }
        case types.ORGANIZATION_DELETE_SUCCESS:
            return {
                ...state,
                isOrganizationDeleting: false,
                isOrganizationDeletingError: null,
                isOrganizationDeleted: true
            }
        case types.ORGANIZATION_DELETE_FAILURE:
            return {
                ...state,
                isOrganizationDeleting: false,
                isOrganizationDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default OrganizationReducer;