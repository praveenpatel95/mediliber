import api from "../../../utils/api";

import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import {
    contactEnquiryDeleteFailure,
    contactEnquiryDeleteSuccess,
    contactEnquiryListFailure,
    contactEnquiryListSuccess,
} from "./actions";
import {
    CONTACT_ENQUIRY_DELETE,
    CONTACT_ENQUIRY_LIST

} from "./constant";

export function* getList({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .get, `/v1/super-admin/contact/list`,
            payload
        );
        yield put(contactEnquiryListSuccess(response?.data));

    } catch (e) {
        yield put(contactEnquiryListFailure(e.response?.data?.message));
    }
}

//delete
export function* deleteById({payload}) {
    const token = localStorage.getItem("token");
    try {
        const response = yield call(api(token, null)
                .delete, `/v1/super-admin/contact/${payload.id}/delete`,
            payload
        );
        yield put(contactEnquiryDeleteSuccess(response?.data));

    } catch (e) {
        yield put(contactEnquiryDeleteFailure(e.response?.data?.message));
    }
}

/**
 *
 * Saga flow
 */

export function* listFlow() {
    yield takeLatest(CONTACT_ENQUIRY_LIST, getList);
}

export function* deleteFlow() {
    yield takeLatest(CONTACT_ENQUIRY_DELETE, deleteById);
}

export default function* ContactEnquirySaga() {
    yield all([
        listFlow(),
        deleteFlow(),
    ]);
}
