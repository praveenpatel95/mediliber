import React from "react";
import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight, faHandshake, faPencilAlt} from "@fortawesome/fontawesome-free-solid";
import {Link} from "react-router-dom";

function JoinSection() {
    return (
        <section>
            <Container fluid>
                <Row>
                    <Col sm={6} className="bg_red_light p-5">
                        <h2 className="pb-3">Join As Author</h2>
                        <Stack direction="horizontal" gap={3}>
                            <div>
                                <FontAwesomeIcon icon={faPencilAlt} className="fa-6x text-danger"/>
                            </div>
                            <div>
                                <p>We always welcome proposals for new products. We are looking for high-quality
                                    English-language content that enables international legal professionals to proceed
                                    confidently with the insight, analysis, and solutions our products offer. We aim to
                                    collaborate in a friendly, professional, and efficient manner. </p>
                                <Button as={Link} to="/auth/register" variant="outline-danger" size="lg">Publish with
                                    us <FontAwesomeIcon
                                        icon={faArrowAltCircleRight}/></Button>
                            </div>


                        </Stack>

                    </Col>
                    <Col sm={6} className="bg-theme-color text-white p-5">

                        <h2 className="text-white pb-3">Join As Editor/Reviewer</h2>
                        <Stack direction="horizontal" gap={3}>
                            <div>
                                <FontAwesomeIcon icon={faHandshake} className="fa-6x text-warning"/>
                            </div>
                            <div>
                                <p>Our Editorial/Reviewer board's quality reflects the caliber of MedLiber though
                                    seeking active, qualified, high-profile scientists and researchers. We have created
                                    a diverse portfolio of peer-reviewed, open access journals across a wide range of
                                    scientific and medical disciplines. Choose the journal that fits your niche.</p>
                                <Button as={Link} to="/publishing-partnerships" variant="outline-warning" size="lg">Join
                                    with us <FontAwesomeIcon
                                        icon={faArrowAltCircleRight}/></Button>
                            </div>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default JoinSection;