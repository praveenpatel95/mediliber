import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";

function IndexingSlider(props){
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6,
            partialVisibilityGutter: 40,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="">
            <Container className="py-5" >
                <Row>
                    <Col sm={12}>
                        <h2 className="text-center mb-3">Indexing and Services</h2>
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
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={2000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        deviceType={props.deviceType}
                        itemClass="carousel-item-padding-40-px"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 2, 4].map((journal, index) => (
                            <div >
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/indexing/${journal}.png`}
                                       style={{height:'70px', width:'150px'}}
                                />
                            </div>
                        ))}
                    </Carousel>
                </Row>
            </Container>

        </section>
    )
}
export default IndexingSlider;