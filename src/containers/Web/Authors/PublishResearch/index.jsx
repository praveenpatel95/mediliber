import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import Banner from "./Banner";
import {Col, ListGroup, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faSearch, faUser} from "@fortawesome/fontawesome-free-solid";
import {Link} from "react-router-dom";

function PublishResearch() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Article Publish with us</title>
            </Helmet>
            <main>
                <Banner/>
                <section  className="py-5">
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <h2>How you can get involved</h2>
                                <p>When you publish, edit, or peer review with a Mediliber journal, you become part of a
                                    community that will support you and enable you to share research with a relevant
                                    global audience. This way, together, we maximize the impact, reach, and visibility
                                    of your research.

                                </p>
                                <p>Our journals service niche and broader communities of researchers all over the world.
                                    They would not be the useful and impactful publications they are without the expert
                                    researchers that publish in them.</p>
                                <p>Here, you can find out everything you need to know about being an Author, Editor or
                                    Reviewer at a Mediliber journal.</p>
                            </Col>
                            <Col sm={4}>
                                <ListGroup className="fs-6 list2">
                                    <ListGroup.Item as={Link} to="/authors"><FontAwesomeIcon icon={faUser} className="w-25"/> Becoming an Author</ListGroup.Item>
                                    <ListGroup.Item ><FontAwesomeIcon icon={faFileAlt} className="w-25"/> Being an Editor</ListGroup.Item>
                                    <ListGroup.Item ><FontAwesomeIcon icon={faSearch} className="w-25"/> For Reviewers</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </main>
        </HelmetProvider>
    )
}

export default PublishResearch;