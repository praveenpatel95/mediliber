import React from "react";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";
import JournalMetrics from "../../../../../components/JournalMetrics";
import AsideList from "../AsideList";

function SidebarSection(){
    return (
        <>
            <Card className="mb-3">
                <Card.Img variant="top" src={process.env.PUBLIC_URL+"/assets/images/banner/bg_1.jpg"} height="40"/>
                <Card.Body>
                    <h5><FontAwesomeIcon icon={faChartLine} /> &nbsp;Journal metrics</h5>
                    <JournalMetrics />
                </Card.Body>
                <Card.Footer className="bg_theme_color text-white">
                    <span>APC</span>
                    <span className="float-end">10$</span>
                </Card.Footer>
            </Card>
            <AsideList />
        </>
    )
}
export default SidebarSection;