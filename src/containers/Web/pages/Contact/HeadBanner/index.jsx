import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

import './style.scss'


export default function HeadBanner({pageData}) {

    return (
        <section style={{backgroundImage: `url(${pageData?.banner})`}}
                 className="partner_banner">
            <Container>
                <Row className="content">
                    <Col sm={6} className="ps-5 pt-5">
                        <div dangerouslySetInnerHTML={{ __html: pageData?.banner_content }}></div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}