import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

function EditorContent() {
    return (
        <Container>
            <Row>
                <Col sm={4} >
                    <ListGroup className="simple-list sticky-top" style={{'top':'120px'}}>
                        <ListGroup.Item className="fw-bold">Quick links</ListGroup.Item>
                        <ListGroup.Item as="a" href="#editorial-board">Editorial Board</ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col sm={8} className="pb-5">
                    <h1 className="mb-4">Editorial Board</h1>
                    <article id="editorial-board" className="mb-5">
                        <h2>Chief Editor</h2>
                        Patricia J. Y. Wong , Nanyang Technological University, Singapore
                    </article>
                    <article id="bibliographic-information" className="mb-5">
                       <ul>
                           <li>Akif Akgul , Hitit University, Turkey</li>
                           <li>Akif Akgul , Hitit University, Turkey</li>
                           <li>Akif Akgul , Hitit University, Turkey</li>
                           <li>Akif Akgul , Hitit University, Turkey</li>
                           <li>Akif Akgul , Hitit University, Turkey</li>
                       </ul>
                    </article>
                </Col>
            </Row>
        </Container>
    )
}

export default EditorContent;