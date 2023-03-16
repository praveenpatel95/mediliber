import React, {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/fontawesome-free-solid";
import './style.scss'
import VideoModal from "../../PublishingPartnership/VideoModal";

export default function HeadBanner() {
    const bannerImage = process.env.PUBLIC_URL + "/assets/images/banner/contact.png";

    return (
        <section style={{backgroundImage: `url(${bannerImage})`}}
                 className="partner_banner">
            <Container>
                <Row className="content">
                    <Col sm={6} className="ps-5 pt-5">
                        <h1>Contact us</h1>
                        <h5>Whether you have a question about our journals or publishing partnerships, our team is here
                            to help.</h5>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}