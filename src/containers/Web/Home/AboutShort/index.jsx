import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function AboutShort() {
    return (
        <section>
            <Container className="py-3">
                <Row>
                    <Col sm={7} className="mt-5">
                        <h3 className="text-secondary">About MedLiber Publishing Group</h3>
                        <p className="justify-content-evenly">MedLiber provides access to high-quality,
                            cross-disciplinary journals spanning Medical Science and Healthcare. It is a renowned
                            international publisher of open-access journals in clinical, medical, biological,
                            regenerative medicine, neurology, neurosurgery, surgical, forensic sciences, and pathology.
                            We provide a variety of content platforms that connect academics to knowledge. They are
                            designed with the goal of encouraging discovery and allowing people to obtain relevant
                            research and information quickly and effortlessly, no matter where they are.</p>
                        <Button as={Link} to="/about-us" className="mt-3 theme_btn" size="lg"><span>More about us</span></Button>
                    </Col>
                    <Col sm={5}>
                        <img src={process.env.PUBLIC_URL + "/assets/images/banner/18.png"} style={{width: '100%'}}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutShort;