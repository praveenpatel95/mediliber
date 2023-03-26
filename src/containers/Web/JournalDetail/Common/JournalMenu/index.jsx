import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import './style.scss'
import {Link} from "react-router-dom";

export default function JournalMenu({journalSlug}) {
    return (
        <Navbar className="bg_secondary_dark" expand="lg" id="journal-menu">
            <Navbar.Toggle aria-controls="menu"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="my-lg-0"
                >
                    <NavDropdown title="Journal overview" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                        <Container className="eventsNav pt-0 mt-0">
                            <Row>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/about`}>About this
                                        Journal</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/editorial-board`}>Editorial
                                        Board</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/peer-review-process`}>Peer
                                        Review Process</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/publication-ethics`}>Publication
                                        Ethics</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/abstracting-and-indexing`}>Abstracting
                                        and Indexing</NavDropdown.Item>
                                    <NavDropdown.Item as={Link}
                                                      to={`/journal/${journalSlug}/article-processing-charges`}>Article
                                        Processing Charges</NavDropdown.Item>
                                </Col>
                                {/*<Col xs="12" md="4" className="text-left">*/}
                                {/*    <NavDropdown.Item href="#action3">Journal Reports</NavDropdown.Item>*/}
                                {/*</Col>*/}
                            </Row>
                        </Container>
                    </NavDropdown>

                    <Nav.Link as={Link} to={`/journal/${journalSlug}/editorial-board`}>Editorial Board</Nav.Link>
                    <Nav.Link as={Link} to={`/journal/${journalSlug}/reviewer-board`}>Reviewer Board</Nav.Link>
                    <NavDropdown title="Guidelines" id="navbarScrollingDropdown1" renderMenuOnMount={true}>
                        <Container className="pt-0 mt-0">
                            <Row>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/author-guidelines`}>Authors
                                        Guidelines</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/reviewers`}>Reviewer
                                        Guidelines</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/editors`}>Editors
                                        Guidelines</NavDropdown.Item>
                                </Col>
                            </Row>
                        </Container>
                    </NavDropdown>
                    <NavDropdown title="Articles" id="navbarScrollingDropdown1" renderMenuOnMount={true}>
                        <Container className="pt-0 mt-0">
                            <Row>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item>In Press</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item>Current</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item>Archive</NavDropdown.Item>
                                </Col>
                            </Row>
                        </Container>
                    </NavDropdown>
                    <NavDropdown title="Special Issues" id="navbarScrollingDropdown1" renderMenuOnMount={true}>
                        <Container className="pt-0 mt-0">
                            <Row>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item href="#action3">About Special Issue</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item href="#action3">Publish Special Issue</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item href="#action3">Propose Special Issue</NavDropdown.Item>
                                </Col>
                            </Row>
                        </Container>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
