import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/fontawesome-free-solid";
import {Link} from "react-router-dom";

function Banner() {
    const bannerImage = process.env.PUBLIC_URL + "/assets/images/banner/bg_6.png";
    return (
        <div id="top-banner" style={{backgroundImage: `url(${bannerImage})`}}>
            <div className="col-sm-6 py-5 px-5 offset-sm-1">
                <h1>Open Access publishing for the scientific community</h1>
                <p className="py-3">Maximizing the impact of research through openness. Because science works best when
                    research is open.</p>

                <Row>
                    <Col sm={6} className="d-grid">
                        <Button variant="secondaryDark" size="lg" as={Link} to="/journals" className="text-white py-2 mb-3">
                            Our journals <FontAwesomeIcon className="ps-3" icon={faArrowAltCircleRight}/>
                        </Button>
                    </Col>
                    <Col sm={6} className="d-grid">
                        <Button variant="secondaryDark" size="lg" as={Link} to="/publish-research" className="text-white py-2 mb-3">
                            Publish with us <FontAwesomeIcon className="ps-3" icon={faArrowAltCircleRight}/>
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Banner;