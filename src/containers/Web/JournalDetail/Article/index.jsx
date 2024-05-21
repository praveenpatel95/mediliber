import {Helmet} from "react-helmet";
import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {connect, useSelector} from "react-redux";
import ArticleBox from "../../../../components/ArticleBox";
import {compose} from "redux";
import {webJournalArticleList} from "../../../../stores/Common/Article/actions";
import Loader from "../../../../components/Loader";
import Volume from "./Volume";

function JournalArticle({getJournalArticles}) {
    let {journalSlug, articleMode} = useParams();
    const {
        journalDetail
    } = useSelector(state => state?.CommonJournalReducer);

    useEffect(() => {
        if (journalDetail?.id) {
            getJournalArticles({
                journalId: journalDetail.id,
                articleMode
            });
        }

    }, [journalDetail?.id, articleMode]);

    const {
        isJournalArticleListFetching,
        isJournalArticleListFetchingError,
        articles
    } = useSelector(state => state?.WebJournalArticleReducer)

    return (
        <HelmetProvider>
            <Helmet>
                <title>Article {articleMode}</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/journal/${journalSlug}`}}>{journalDetail?.name}</Breadcrumb.Item>
                            <Breadcrumb.Item active>Article {articleMode}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container fluid>
                        <Row>
                            <Col sm={9}>
                                {isJournalArticleListFetching ?
                                    <div className="text-center my-5">
                                        <Loader/>
                                    </div>
                                    : <>
                                        {articles?.length > 0 ?
                                            articles?.map((articlePublished, index) => (
                                                <ArticleBox
                                                    articlePublished={articlePublished}
                                                    key={index}
                                                    journalSlug={journalSlug}
                                                    journalDetail={journalDetail}
                                                />
                                            ))
                                            :
                                            <h4 className="">No data found.</h4>
                                        }
                                    </>
                                }
                                <>
                                    {isJournalArticleListFetchingError &&
                                        <h4 class="text-danger">{isJournalArticleListFetchingError}</h4>
                                    }
                                </>
                            </Col>
                            <Col sm={3}>
                                {journalDetail?.id &&
                                    <Volume
                                        journal={journalDetail}
                                        journalSlug={journalSlug}
                                    />
                                }
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
        getJournalArticles: (data) => dispatch(webJournalArticleList(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalArticle);
