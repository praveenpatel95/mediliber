import React from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";
import JournalMetrics from "../../../../components/JournalMetrics";

function JournalCard({journal}) {
    return (
        <Card as={Link} to={`/journal/${journal?.slug}`} className="text-decoration-none journal-card">
            <Card.Title className="title_height">{journal?.name}</Card.Title>
            <Card.Img variant="top" src={journal?.banner} alt={journal?.name} height="40" className="rounded-0"/>
            <Card.Body>

                <h6><FontAwesomeIcon icon={faChartLine}/> &nbsp;Journal metrics</h6>
                <JournalMetrics journal={journal}/>
            </Card.Body>
            <Card.Footer className="bg_theme_color text-white">
                <span>APC</span>
                <span className="float-end">{journal?.apc_visible === "Yes" ? "€" + journal?.apc : "-"}</span>
            </Card.Footer>
        </Card>
    )
}

export default JournalCard;