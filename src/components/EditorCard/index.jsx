import React from "react";
import {Card, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

function EditorCard({editor}) {

    return (
        <Card>
            <Card.Body className="text-center">
                <Image src={`${process.env.PUBLIC_URL}/assets/images/editors/${editor.id}.jpg`}
                       className="rounded-circle" style={{width: '100px', height: '100px'}}/>
                <h5 as={Link} to="/">{editor?.name}</h5>
                <Card.Title as={Link} to="/" className="fs-6 text-secondaryDark">{editor?.education}</Card.Title>
            </Card.Body>
        </Card>

    );
}

export default EditorCard;