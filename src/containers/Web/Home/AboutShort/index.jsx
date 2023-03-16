import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

function AboutShort() {
    return (
        <section>
            <Container className="py-3">
                <Row>
                    <Col sm={7} className="mt-5">
                        <h3 className="text-secondary">About Mediliber publication</h3>
                        <p className="justify-content-evenly">It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                            uncover many web sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <button className="mt-3 theme_btn" size="lg"><span>More about us</span></button>
                    </Col>
                    <Col sm={5}>
                        <img src={process.env.PUBLIC_URL+"/assets/images/banner/18.png"} style={{width:'100%'}} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutShort;