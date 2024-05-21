import React, {useEffect, useState} from "react";
import JournalMenu from "../Common/JournalMenu";
import {Outlet, useOutletContext, useParams} from "react-router-dom";
import JournalHead from "./JournalHead";
import {connect, useSelector} from "react-redux";
import {getJournalDetailBySlug} from "../../../../stores/Common/Journal/actions";
import {compose} from "redux";

function JournalHeader({getJournalDetail}) {
    const {setIsSticky} = useOutletContext();
    setIsSticky(false);

    let {journalSlug} = useParams();

    useEffect(() => {
        if (journalSlug) {
            getJournalDetail(journalSlug);
        }

    }, [journalSlug]);

    const {journalDetail} =
        useSelector(state => state?.CommonJournalReducer);

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);

        };
    }, []);

    if (scrollTop > 100) {
        document.body.classList.add('scrollXJournal');
    }else{
        document.body.classList.remove('scrollXJournal');
    }

    return (
        <>
            <div className="sticky-top">
                <JournalHead journalName={journalDetail?.name} journalSlug={journalSlug}/>
                <JournalMenu
                    journalSlug={journalSlug}
                />
            </div>
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