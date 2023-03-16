import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import EditorCard from "../EditorCard";

function RecentEditorsSlider(props) {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
            partialVisibilityGutter: 40,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const editors = [
        {id: 1, name: 'Mr Jamin', education: 'Msc in computer science'},
        {id: 2, name: 'Miss Arima', education: 'MBBS, MD, (Pathlogy)'},
        {id: 3, name: 'Tarun Gupra', education: 'BBMS, ME, (Pathlogy)'},
        {id: 4, name: 'Lalin Verma', education: 'BDMS (Jaipur college)'},
        {id: 5, name: 'Praveen patel', education: 'ME (Udaipur college)'},
    ];

    return (
        <section className="">
            <Container className="py-5">
                <Row>
                    <Col sm={12}>
                        <h2 className="text-center mb-3">Recently joined board members</h2>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        customTransition="all .9"
                        transitionDuration={5000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={props.deviceType}
                        itemClass=""
                    >
                        {editors.map((editor, index) => (
                            <div className="me-3">
                                <EditorCard editor={editor}/>
                            </div>
                        ))}
                    </Carousel>
                </Row>
            </Container>

        </section>
    )
}

export default RecentEditorsSlider;