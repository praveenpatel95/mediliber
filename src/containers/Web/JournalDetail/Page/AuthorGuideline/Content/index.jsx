import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

function GuideLineContent() {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <ListGroup className="simple-list sort_link_fixed" >
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        <ListGroup.Item as="a" href="#guideline" active>Author Guideline</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5">
                    <h1 className="mb-4">Author Guideline</h1>
                    <article id="guideline" className="mb-5">
                        <h2>Publish with us</h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                            uncover many web sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        <h2>Appeals</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.</p>
                    </article>

                </Col>
            </Row>
        </Container>
    )
}

export default GuideLineContent;