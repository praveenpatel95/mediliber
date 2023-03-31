import React from "react";
import {Container} from "react-bootstrap";

export  default function JournalHead({journalName}){
    return (
        <Container fluid className="bg-secondary py-1">
            <h1 className="text-white fs-2">{journalName}</h1>
        </Container>
    )
}
