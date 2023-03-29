import React from "react";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";
import JournalMetrics from "../../../../../components/JournalMetrics";
import AsideList from "../AsideList";
import {useSelector} from "react-redux";
import 'https://platform.twitter.com/widgets.js'

function SidebarSection() {
    const {journalDetail}
        = useSelector(state => state?.CommonJournalReducer);
    return (
        <>
            <Card className="mb-3">
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

            <div className="mt-3">
                    <marquee width="100%" direction="up" height="200px" scrollamount="2"
                             onmouseover="this.stop();"
                             onmouseout="this.start();">
                        <div className="widget__post-thumb">
                            <a className="twitter-timeline"
                               href="https://twitter.com/30396574233c438?ref_src=twsrc">Tweets
                                by {journalDetail?.name}</a>
                        </div>
                    </marquee>
            </div>
        </>
    )
}

export default SidebarSection;