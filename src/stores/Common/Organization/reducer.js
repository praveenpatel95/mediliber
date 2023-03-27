import * as types from "./constant";

export const initialState = {
    isOrganizationListFetching: false,
    isOrganizationListFetchingError: null,
    organizationList: [],

}

const WebOrganizationReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.GET_ORGANIZATION_LIST:
            return {
                ...state,
                isOrganizationListFetching: true,
                isOrganizationListFetchingError: null,
            }
        case types.GET_ORGANIZATION_LIST_SUCCESS:
            return {
                ...state,
                isOrganizationListFetching: false,
                organizationList: action.payload
            }
        case types.GET_ORGANIZATION_LIST_FAILURE:
            return {
                ...state,
                isOrganizationListFetching: false,
                isOrganizationListFetchingError: action.error,
            }

        default:
            return state;
    }
};
export default WebOrganizationReducer;