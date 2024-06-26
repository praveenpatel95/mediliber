import React, {useEffect} from "react";
import {Card, Col, Container, Placeholder, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/fontawesome-free-solid";
import JournalCardSimple from "../../../../components/JournalCardSimple";
import {Link} from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {journalFeaturedList} from "../../../../stores/Common/Journal/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader from "../../../../components/Loader";

function LatestJournal({getFeaturedJournals, deviceType}) {
    //const {getFeaturedJournals} = props.getFeaturedJournals;
    useEffect(() => {
        getFeaturedJournals();
    }, []);

    const {isJournalFeaturedListFetching, journalFeaturedList} =
        useSelector(state => state?.CommonJournalReducer);

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
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
                        <h2>Featured Journals</h2>
                    </Col>
                    <Col sm={6}>
                        <Link to="/journals" className="float-end btn btn-outline-dark">Explore our all
                            journals <FontAwesomeIcon
                                icon={faArrowRight}/></Link>
                    </Col>
                </Row>

                <Row className="mt-3">
                    {isJournalFeaturedListFetching ?
                        <Row>
                            {[1, 2, 3].map((data, key) => (
                                <Col sm={4} key={key}>
                                    <Card style={{width: '18rem'}}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6}/>
                                        </Placeholder>
                                        <Card.Img variant="top" src={`${process.env.PUBLIC_URL + "/holder_img.svg"}`}
                                                  style={{height: '40px'}}/>
                                        <Card.Body>
                                            <Placeholder as={Card.Text} animation="glow">
                                                <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder xs={4}/>{' '}
                                                <Placeholder xs={6}/> <Placeholder xs={8}/>
                                                <Placeholder xs={6}/> <Placeholder xs={8}/>
                                            </Placeholder>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        :

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
                            deviceType={deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {journalFeaturedList?.length && journalFeaturedList?.map((journal, index) => (
                                <div className="me-3" key={journal?.id}>
                                    <JournalCardSimple journal={journal}/>
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
        getFeaturedJournals: () => dispatch(journalFeaturedList())
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(LatestJournal);