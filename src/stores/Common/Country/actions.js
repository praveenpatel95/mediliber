import * as types from './constant'
import {GET_COUNTRY_LIST, GET_COUNTRY_LIST_FAILURE, GET_COUNTRY_LIST_SUCCESS} from "./constant";

//GET LIST
export const getCountryList = (payload) => ({
    type:types.GET_COUNTRY_LIST,
    payload
});

export const getCountryListSuccess = (payload) => ({
    type:types.GET_COUNTRY_LIST_SUCCESS,
    payload
});


export const getCountryListFailure = (error) => ({
    type:types.GET_COUNTRY_LIST_FAILURE,
    error
});
