import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

function PeerReviewContent() {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        <ListGroup.Item as="a" href="#prp">Peer Review Process</ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5">
                    <h1 className="mb-4">Peer Review Process</h1>
                    <article id="prp" className="mb-5">
                        <h2>Chief Editor</h2>
                        <p>
                            The following is the editorial workflow that every manuscript submitted to the journal
                            undergoes during the course of the peer-review process.
                            The entire editorial workflow is performed using the online review system. Once a manuscript
                            is submitted for publication, the manuscript is checked by the journal’s editorial office to
                            ensure the files are complete and that the relevant metadata are in order. Once this is
                            done, the manuscript is assigned to an Academic Editor on the basis of their subject
                            expertise.
                            The Academic Editor performs an initial assessment before inviting a number of potential
                            reviewers to provide a peer-review report. (The Academic Editor can reject a manuscript
                            prior to review if not deemed suitable.) On the basis of the submitted reports the Academic
                            Editor makes one of the following recommendations:
                        </p>
                    </article>

                </Col>
            </Row>
        </Container>
    )
}

export default PeerReviewContent;