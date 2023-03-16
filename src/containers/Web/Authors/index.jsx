import React from "react";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";

export default function Authors() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Authors</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/publish-research`}}>Publish Research</Breadcrumb.Item>
                            <Breadcrumb.Item active>Authors</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container fluid>
                        <Row>
                            <Col sm={3}>
                                <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                                    <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                                    <ListGroup.Item as="a" href="#publish_with_us">Publish with us</ListGroup.Item>
                                    <ListGroup.Item as="a" href="#submitting_research">Submitting research</ListGroup.Item>

                                </ListGroup>
                            </Col>
                            <Col sm={9} className="pe-5 text-justify">
                                <h1 className="mb-4">Authors</h1>

                                <article id="publish_with_us" className="mb-5">
                                    <h2>Publish with us</h2>
                                    <p>
                                        Thinking about submitting your latest original research or review article to a Mediliber journal? Join our community of authors and benefit from:
                                    </p>
                                    <ul>
                                      <li>An easy-to-use manuscript submission system, without manuscript formatting requirements.
                                      </li>
                                        <li>Free of charge, full language editing report at point of submission, to help you assess and improve your manuscript prior to peer review.
                                        </li>
                                        <li>Dedicated editors who are active in their specific communities.
                                        </li>
                                    </ul>
                                </article>
                                <article id="submitting_research" className="mb-5">
                                    <h2>Submitting research
                                    </h2>
                                    <p>
                                        Need some help submitting your article? The links below provide resources on how to prepare to submit your research, along with guidance on how to make sure you choose the right journal and information on the editing services we provide.

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