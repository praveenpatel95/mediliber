import {Accordion, ListGroup} from "react-bootstrap";

import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {getJournalVolumeList} from "../../../../../stores/Common/Journal/actions";
import {Link} from "react-router-dom";
import Loader1 from "../../../../../components/Loader1";

function Volume({getJournalVolumeData, journal, journalSlug}) {
    useEffect(() => {
        getJournalVolumeData(journal?.id)
    }, [journal]);


    const {
        isJournalVolumeListFetching,
        journalVolumeList
    } = useSelector(state => state?.CommonJournalReducer);


    return (
        <div className="mb-3">
            <h4 className="bg_theme_color py-2 ps-3 text-white mb-0">Archive</h4>
            {!isJournalVolumeListFetching ?
                <>
                    {journalVolumeList?.length > 0
                        && journalVolumeList?.map((volumeList, index) => (
                            <Accordion>
                                <Accordion.Item eventKey={volumeList?.date}>
                                    <Accordion.Header><span
                                        className="theme_text_color fw-bold">{volumeList?.date}</span></Accordion.Header>
                                    <Accordion.Body className="p-0">

                                        <ListGroup className="fs-6 list2">
                                            {volumeList?.volumes?.map((volumeData, index) => (
                                                <ListGroup.Item as={Link} to={`/journal/${journalSlug}/archive/volume-${volumeData?.volume}/issue-${volumeData?.issue}`}>Volume {volumeData?.volume},
                                                    Issue {volumeData?.issue}</ListGroup.Item>
                                            ))}

                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        ))}
                </>
                :
               <div className="text-center mt-3">
                   <Loader1/>
               </div>
            }
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournalVolumeData: (journalId) => dispatch(getJournalVolumeList(journalId)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Volume);
