import React from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";
import JournalMetrics from "../../../../components/JournalMetrics";

const CommonComponent = ({journal}) => {
    return (
        <>
            <Card.Title className="title_height">{journal?.name}</Card.Title>
            <Card.Img variant="top" src={journal?.banner} alt={journal?.name} height="40" className="rounded-0"/>
            <Card.Body>
                <h6><FontAwesomeIcon icon={faChartLine}/> &nbsp;Journal metrics</h6>
                <JournalMetrics journal={journal}/>
            </Card.Body>
            {journal?.apc_visible === "Yes" ?
                <Card.Footer className="bg_theme_color text-white">
                <span>APC</span>
                <span className="float-end">€{journal?.apc}</span>
            </Card.Footer>
                :
                <Card.Footer className="text-white border-top-0">
                    <span>---</span>
                </Card.Footer>
            }
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
                )
                : journal?.slug === 'wamsj' ? (
                    <a href="https://wamsjournal.com/" target="_blank" className="text-decoration-none journal-card">
                        <Card>
                            <CommonComponent journal={journal}/>
                        </Card>
                    </a>
                ) : (
                    <Card as={Link} to={`/journal/${journal?.slug}`} className="text-decoration-none journal-card">
                        <CommonComponent journal={journal}/>
                    </Card>
                )}
        </div>
    );
};

export default JournalCard;