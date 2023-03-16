import React from "react";
import {ListGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faFileAlt,
    faFileArchive,
    faHandPaper, faSignInAlt,
    faUpload,
    faUsers
} from "@fortawesome/fontawesome-free-solid";
import {Link} from "react-router-dom";

export default function AsideList(){
    const journalSlug = 'my-journal';

    return (
        <ListGroup className="fs-6 list2">
            <ListGroup.Item className="bg-theme-color text-white"><FontAwesomeIcon icon={faUpload} className="w-25"/> Submit Journal <FontAwesomeIcon className="float-end" icon={faArrowRight} /></ListGroup.Item>
            <ListGroup.Item as={Link} to={`/journal/${journalSlug}/author-guidelines`}><FontAwesomeIcon icon={faFileAlt} className="w-25"/> Author guidelines</ListGroup.Item>
            <ListGroup.Item as={Link} to={`/journal/${journalSlug}/editors`}><FontAwesomeIcon icon={faUsers} className="w-25"/> Editorial board</ListGroup.Item>
            <ListGroup.Item as={Link} to={`/journal/${journalSlug}/abstracting-and-indexing`}><FontAwesomeIcon icon={faFileArchive} className="w-25"/> Abstracting & Indexing</ListGroup.Item>
            <ListGroup.Item  className="bg-secondary text-white"><FontAwesomeIcon icon={faSignInAlt} className="pe-2"/> Sign up for content alerts</ListGroup.Item>

        </ListGroup>
    )
}