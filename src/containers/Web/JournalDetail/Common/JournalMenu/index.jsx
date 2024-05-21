import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import './style.scss'
import {Link} from "react-router-dom";

export default function JournalMenu({journalSlug}) {
    return (
        <Navbar className="bg_secondary_dark" expand="lg" id="journal-menu" collapseOnSelect>
            <Navbar.Toggle aria-controls="menu"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="my-lg-0"
                >
                    <NavDropdown title="Journal overview" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                        <Container className="eventsNav pt-0 mt-0">
                            <Row>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/about`} href="/test">About this
                                        Journal</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/editorial-board`} href="/test">Editorial
                                        Board</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/peer-review-process`} href="/test">Peer
                                        Review Process</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/publication-ethics`}>Publication
                                        Ethics</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/abstracting-and-indexing`} href="/test">Abstracting
                                        and Indexing</NavDropdown.Item>
                                    <NavDropdown.Item as={Link}
                                                      to={`/article-publication-charges`}>Article
                                        Processing Charges</NavDropdown.Item>
                                </Col>
                                {/*<Col xs="12" md="4" className="text-left">*/}
                                {/*    <NavDropdown.Item href="#action3">Journal Reports</NavDropdown.Item>*/}
                                {/*</Col>*/}
                            </Row>
                        </Container>
                    </NavDropdown>

                    <Nav.Link as={Link} to={`/journal/${journalSlug}/editorial-board`} href="/test">Editorial Board</Nav.Link>
                    <Nav.Link as={Link} to={`/journal/${journalSlug}/reviewer-board`} href="/test">Reviewer Board</Nav.Link>
                    <NavDropdown title="Guidelines" id="navbarScrollingDropdown1" renderMenuOnMount={true}>
                        <Container className="pt-0 mt-0">
                            <Row>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/author-guidelines`} href="/test">Authors
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
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/articles/press`}>In Press</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/articles/current`}>Current</NavDropdown.Item>
                                </Col>
                                <Col xs="12" md="4" className="text-left">
                                    <NavDropdown.Item as={Link} to={`/journal/${journalSlug}/articles/archive`}>Archive</NavDropdown.Item>
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
