import React, {useEffect} from "react";
import JournalMenu from "../Common/JournalMenu";
import {Outlet, useParams} from "react-router-dom";
import JournalHead from "./JournalHead";
import {connect, useSelector} from "react-redux";
import {getJournalDetailBySlug} from "../../../../stores/Common/Journal/actions";
import {compose} from "redux";

function JournalHeader({getJournalDetail}) {

    let {journalSlug} = useParams();

    useEffect(() => {
        if (journalSlug) {
            getJournalDetail(journalSlug);
        }

    }, [journalSlug]);

    const {journalDetail} =
        useSelector(state => state?.CommonJournalReducer);

    return (
        <>
            <JournalHead journalName={journalDetail?.name}/>
            <JournalMenu
                journalSlug={journalSlug}
            />
            <Outlet/>
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournalDetail: (slug) => dispatch(getJournalDetailBySlug(slug))
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalHeader);