import React from "react";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";
import JournalMetrics from "../../../../../components/JournalMetrics";
import AsideList from "../AsideList";
import {useSelector} from "react-redux";


function SidebarSection() {
    const {journalDetail}
        = useSelector(state => state?.CommonJournalReducer);
    return (
        <>
            <Card>
                <Card.Img variant="top" src={journalDetail?.banner} height="40"/>
                <Card.Body>
                    <h5><FontAwesomeIcon icon={faChartLine}/> &nbsp;Journal metrics</h5>
                    <JournalMetrics journal={journalDetail}/>
                </Card.Body>
                <Card.Footer className="bg_theme_color text-white">
                    <span>APC</span>
                    <span
                        className="float-end">{journalDetail?.apc_visible === "Yes" ? "€" + journalDetail?.apc : "-"}</span>
                </Card.Footer>
            </Card>
            <AsideList/>
        </>
    )
}

export default SidebarSection;