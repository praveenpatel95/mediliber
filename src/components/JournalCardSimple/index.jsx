import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import JournalMetrics from "../JournalMetrics";

function JournalCard({journal}){
    return (
        <Card as={Link} to={`/journal/${journal?.slug}`} className="text-decoration-none journal-card">
            <Card.Title className="title_height">{journal?.name}</Card.Title>
            <Card.Img variant="top" src={journal?.banner} height="40" className="rounded-0"/>
            <Card.Body>
                <JournalMetrics journal={journal}/>
            </Card.Body>
        </Card>
    )
}
export default JournalCard;