import React from "react";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";

export default function PublicationEthics() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Publication ethics</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/publish-research`}}>Publish Research</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/authors`}}>Authors</Breadcrumb.Item>
                            <Breadcrumb.Item active>Publication ethics
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container fluid>
                        <Row>
                            <Col sm={3}>
                                <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                                    <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                                    <ListGroup.Item as="a" href="#article">Article assessment</ListGroup.Item>

                                </ListGroup>
                            </Col>
                            <Col sm={9} className="pe-5 text-justify">
                                <h1 className="mb-4">Publication ethics</h1>
                                <p>
                                    Ethical standards for publication exist to ensure high-quality scientific
                                    publications, public trust in scientific findings, and that people receive credit
                                    for their work and ideas.</p>

                                <p> Mediliber is a member of the Committee on Publication Ethics (COPE) and aims to adhere
                                    to its guidelines and core practices.
                                </p>
                            <article id="article" className="mb-5">
                                <h2>Article assessment</h2>
                                <p>
                                    All manuscripts are subject to peer review and are expected to meet standards of
                                    academic excellence. If approved by the editor, submissions will be considered
                                    by peer reviewers, whose identities will remain anonymous to the authors.</p>

                                <p>
                                    Our Research Integrity team will occasionally seek advice outside standard peer
                                    review, for example, on submissions with serious ethical, security, biosecurity,
                                    or societal implications. We may consult experts and the academic editor before
                                    deciding on appropriate actions, including but not limited to recruiting
                                    reviewers with specific expertise, assessment by additional editors, and
                                    declining to further consider a submission.
                                </p>
                            </article>

                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
</HelmetProvider>
)
}