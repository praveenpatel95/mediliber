import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import EditorCard from "../EditorCard";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {getRecentEditorialBoard} from "../../stores/Common/Journal/actions";
import Loader1 from "../Loader1";

function RecentEditorsSlider({getEditroial, deviceType}) {
    useEffect(() => {
        getEditroial();
    }, []);

    const {
        isRecentEditorialBoardFetching,
        isRecentEditorialBoardFetchingError,
        recentEditorialBoards
    } = useSelector(state => state?.CommonJournalReducer);

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5,
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
                        deviceType={deviceType}
                        itemClass=""
                    >
                        {isRecentEditorialBoardFetching ?
                            <div className="text-center">
                                <Loader1/>
                            </div>
                            : recentEditorialBoards?.map((editor) => (
                            <div className="me-4" key={editor?.id}>
                                <EditorCard editor={editor}/>
                            </div>
                        ))}
                    </Carousel>
                </Row>
            </Container>

        </section>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getEditroial: () => dispatch(getRecentEditorialBoard())
    }
}

const withConnect = connect(null, mapDispatchToProps)
export default compose(withConnect)(RecentEditorsSlider);
