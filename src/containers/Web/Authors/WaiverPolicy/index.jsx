import React from "react";
import {Helmet} from "react-helmet";
import {Breadcrumb, Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";

export default function WaiverPolicy() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Article processing charge waiver policy</title>
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
                                    <ListGroup.Item as="a" href="#qualifying">Qualifying for a waiver</ListGroup.Item>
                                    <ListGroup.Item as="a" href="#eligible">Countries eligible for a full (100%)
                                        waiver</ListGroup.Item>

                                </ListGroup>
                            </Col>
                            <Col sm={9} className="pe-5 text-justify">
                                <h1 className="mb-4">Article processing charge waiver policy
                                </h1>
                                <p>All of Mediliber's journals are fully open access and require article processing
                                    charges (APCs) to be paid following acceptance. To help support researchers who are
                                    unable to meet some or all of the costs associated with publishing open access,
                                    Mediliber operates a transparent waiver policy.</p>
                                <article id="qualifying" className="mb-5">
                                    <h2>Qualifying for a waiver</h2>
                                    <p>
                                        To help support researchers in low-to-middle income countries, all Mediliber
                                        journals automatically provide full and partial waivers of article processing
                                        charges for manuscripts based on the corresponding author's listed affiliation.
                                        Authors do not need to request these waivers, they will be applied at
                                        submission.
                                    </p>

                                </article>
                                <article id="eligible" className="mb-5">
                                    <h2>Countries eligible for a full (100%) waiver</h2>
                                    <p>
                                        Mediliber provides an automatic 100% waiver for article processing charges on
                                        manuscripts where the corresponding author is based in any of the countries
                                        listed below. Please contact waivers@Mediliber.com if you have any questions in
                                        regard to this.

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