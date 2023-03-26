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

function Banner({pageData}) {
    return (
        <section style={{backgroundImage: `url(${pageData?.banner})`}}
                 className="publish_banner">
            <Container>
                <Row className="content">
                    <Col sm={8}>
                        <div dangerouslySetInnerHTML={{ __html: pageData?.banner_content }}></div>
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