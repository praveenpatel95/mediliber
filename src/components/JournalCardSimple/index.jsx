import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import JournalMetrics from "../JournalMetrics";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";

const CommonComponent = ({journal}) => {
    return (
        <>
            <Card.Title className="title_height">{journal?.name}</Card.Title>
            <Card.Img variant="top" src={journal?.banner} height="40" className="rounded-0"/>
            <Card.Body>
                <JournalMetrics journal={journal}/>
            </Card.Body>
        </>
    )
        ;
};
const JournalCard = ({journal}) => {
    return (
        <div>
            {journal?.slug === 'ijcicr' ? (
                <a href="https://ijcicr.com/" target="_blank" className="text-decoration-none journal-card">
                    <Card>
                        <CommonComponent journal={journal}/>
                    </Card>
                </a>
            ) : journal?.slug === 'wamsj' ? (
                    <a href="https://wamsjournal.com" target="_blank" className="text-decoration-none journal-card">
                        <Card>
                            <CommonComponent journal={journal}/>
                        </Card>
                    </a>
                )
            : (
                <Card as={Link} to={`/journal/${journal?.slug}`} className="text-decoration-none journal-card">
                    <CommonComponent journal={journal}/>
                </Card>
            )}
        </div>
    )
}
export default JournalCard;