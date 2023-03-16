import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import JournalMetrics from "../JournalMetrics";

function JournalCard({journal}){
    return (
        <Card as={Link} to="/journal/test-slug" className="text-decoration-none journal-card">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/banner/bg_${journal}.png`} height="40"/>
            <Card.Body>
                <Card.Title>Case Reports in Infectious Diseases</Card.Title>
                <JournalMetrics />
            </Card.Body>
        </Card>
    )
}
export default JournalCard;