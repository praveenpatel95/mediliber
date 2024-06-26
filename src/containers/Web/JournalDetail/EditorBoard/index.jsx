import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import SidebarSection from "../Common/SidebarSection";
import {getJournalEditorialBoard} from "../../../../stores/Common/Journal/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Content from "./Content";

function JournalEditorBoard({getEditorialBoardList}) {
    let {journalSlug} = useParams();
    useEffect(() => {
        if (journalSlug) {
            getEditorialBoardList(journalSlug);
        }
    }, [journalSlug]);

    const {
        journalDetail
    } = useSelector(state => state?.CommonJournalReducer);
    return (
        <HelmetProvider>
            <Helmet>
                <title> {`${journalDetail?.name ? journalDetail?.name :''} editorial board`}</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/journal/${journalSlug}`}}>{journalDetail?.name}</Breadcrumb.Item>
                            <Breadcrumb.Item active>Editorial Board</Breadcrumb.Item>
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
        getEditorialBoardList: (slug) => dispatch(getJournalEditorialBoard(slug)),
    }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(JournalEditorBoard);