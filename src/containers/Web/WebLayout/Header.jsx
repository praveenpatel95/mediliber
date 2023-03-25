import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../../components/Logo";
import Search from "../../../components/Search";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom";
import './style.scss'

function Header() {
    const [toggle, setToggle] = useState(false);
    const showToggle = () => setToggle(true);
    const closeToggle = () => setToggle(false);

    return (
        <Navbar bg="theme-color" expand="lg" className="sticky-top" id="main-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/"><Logo height="50px"/></Navbar.Brand>
                <Navbar.Offcanvas
                    show={toggle}
                    onHide={closeToggle}
                    className="canvas_header_menu"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-1`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="justify-content-end">

                        <Nav>
                            <Nav.Link as={Link} to="/journals">Journals </Nav.Link>
                            <Nav.Link as={Link} to="/join-us">Join Us</Nav.Link>
                            <Nav.Link as={Link} to="/publishing-partnerships">Editorial Policies</Nav.Link>
                            <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
                            <Nav.Link>Submit Manuscript </Nav.Link>

                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Navbar.Text><Search/></Navbar.Text>
                <Navbar.Toggle onClick={showToggle}/>

            </Container>
        </Navbar>
    )
}

export default Header;