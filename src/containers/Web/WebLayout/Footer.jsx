import React, {useEffect} from "react";
import {Col, Container, Nav, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faLinkedin, faSquareYoutube,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {getWebSetting} from "../../../stores/Common/WebSetting/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";

function Footer({getDetail}) {
    useEffect(() => {
        getDetail();
    }, []);

    const {
        webSettingDetail,
    } = useSelector(state => state?.WebSettingReducer);

    return (
        <footer className="bg-theme-color text-white footer ">
            <Container className="pt-5">
                <Row>
                    <Col sm="2">
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm="2">
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/authors">Authors</Nav.Link>
                            <Nav.Link as={Link} to="/editors">Editors</Nav.Link>
                            <Nav.Link as={Link} to="/reviewers">Reviewers</Nav.Link>
                            <Nav.Link as={Link} to="/publishing-partnerships">Partnerships</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm="3">
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/journals">Journals</Nav.Link>
                            <Nav.Link as={Link} to="/article-publication-charges">Article Processing Charges</Nav.Link>
                            <Nav.Link as={Link} to="/print-editions">Print editions</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm="3">
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/privacy-policy">Privacy Policy</Nav.Link>
                            <Nav.Link as={Link} to="/terms-of-services">Terms of Service</Nav.Link>
                            <Nav.Link as={Link} to="/responsible-disclosure-policy">Responsible Disclosure Policy</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm="2" className="social_media_links">
                        <h4 className="text-white">Follow us: </h4>
                        <Nav>
                            <Nav.Link href={webSettingDetail?.fb_link} target="_blank"><FontAwesomeIcon className="fa-2x" icon={faFacebookSquare}/> </Nav.Link>
                            <Nav.Link href={webSettingDetail?.twitter_link} target="_blank"><FontAwesomeIcon className="fa-2x" icon={faTwitterSquare}/></Nav.Link>
                            <Nav.Link href={webSettingDetail?.linkedin_link} target="_blank"><FontAwesomeIcon className="fa-2x" icon={faLinkedin}/></Nav.Link>
                            <Nav.Link href={webSettingDetail?.youtube_link} target="_blank"><FontAwesomeIcon className="fa-2x" icon={faSquareYoutube}/></Nav.Link>
                        </Nav>

                    </Col>
                </Row>
                <hr/>



            </Container>
            <div className="text-center pb-3 mx-5 px-5">
                <img src="http://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png" alt="creativecommons" width="100"/><br />
                This work is licensed under a <a href="https://creativecommons.org/" target="_blank"><b>Creative Commons Attribution-Share Alike 4.0</b></a> International License. <br />Copyright @ 2023 MedLiber Publishing Group, All Rights Reserved.
            </div>

        </footer>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getDetail: (data) => dispatch(getWebSetting(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Footer);
