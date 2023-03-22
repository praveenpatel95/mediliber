import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, useNavigate} from "react-router-dom";
import './style.scss'
import {NavDropdown} from "react-bootstrap";
import {logout} from "../../../../stores/Auth/actions";
import {useDispatch} from "react-redux";

function Header() {
    const [toggle, setToggle] = useState(false);
    const showToggle = () => setToggle(true);
    const closeToggle = () => setToggle(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const callLogout = () => {
        dispatch(logout());
        navigate('/auth/login')
    }

    return (
        <Navbar bg="theme-color" expand="lg" className="sticky-top" id="admin-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/super-admin/dashboard">
                    <img src={process.env.PUBLIC_URL+'/mediliber-logo-small.png'} height={40}/>
                </Navbar.Brand>
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
                    <Offcanvas.Body >

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/admin/journal-profile">Journal Profile</Nav.Link>
                            <Nav.Link as={Link} to="/admin/journal-pages">Journal Pages</Nav.Link>
                            <Nav.Link as={Link} to="/admin/editorial-board">Editorial Board</Nav.Link>
                            <Nav.Link as={Link} to="/admin/reviewer-board">Reviewer Board</Nav.Link>
                        </Nav>
                        <Nav >
                            <NavDropdown title="My Account">
                                <NavDropdown.Item as={Link} to="/admin/update-profile">My Profile</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/admin/update-password">
                                    Change Password
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => callLogout()}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Navbar.Toggle onClick={showToggle}/>

            </Container>
        </Navbar>
    )
}

export default Header;