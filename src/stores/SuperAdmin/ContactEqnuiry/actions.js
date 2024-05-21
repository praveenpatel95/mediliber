import * as types from './constant'

//GET LIST
export const contactEnquiryList = (payload) => ({
    type:types.CONTACT_ENQUIRY_LIST,
    payload
});

export const contactEnquiryListSuccess = (payload) => ({
    type:types.CONTACT_ENQUIRY_LIST_SUCCESS,
    payload
});

export const contactEnquiryListFailure = (payload) => ({
    type:types.CONTACT_ENQUIRY_LIST_FAILURE,
    payload
});


//DELETE BY ID
export const contactEnquiryDelete = (payload) => ({
    type:types.CONTACT_ENQUIRY_DELETE,
    payload
});

export const contactEnquiryDeleteSuccess = (payload) => ({
    type:types.CONTACT_ENQUIRY_DELETE_SUCCESS,
    payload
});


export const contactEnquiryDeleteFailure = (error) => ({
    type:types.CONTACT_ENQUIRY_DELETE_FAILURE,
    error
});