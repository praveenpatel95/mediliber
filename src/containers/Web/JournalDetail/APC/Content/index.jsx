import React from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function ApcContent() {
    return (
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        <ListGroup.Item as="a" href="#charge">The charge</ListGroup.Item>
                        <ListGroup.Item as="a" href="#value_added_tax">Value Added Tax</ListGroup.Item>
                        <ListGroup.Item as="a" href="#refund_policy">Refund policy</ListGroup.Item>
                        <ListGroup.Item as="a" href="#waivers">Waivers</ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5">
                    <h1 className="mb-4">Article Processing Charges</h1>
                    <section id="charge" className="mb-5">
                        <h2>The charge</h2>
                        <p>
                            As an Open Access title, publishing an article in this journal requires an Article
                            Processing Charge (APC) that will be billed to the submitting author following acceptance.
                            Apart from this Article Processing Charge there are no other fees (for example submission
                            charges, page charges, or color charges).
                            The Article Processing Charge for the journal is $1050.
                        </p>
                        <Button as={Link} to="/what-are-article-processing-charges" variant="outline-dark" size="lg" className="px-5">What are APC's</Button>
                    </section>
                    <section id="value_added_tax" className="mb-5">
                        <h2>Value Added Tax</h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                            uncover many web sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </section>
                    <section id="refund_policy" className="mb-5">
                        <h2>Value Added Tax</h2>
                        <p>
                            Once an article has been accepted for publication, an Article Processing Charge is due. The
                            submitting author assumes responsibility for the Article Processing Charge, and Mediliber will
                            not issue refunds of any kind.
                        </p>
                    </section>
                    <section id="waivers" className="mb-5">
                        <h2>Waivers</h2>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintoc
                        </p>
                        <Button as={Link} to="/waiver-policy" variant="outline-dark" size="lg" className="px-5">See Waivers
                            policy</Button>
                    </section>

                </Col>
            </Row>
        </Container>
    )
}

export default ApcContent;