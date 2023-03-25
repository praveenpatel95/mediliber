import React from "react";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";

export default function ResponsibleDisclosurePolicy() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Responsible Disclosure Policy</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Responsible Disclosure Policy</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container fluid>
                        <Row>
                            <Col sm={3}>
                                <ListGroup className="simple-list sticky-top" style={{'top': '120px'}}>
                                    <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                                    <ListGroup.Item as="a" href="#become_editor">Acknowledgements</ListGroup.Item>

                                </ListGroup>
                            </Col>
                            <Col sm={9} className="pe-5 text-justify">
                                <h1 className="mb-4">Responsible Disclosure Policy</h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal distribution of letters, as opposed to using
                                    'Content here, content here', making it look like readable English. Many desktop
                                    publishing packages and web page editors now use Lorem Ipsum as their default
                                    model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                    their infancy. Various versions have evolved over the years, sometimes by
                                    accident, sometimes on purpose (injected humour and the like).
                                </p>

                                <article id="become_editor" className="mb-5">
                                    <h2>Introduction</h2>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English. Many desktop
                                        publishing packages and web page editors now use Lorem Ipsum as their default
                                        model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                        their infancy. Various versions have evolved over the years, sometimes by
                                        accident, sometimes on purpose (injected humour and the like).
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