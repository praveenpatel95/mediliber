import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import SidebarSection from "../Common/SidebarSection";
import {getJournalReviewerBoard} from "../../../../stores/Common/Journal/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Content from "./Content";

function JournalReviewerBoard({getReviewerBoardList}) {
    let {journalSlug} = useParams();
    useEffect(() => {
        if (journalSlug) {
            getReviewerBoardList(journalSlug);
        }
    }, [journalSlug]);

    const {
        journalDetail
    } = useSelector(state => state?.CommonJournalReducer);
    return (
        <HelmetProvider>
            <Helmet>
                <title> {`${journalDetail?.name ? journalDetail?.name :''} reviewer board`}</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/journal/${journalSlug}`}}>{journalDetail?.name}</Breadcrumb.Item>
                            <Breadcrumb.Item active>Reviewer Board</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container fluid>
                        <Row>
                            <Col sm={9}>
                                <Content/>
                            </Col>
                            <Col sm={3}>
                                <SidebarSection/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </HelmetProvider>


    )
}

function mapDispatchToProps(dispatch) {
    return {
        getReviewerBoardList: (slug) => dispatch(getJournalReviewerBoard(slug)),
    }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(JournalReviewerBoard);