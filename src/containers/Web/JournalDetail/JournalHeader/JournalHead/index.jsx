import React from "react";
import {Container} from "react-bootstrap";
import './style.scss'
import {Link} from "react-router-dom";
export  default function JournalHead({journalName, journalSlug}){
    return (
        <Container fluid className="bg-secondary journal_head_menu py-2">
            <h1 className="text-white"><Link to={`/journal/${journalSlug}`}>{journalName}</Link></h1>
        </Container>
    )
}
