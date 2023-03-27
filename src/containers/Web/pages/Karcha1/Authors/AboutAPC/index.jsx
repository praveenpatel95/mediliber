import React from "react";
import {Helmet} from "react-helmet";
import {Breadcrumb, Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";

export default function AboutAPC() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>What are article processing charges?</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/publish-research`}}>Publish Research</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/authors`}}>Authors</Breadcrumb.Item>
                            <Breadcrumb.Item active>What are article processing charges?</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container fluid>
                        <Row>
                            <Col sm={3}>
                                <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                                    <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                                    <ListGroup.Item as="a" href="#explain">Article processing charges
                                        explained</ListGroup.Item>
                                    <ListGroup.Item as="a" href="#waivers">Waivers</ListGroup.Item>

                                </ListGroup>
                            </Col>
                            <Col sm={9} className="pe-5 text-justify">
                                <h1 className="mb-4">What are article processing charges?</h1>
                                <p>All Mediliber journal articles are open access and subject to an article processing
                                    charge (APC) upon acceptance. This charge covers the costs of turning a manuscript
                                    into a finished article, as well as the costs of hosting, distributing and promoting
                                    an article.</p>
                                <article id="explain" className="mb-5">
                                    <h2>Article processing charges explained</h2>
                                    <p>
                                        We are committed to making the costs of publishing as clear as possible. The
                                        article processing charge for each journal is clearly displayed on its homepage.
                                    </p>
                                    <p>
                                        When a manuscript is submitted, it passes through the many different
                                        departments at Mediliber to ensure the quality checks, peer review, production
                                        and promotion of the article is carried out in a timely manner and to a high
                                        standard.
                                    </p>
                                </article>
                                <article id="waivers" className="mb-5">
                                    <h2>Waivers</h2>
                                    <p>
                                        We want to support all researchers to publish. To help those who are unable to
                                        meet some, or all, of the cost associated with publishing open access, we
                                        operate a transparent waiver policy.

                                    </p>
                                    <Button as={Link} to="/waiver-policy" variant="outline-dark" size="lg" className="px-5">See Waivers
                                        policy</Button>

                                </article>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </HelmetProvider>
    )
}