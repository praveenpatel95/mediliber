import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Filter from "./Filter";
import JournalCard from "./JournalCard";
import {journalList} from "../../../stores/Common/Journal/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader from "../../../components/Loader";

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
                                <div className="text-center" my-5>
                                    <Loader/>
                                </div>
                                : journals?.length > 0 ?
                                    <Row xs={1} md={2} className="g-4">
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