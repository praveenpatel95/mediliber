import React from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";
import JournalMetrics from "../../../../components/JournalMetrics";

function JournalCard({journal}){
    return (
        <Card as={Link} to="/journal/my-detail" className="text-decoration-none journal-card">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/banner/bg_${journal}.png`} height="40"/>
            <Card.Body>
                <Card.Title>Case Reports in Infectious Diseases</Card.Title>
                <h6><FontAwesomeIcon icon={faChartLine} /> &nbsp;Journal metrics</h6>
                <JournalMetrics />
            </Card.Body>
            <Card.Footer className="bg_theme_color text-white">
                <span>APC</span>
                <span className="float-end">10$</span>
            </Card.Footer>
        </Card>
    )
}
export default JournalCard;