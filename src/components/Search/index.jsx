import React, { useState } from 'react';
import {Button, Form, Offcanvas} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/fontawesome-free-solid";

function Search(...props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="outline-secondary border-2" size="sm" onClick={handleShow} className="ms-3">
                <FontAwesomeIcon icon={faSearch}/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="primary-text">Search Article</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 theme_border_1"
                            aria-label="Search"
                        />
                        <Button variant="primary" size="sm">Search</Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default Search;