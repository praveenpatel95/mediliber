import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Filter from "./Filter";
import JournalCard from "./JournalCard";

function Journals() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Journals - Mediliber</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Journals</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>


                <Container fluid>
                    <Row>
                        <Col sm={3}>
                            <Filter/>
                        </Col>
                        <Col sm={9}>
                            <h2>Journals</h2>
                            <Row xs={1} md={2} className="g-4">
                            {[2, 3, 4, 5].map((journal, index) => (
                                <Col>
                                    <JournalCard journal={journal}/>
                                </Col>
                            ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </main>
        </HelmetProvider>
    )
}

export default Journals;