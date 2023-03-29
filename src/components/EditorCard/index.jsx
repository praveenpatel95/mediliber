import React from "react";
import {Card, Image} from "react-bootstrap";
import './style.scss'
function EditorCard({editor}) {

    return (
        <Card id="editorial_board">
            <Card.Body className="text-center single-team">
                <Image src={`${editor?.photo}`}
                       className="team-thumb" />
                <div className="overlay_content">

                    <div className="content_detail">
                        <h5>{editor?.first_name +" "+editor?.last_name}</h5>
                        <p className="text-dark">{editor?.email}</p>
                        <p>{editor?.affiliation}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>

    );
}

export default EditorCard;