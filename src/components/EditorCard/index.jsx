import React from "react";
import {Card, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

function EditorCard({editor}) {

    return (
        <Card>
            <Card.Body className="text-center">
                <Image src={`${editor?.photo}`}
                       className="rounded-circle" style={{width: '100px', height: '100px'}}/>
                <h5 >{editor?.name}</h5>
                <Card.Title className="fs-6 text-secondaryDark">{editor?.affiliation}</Card.Title>
            </Card.Body>
        </Card>

    );
}

export default EditorCard;