import React from "react";
import {Container} from "react-bootstrap";
import './style.scss'
export  default function JournalHead({journalName}){
    return (
        <Container fluid className="bg-secondary journal_head_menu py-2">
            <h1 className="text-white">{journalName}</h1>
        </Container>
    )
}
