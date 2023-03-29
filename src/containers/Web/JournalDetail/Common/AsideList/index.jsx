import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faFileAlt,
    faFileArchive,
    faSignInAlt,
    faUpload,
    faUsers
} from "@fortawesome/fontawesome-free-solid";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Timeline} from 'react-twitter-widgets'


export default function AsideList() {
    const {journalDetail}
        = useSelector(state => state?.CommonJournalReducer);

    return (
        <div className="mb-3">
            <ListGroup className="fs-6 list2">
                <ListGroup.Item className="bg-theme-color text-white"><FontAwesomeIcon icon={faUpload}
                                                                                       className="w-25"/> Submit
                    Article <FontAwesomeIcon className="float-end" icon={faArrowRight}/></ListGroup.Item>
                <ListGroup.Item as={Link} to={`/journal/${journalDetail?.slug}/author-guidelines`}><FontAwesomeIcon
                    icon={faFileAlt}
                    className="w-25"/> Author
                    guidelines</ListGroup.Item>
                <ListGroup.Item as={Link} to={`/journal/${journalDetail?.slug}/editorial-board`}><FontAwesomeIcon
                    icon={faUsers}
                    className="w-25"/> Editorial
                    board</ListGroup.Item>
                <ListGroup.Item as={Link}
                                to={`/journal/${journalDetail?.slug}/abstracting-and-indexing`}><FontAwesomeIcon
                    icon={faFileArchive} className="w-25"/> Abstracting & Indexing</ListGroup.Item>
                <ListGroup.Item className="bg-secondary text-white"><FontAwesomeIcon icon={faSignInAlt}
                                                                                     className="pe-2"/> Sign up for
                    content
                    alerts</ListGroup.Item>
            </ListGroup>
            {journalDetail?.twitter_feed &&
                <div className="mt-3">
                    <Timeline
                        dataSource={{
                            sourceType: 'url',
                            url: journalDetail?.twitter_feed
                        }}
                        options={{
                            height: '250'
                        }}
                    />
                </div>
            }
        </div>

    )
}