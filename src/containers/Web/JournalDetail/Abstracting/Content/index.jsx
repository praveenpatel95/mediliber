import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

function AbstractingContent() {
    return (
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        <ListGroup.Item as="a" href="#discoverability">Discoverability</ListGroup.Item>
                        <ListGroup.Item as="a" href="#full_list">Full list of databases and services</ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5">
                    <h1 className="mb-4">Abstracting and Indexing</h1>
                    <article id="discoverability" className="mb-5">
                        <h2>Discoverability</h2>
                        <p>
                            The journal's articles appear in a wide range of abstracting and indexing databases, and are
                            covered by numerous other services, as given in the full list below. The following link
                            provides more information about Mediliber's approach to making articles more discoverable.
                            The Academic Editor performs an initial assessment before inviting a number of potential
                            reviewers to provide a peer-review report. (The Academic Editor can reject a manuscript
                            prior to review if not deemed suitable.) On the basis of the submitted reports the Academic
                            Editor makes one of the following recommendations:
                        </p>
                    </article>
                    <article id="full_list" className="mb-5">
                        <h2>Full list of databases and services</h2>
                        <p>
                            Academic OneFile<br />
                            Academic Search Alumni Edition<br />
                            Academic Search Complete<br />
                            Academic Search Research and Development<br />
                            Advanced Technologies Database with Aerospace<br />
                            Aerospace Database<br />
                            Aluminium Industry Abstracts<br />
                        </p>
                    </article>

                </Col>
            </Row>
        </Container>
    )
}

export default AbstractingContent;