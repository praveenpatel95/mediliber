import React from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleRight,
    faArrowRight,
    faFileAlt,
    faFileArchive, faSearch, faSignInAlt,
    faUpload, faUser,
    faUsers
} from "@fortawesome/fontawesome-free-solid";
import './style.scss'

function Banner() {
    const bannerImage = process.env.PUBLIC_URL + "/assets/images/banner/bg_7.png";
    return (
        <section style={{backgroundImage: `url(${bannerImage})`}}
                 className="publish_banner">
            <Container>
                <Row className="content">
                    <Col sm={8}>
                        <h1>Publish with us</h1>
                        <h5>Placing the researcher at the heart of everything we do.</h5>
                        <Button variant="secondaryDark" size="lg" as={Link} to="/journals" className="mt-3 py-3 text-white px-5">
                            Our journals <FontAwesomeIcon className="ps-3" icon={faArrowAltCircleRight}/>
                        </Button>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Banner;