import React from "react";
import {Card, Image} from "react-bootstrap";
import './style.scss'
function EditorCard({editor}) {

    return (
        <Card id="editorial_board">
            <Card.Body className="text-center single-team">
                <Image src={`${editor?.photo}`}
                       className="team-thumb rounded-circle" />
                <h5>{editor?.first_name +" "+editor?.last_name}</h5>
                <p className="text-dark">{editor?.country}</p>
                <div className="overlay_content">

                    <div className="content_detail">
                        <h6 className="text-white">{editor?.first_name +" "+editor?.last_name}</h6>
                        <p className="text-dark">{editor?.country}<br />
                        <small>{editor?.affiliation}</small><br />
                            <small>{editor?.journal?.short_code}</small>
                        </p>
                    </div>
                </div>
            </Card.Body>
        </Card>

    );
}

export default EditorCard;