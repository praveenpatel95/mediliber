import React from "react";
import {Col, Container, Nav, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faLinkedin, faSquareYoutube,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-theme-color text-white footer ">
            <Container className="pt-5">
                <Row>
                    <Col sm="2">
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm="2">
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/authors">Authors</Nav.Link>
                            <Nav.Link as={Link} to="/editors">Editors</Nav.Link>
                            <Nav.Link as={Link} to="/reviewers">Reviewers</Nav.Link>
                            <Nav.Link as={Link} to="/publishing-partnerships">Partnerships</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm="3">
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/journals">Journals</Nav.Link>
                            <Nav.Link as={Link} to="/article-publication-charges">Article Processing Charges</Nav.Link>
                            <Nav.Link as={Link} to="/print-editions">Print editions</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm="3">
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/privacy-policy">Privacy Policy</Nav.Link>
                            <Nav.Link as={Link} to="/terms-of-services">Terms of Service</Nav.Link>
                            <Nav.Link as={Link} to="/responsible-disclosure-policy">Responsible Disclosure Policy</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm="2">
                        <h4 className="text-white">Follow us: </h4>
                        <Nav>
                            <Nav.Link><FontAwesomeIcon className="fa-2x" icon={faFacebookSquare}/> </Nav.Link>
                            <Nav.Link><FontAwesomeIcon className="fa-2x" icon={faTwitterSquare}/></Nav.Link>
                            <Nav.Link><FontAwesomeIcon className="fa-2x" icon={faLinkedin}/></Nav.Link>
                            <Nav.Link><FontAwesomeIcon className="fa-2x" icon={faSquareYoutube}/></Nav.Link>
                        </Nav>

                    </Col>
                </Row>
                <hr/>



            </Container>
            <div className="text-center pb-3">© 2023 Mediliber publication group.
                All Rights Reserved.
            </div>

        </footer>
    )
}

export default Footer;