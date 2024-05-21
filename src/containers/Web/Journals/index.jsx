import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Breadcrumb, Card, Col, Container, Placeholder, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Filter from "./Filter";
import JournalCard from "./JournalCard";
import {journalList} from "../../../stores/Common/Journal/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";

function Journals({getJournals}) {
    useEffect(() => {
        getJournals();
    }, []);

    const {
        journals,
        isJournalListFetching,
        isJournalListFetchingError
    } = useSelector(state => state?.CommonJournalReducer);


    return (
        <HelmetProvider>
            <Helmet>
                <title>Journals - Mediliber</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Journals</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>


                <Container fluid>
                    <Row>
                        <Col sm={3}>
                            <Filter getJournals={getJournals}/>
                        </Col>
                        <Col sm={9}>
                            <h2>Journals</h2>
                            {isJournalListFetching ?
                                <Row xs={1} md={2} className="g-4">
                                    {[1, 2, 3, 4].map((data) => (
                                        <Col>
                                            <Card>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={6}/>
                                                </Placeholder>
                                                <Card.Img variant="top"
                                                          src={`${process.env.PUBLIC_URL + "/holder_img.svg"}`}
                                                          style={{height: '40px'}}/>
                                                <Card.Body>
                                                    <Placeholder as={Card.Text} animation="glow">
                                                        <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder
                                                        xs={4}/>{' '}
                                                        <Placeholder xs={6}/> <Placeholder xs={8}/>
                                                        <Placeholder xs={6}/> <Placeholder xs={8}/>
                                                    </Placeholder>
                                                    <Placeholder.Button sm={12} as="button" animation="glow"/>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                                : journals?.length > 0 ?
                                    <Row xs={1} md={3} className="g-4">
                                        {journals?.map((journal, index) => (
                                            <Col>
                                                <JournalCard journal={journal}/>
                                            </Col>
                                        ))}
                                    </Row>
                                    :
                                    <h5 className="text-success">No any journal found.</h5>
                            }
                            {isJournalListFetchingError && <p className="text-danger">
                                {isJournalListFetchingError}</p>}
                        </Col>
                    </Row>
                </Container>
            </main>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournals: (data) => dispatch(journalList(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Journals);