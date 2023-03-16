import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/fontawesome-free-solid";
import JournalCardSimple from "../../../../components/JournalCardSimple";
import {Link} from "react-router-dom";
import JournalMetrics from "../../../../components/JournalMetrics";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function LatestJournal(props) {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            partialVisibilityGutter: 40,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="bg-grey-lime">
            <Container className="py-5" fluid>
                <Row>
                    <Col sm={6}>
                        <h2>Featured Journals
                        </h2>
                    </Col>
                    <Col sm={6}>
                        <Link to="/journals" className="float-end btn btn-outline-dark">Explore our all
                            journals <FontAwesomeIcon
                                icon={faArrowRight}/></Link>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={100}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {[2, 3, 4, 5, 6, 7, 8].map((journal, index) => (
                            <div className="me-3">
                                <JournalCardSimple journal={journal}/>
                            </div>
                        ))}
                    </Carousel>
                </Row>
            </Container>

        </section>
    )
}

export default LatestJournal;