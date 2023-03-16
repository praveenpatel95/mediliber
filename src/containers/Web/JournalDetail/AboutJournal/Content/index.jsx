import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

function AboutContent() {
    return (
        <Container>
            <Row>
                <Col sm={4} >
                    <ListGroup className="simple-list sticky-top" style={{'top':'120px'}}>
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        <ListGroup.Item as="a" href="#aims-and-scope">Aims and Scope</ListGroup.Item>
                        <ListGroup.Item as="a" href="#bibliographic-information">Bibliographic information</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5">
                    <h1 className="mb-4">About this Journal</h1>
                    <article id="aims-and-scope" className="mb-5">
                        <h2>Aims and scope</h2>
                        Abstract and Applied Analysis is a mathematical journal devoted exclusively to the
                        publication of high-quality research papers in the fields of abstract and applied analysis.
                        Emphasis is placed on important developments in classical analysis, linear and nonlinear
                        functional analysis, ordinary and partial differential equations, optimization theory, and
                        control theory. Abstract and Applied Analysis supports the publication of original material
                        involving the complete solution of significant problems in the above disciplines. Abstract
                        and Applied Analysis also encourages the publication of timely and thorough survey articles
                        on current trends in the theory and applications of analysis.
                    </article>
                    <article id="bibliographic-information" className="mb-5">
                        <h2>Bibliographic information</h2>
                        ISSN: 1085-3375 (Print)
                        ISSN: 1687-0409 (Online)
                        DOI: 10.1155/4058
                    </article>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutContent;