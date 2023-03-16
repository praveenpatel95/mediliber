import React, {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/fontawesome-free-solid";
import './style.scss'
import VideoModal from "../VideoModal";

export default function HeadBanner() {
    const bannerImage = process.env.PUBLIC_URL + "/assets/images/banner/about_us.png";
    const [videoModal, setVideoModal] = useState(false);

    return (
        <section style={{backgroundImage: `url(${bannerImage})`}}
                 className="about_us_banner">
            <Container>
                <Row className="content">
                    <Col sm={6} className="ps-5">
                        <h1>About us</h1>
                        <p>One of the world's largest fully open access journal publishers. We believe in openness, in
                            scholarly publishing and research communication.

                        </p>
                        <Button variant="secondaryDark" onClick={() => setVideoModal(true)} size="lg"
                                className="mt-3 text-white px-5 py-3">
                            Why open access? <FontAwesomeIcon className="ps-3" icon={faPlayCircle}/>
                        </Button>
                    </Col>
                </Row>

            </Container>
            <VideoModal videoModal={videoModal} setVideoModal={setVideoModal}/>
        </section>
    )
}