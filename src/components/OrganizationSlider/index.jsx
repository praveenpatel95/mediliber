import React, {useEffect} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import {getOrganizationList} from "../../stores/Common/Organization/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader1 from "../Loader1";

function OrganizationSlider({getOrganization, deviceType}) {
    useEffect(() => {
        getOrganization();
    }, []);

    const {
        isOrganizationListFetching,
        isOrganizationListFetchingError,
        organizationList
    } = useSelector(state => state?.WebOrganizationReducer);
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 8,
            partialVisibilityGutter: 40,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="">
            <Container className="py-5">
                <Row>
                    <Col sm={12}>
                        <h2 className="text-center mb-3">Recently Connected Organization</h2>
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
                        deviceType={deviceType}
                        itemClass="carousel-item-padding-40-px"
                    >
                        {isOrganizationListFetching ?
                            <div className="text-center">
                                <Loader1/>
                            </div>
                            : organizationList?.map((organization) => (
                                <div key={organization?.id}>
                                    <Image src={organization?.image}
                                           alt={organization?.name}
                                           style={{height: '50px', width: '120px'}}
                                    />
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
        getOrganization: () => dispatch(getOrganizationList())
    }
}

const withConnect = connect(null, mapDispatchToProps)
export default compose(withConnect)(OrganizationSlider);