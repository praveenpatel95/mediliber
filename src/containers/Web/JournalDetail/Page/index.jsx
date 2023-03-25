import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import SidebarSection from "../Common/SidebarSection";
import AboutContent from "./Content";
import {getJournalPageDetail} from "../../../../stores/Common/Journal/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader from "../../../../components/Loader";

function AboutJournal({getPageDetail}) {
    let {journalSlug} = useParams();
    let {pageSlug} = useParams();
    useEffect(() => {
        if (pageSlug) {
            getPageDetail(pageSlug);
        }
    }, [pageSlug]);

    const {isJournalPageDetailFetching, isJournalPageDetailFetchingError, journalPageDetail, journalDetail}
        = useSelector(state => state?.CommonJournalReducer);

    return (
        <HelmetProvider>
            <Helmet>
                <title>{journalPageDetail?.page?.page_name}</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/journal/${journalDetail?.slug}`}}>{journalDetail?.name}</Breadcrumb.Item>
                            <Breadcrumb.Item active>{journalPageDetail?.page?.page_name}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container fluid>
                        {isJournalPageDetailFetching ?
                            <div className="my-5 text-center">
                                <Loader />
                            </div>
                            : journalPageDetail?.id ?
                                <Row>
                                    <Col sm={9}>
                                        <AboutContent journalPageDetail={journalPageDetail}/>
                                    </Col>
                                    <Col sm={3}>
                                        <SidebarSection/>
                                    </Col>
                                </Row>
                                : isJournalPageDetailFetchingError &&
                                <h4 className="text-danger text-center">{isJournalPageDetailFetchingError}</h4>
                        }


                    </Container>
                </section>
            </main>
        </HelmetProvider>


    )
}

function mapDispatchToProps(dispatch) {
    return {
        getPageDetail: (slug) => dispatch(getJournalPageDetail(slug))
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(AboutJournal);