import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Col, Container, Row} from "react-bootstrap";
import BlogCard from "../../../../components/BlogCard";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/fontawesome-free-solid";

function Blog(){
    return (
        <HelmetProvider>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <main>
                <section className="bg_green_light text-center py-4">
                    <h1>Blog</h1>
                    <h6>Read our latest blog posted by our expert people, and partners. </h6>
                </section>
                <section className="py-5">
                    <Container className="mb-5">
                        <Row>
                            <Col sm={8}>
                                <h2>Announcements</h2>
                            </Col>
                            <Col sm={4}>
                                <Link to="/journals" className="float-end btn btn-outline-dark">Read more <FontAwesomeIcon
                                        icon={faArrowRight}/></Link>
                            </Col>
                        </Row>
                        <Row xs={1} md={3} className="g-4">
                        {[1, 2, 3].map((blog, index) => (
                            <Col>
                                <BlogCard />
                            </Col>
                        ))
                        }
                        </Row>
                    </Container>
                    <Container className="mb-5">
                        <Row>
                            <Col sm={8}>
                                <h2>Open Science</h2>
                            </Col>
                            <Col sm={4}>
                                <Link to="/journals" className="float-end btn btn-outline-dark">Read more <FontAwesomeIcon
                                        icon={faArrowRight}/></Link>
                            </Col>
                        </Row>
                        <Row xs={1} md={3} className="g-4">
                        {[1, 2, 3].map((blog, index) => (
                            <Col>
                                <BlogCard />
                            </Col>
                        ))
                        }
                        </Row>
                    </Container>
                </section>
            </main>
        </HelmetProvider>
    )
}
export default Blog;