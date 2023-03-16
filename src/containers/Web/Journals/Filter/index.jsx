import React from "react";
import {Card, Form} from "react-bootstrap";
import '../../../../styles/checkbox.scss'
function Filter(){
    return(
        <Card className="filter-card sticky-top" style={{'top':'120px'}}>
            <Card.Header className="fs-5 fw-semibold">Filter by discipline</Card.Header>
            <Card.Body>
                <Form.Group className="mb-3" controlId="1">
                    <Form.Check type="checkbox"
                                label="Label"
                                className="custom-checkbox"

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="2">
                    <Form.Check type="checkbox"
                                label="Label 1"
                                className="custom-checkbox"

                    />
                </Form.Group>
            </Card.Body>
        </Card>
    )
}
export default Filter