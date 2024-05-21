import * as types from "./constant";

export const initialState = {
    isCountryListFetching: false,
    isCountryListFetchingError: null,
    CountryList: [],

}

const CountryReducer = (state = initialState, action) => {
    switch (action.type) {
        //get list
        case types.GET_COUNTRY_LIST:
            return {
                ...state,
                isCountryListFetching: true,
                isCountryListFetchingError: null,
            }
        case types.GET_COUNTRY_LIST_SUCCESS:
            return {
                ...state,
                isCountryListFetching: false,
                CountryList: action.payload
            }
        case types.GET_COUNTRY_LIST_FAILURE:
            return {
                ...state,
                isCountryListFetching: false,
                isCountryListFetchingError: action.error,
            }

        default:
            return state;
    }
};
export default CountryReducer;