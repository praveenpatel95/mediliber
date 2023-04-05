import React, {useEffect} from "react";
import {Col, Container, Image, Placeholder, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import {getIndexingList} from "../../stores/Common/Indexing/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader1 from "../Loader1";
import {faDivide} from "@fortawesome/fontawesome-free-solid";

function IndexingSlider({getIndexing, deviceType}) {
    useEffect(() => {
        getIndexing();
    }, []);

    const {
        isIndexingListFetching,
        isIndexingListFetchingError,
        indexingList
    } = useSelector(state => state?.WebIndexingReducer);
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
            <Container className="py-5">
                <Row>
                    <Col sm={12}>
                        <h2 className="text-center mb-3">Indexing and Services</h2>
                    </Col>
                </Row>

                <Row className="mt-3">

                    {isIndexingListFetching ?
                        <Row>
                            {[1, 2, 3, 4, 5, 6].map((data) => (
                               <Col sm={2}>
                                   <Placeholder as="p" animation="glow">
                                       <Placeholder style={{height: '70px', width: '150px'}}/>
                                   </Placeholder>
                               </Col>
                            ))}
                        < /Row>
                        :
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
                            deviceType={deviceType}
                            itemClass="carousel-item-padding-40-px"
                        >
                            {indexingList?.map((indexing) => (
                                <div key={indexing?.id}>
                                    <Image src={indexing?.image}
                                           alt={indexing?.name}
                                           style={{height: '70px', width: '150px'}}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    }
                </Row>
            </Container>

        </section>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getIndexing: () => dispatch(getIndexingList())
    }
}

const withConnect = connect(null, mapDispatchToProps)
export default compose(withConnect)(IndexingSlider);