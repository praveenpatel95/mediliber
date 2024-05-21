import * as types from "./constant";

export const initialState = {
    isContactEnquiryListFetching: false,
    isContactEnquiryListFetchingError: null,
    contactEnquiries: [],

    isContactEnquiryDeleting: false,
    isContactEnquiryDeletingError: null,

    isContactEnquiryDeleted: false

}

const ContactEnquiryReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.CONTACT_ENQUIRY_LIST:
            return {
                ...state,
                isContactEnquiryListFetching: true,
                isContactEnquiryListFetchingError: null,
                contactEnquiries:[]
            }
        case types.CONTACT_ENQUIRY_LIST_SUCCESS:
            return {
                ...state,
                isContactEnquiryListFetching: false,
                isContactEnquiryListFetchingError: null,
                contactEnquiries: action.payload
            }
        case types.CONTACT_ENQUIRY_LIST_FAILURE:
            return {
                ...state,
                isContactEnquiryListFetching: false,
                isContactEnquiryListFetchingError: action.error,
            }

        //DELETE
        case types.CONTACT_ENQUIRY_DELETE:
            return {
                ...state,
                isContactEnquiryDeleting: true,
                isContactEnquiryDeletingError: null,
                isContactEnquiryDeleted: false,
            }
        case types.CONTACT_ENQUIRY_DELETE_SUCCESS:
            return {
                ...state,
                isContactEnquiryDeleting: false,
                isContactEnquiryDeletingError: null,
                isContactEnquiryDeleted: true
            }
        case types.CONTACT_ENQUIRY_DELETE_FAILURE:
            return {
                ...state,
                isContactEnquiryDeleting: false,
                isContactEnquiryDeletingError: action.error,
            }
        default:
            return state;
    }
};
export default ContactEnquiryReducer;