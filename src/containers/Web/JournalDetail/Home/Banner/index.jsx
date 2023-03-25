import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './style.scss'
import JournalMetrics from "../../../../../components/JournalMetrics";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";

function Banner({journalDetail}){
    const  bannerImage = process.env.PUBLIC_URL + "/assets/images/banner/bg_2.png";
   return (
       <section style={{backgroundImage: `url(${journalDetail?.banner})`, width: "100%", height: "300px"}} className="journal-banner">
            <Container>
                <Row>
                    <Col sm={8} className="pt-5 content">
                        <div dangerouslySetInnerHTML={{ __html: journalDetail?.banner_content }}></div>
                    </Col>
                    <Col sm={4} className="pt-5">
                        <Card>
                            <Card.Body>
                                <h5><FontAwesomeIcon icon={faChartLine} /> &nbsp;Journal metrics</h5>
                                <JournalMetrics journal={journalDetail}/>
                            </Card.Body>
                            <Card.Footer className="bg_theme_color text-white">
                                <span>APC</span>
                                <span className="float-end">{journalDetail?.apc_visible === "Yes"? "€"+journalDetail?.apc:"-"}</span>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
       </section>
   )
}
export default Banner;