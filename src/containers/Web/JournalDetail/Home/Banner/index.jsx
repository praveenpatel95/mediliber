import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './style.scss'
import JournalMetrics from "../../../../../components/JournalMetrics";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/fontawesome-free-solid";

function Banner(){
    const  bannerImage = process.env.PUBLIC_URL + "/assets/images/banner/bg_2.png";
   return (
       <section style={{backgroundImage: `url(${bannerImage})`, width: "100%", height: "300px"}} className="journal-banner">
            <Container>
                <Row>
                    <Col sm={8} className="pt-5 content">
                        <h6>Recently Published</h6>
                        <h5>A Modified RBF Collocation Method for Solving the Convection-Diffusion Problems</h5>
                        <p>Nissaya Chuathong</p>
                        <Link to="">Read the full article</Link>
                    </Col>
                    <Col sm={4} className="pt-5">
                        <Card>
                            <Card.Body>
                                <h5><FontAwesomeIcon icon={faChartLine} /> &nbsp;Journal metrics</h5>
                                <JournalMetrics />
                            </Card.Body>
                            <Card.Footer className="bg_theme_color text-white">
                                <span>APC</span>
                                <span className="float-end">10$</span>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
       </section>
   )
}
export default Banner;