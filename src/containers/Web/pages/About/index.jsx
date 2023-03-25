import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import HeadBanner from "./HeadBanner";
import {Col, Container, Image, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
} from "@fortawesome/fontawesome-free-solid";
import JoinSection from "../../../../components/JoinSection";

function AboutUs() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>About us</title>
            </Helmet>
            <main>
                <HeadBanner/>
                <section className="py-5 ">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <h2>Our mission</h2>
                                <p className="py-4">By placing the research community at the heart of everything we do, we strive for
                                    a future where researchers are motivated to work together, empowered with the
                                    tools and services they need to do so, and freed from any barriers that stand in
                                    their way. We aim to maximize the impact of scientific research through openness
                                    and global collaboration as we truly believe that science works best when
                                    research is open.</p>
                            </Col>
                            <Col sm={6}>
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/mission.png`}/>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <JoinSection />
                <section className="bg-secondaryDark py-3 text-center">
                    <a href="mailto:info@mediliber.com" className="btn btn-dark py-3 px-5 text-white">Get in touch</a>
                </section>

            </main>
        </HelmetProvider>
    )
}

export default AboutUs;