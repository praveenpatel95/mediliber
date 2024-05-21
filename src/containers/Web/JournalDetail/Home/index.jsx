import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import {Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReadme,} from "@fortawesome/free-brands-svg-icons";
import {faArrowRight, faSnowflake, faUsers} from "@fortawesome/fontawesome-free-solid";
import Banner from "./Banner";
import AsideList from "../Common/AsideList";
import LatestArticle from "../../Home/LatestArticle";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import Loader from "../../../../components/Loader";

function JournalDetailHome() {
    let {journalSlug} = useParams();

    const {isJournalDetailFetching, isJournalDetailFetchingError, journalDetail} =
        useSelector(state => state?.CommonJournalReducer);

    return (
        <HelmetProvider>
            <Helmet>
                <title>{journalDetail?.page?.page_name}</title>
            </Helmet>
            <main>
                {isJournalDetailFetching ?
                    <div className="my-5 text-center">
                        <Loader/>
                    </div>
                    : journalDetail?.id ?
                        <>
                            <Banner journalDetail={journalDetail}/>
                            <section className="py-5">
                                <Container>
                                    <Row>
                                        <Col sm={8}>
                                            <article className="mb-5">
                                                <h4><FontAwesomeIcon icon={faReadme}/> Journal profile</h4>
                                                <div className="divider-dashed mb-2"></div>

                                                <p>{journalDetail?.journal_profile}</p>
                                                <Link to={`/journal/${journalSlug}/about`} className="text-secondary">More
                                                    about
                                                    this journal <FontAwesomeIcon
                                                        icon={faArrowRight}/></Link>
                                            </article>

                                            <article className="mb-5">
                                                <h4><FontAwesomeIcon icon={faUsers}/> Editor spotlight</h4>
                                                <div className="divider-dashed mb-2"></div>

                                                <p>{journalDetail?.editor_spotlight}</p>
                                                <Link to={`/journal/${journalSlug}/editorial-board`} className="text-secondary">Editorial
                                                    board panel <FontAwesomeIcon
                                                        icon={faArrowRight}/></Link>
                                            </article>
                                            <article className="mb-5">
                                                <h4><FontAwesomeIcon icon={faSnowflake}/> Special Issues</h4>
                                                <div className="divider-dashed mb-2"></div>
                                                <p>{journalDetail?.special_issues}</p>
                                                <Link to="" className="text-secondary">Proposing a Special
                                                    Issue <FontAwesomeIcon
                                                        icon={faArrowRight}/></Link>
                                            </article>

                                        </Col>
                                        <Col sm={4}>
                                            <AsideList/>
                                        </Col>
                                    </Row>
                                </Container>

                            </section>
                            <LatestArticle/>
                        </>
                        :
                        isJournalDetailFetchingError &&
                        <div>{isJournalDetailFetchingError}</div>
                }
            </main>
        </HelmetProvider>)
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalDetailHome);
