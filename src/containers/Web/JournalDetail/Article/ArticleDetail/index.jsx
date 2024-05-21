import {Link, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Breadcrumb, Col, Container, ListGroup, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {HelmetProvider} from "react-helmet-async";
import {connect, useSelector} from "react-redux";
import {webJournalArticleDetail} from "../../../../../stores/Common/Article/actions";
import {compose} from "redux";
import Loader from "../../../../../components/Loader";
import ArticleDetailContent from "./Content";
import ArticleSidebarSection from "./ArticleSidebarSection";

function ArticleDetail({getArticleDetail}) {
    let {journalSlug, articleId} = useParams();
    const {
        journalDetail
    } = useSelector(state => state?.CommonJournalReducer);

    useEffect(() => {
        getArticleDetail({articleId})
    }, [articleId]);

    const {
        isJournalArticleFetching,
        article
    } = useSelector(state => state?.WebJournalArticleReducer)

    return (
        <HelmetProvider>
            <Helmet>
                <title>{article?.article?.title}</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/journal/${journalSlug}`}}>{journalDetail?.name}</Breadcrumb.Item>
                            <Breadcrumb.Item active>Article {article?.article_mode}</Breadcrumb.Item>
                            <Breadcrumb.Item active>{article?.article?.title}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container fluid>
                        <Row>
                            <Col sm={3}>
                                <ListGroup className="simple-list ">
                                    <ListGroup.Item className="fw-bold">On this Page</ListGroup.Item>
                                    <ListGroup.Item as="a" href={`#content-abstract`}>Abstract</ListGroup.Item>
                                    <ListGroup.Item as="a" href={`#content-keywords`}>Keywords</ListGroup.Item>
                                    {article?.article_published_content?.map((content, index) => (
                                        <ListGroup.Item as="a"
                                                        href={`#content-${content.id}`}>{content?.title}</ListGroup.Item>
                                    ))}
                                    <ListGroup.Item as="a" href={`#content-reference`}>Reference</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={6}>
                                {isJournalArticleFetching ?
                                    <div className="text-center my-5">
                                        <Loader/>
                                    </div>
                                    : article ?
                                        <>
                                            <ArticleDetailContent articlePublished={article}/>
                                        </>
                                        :
                                        <h4 className="">No data found.</h4>
                                }
                            </Col>
                            <Col sm={3}>
                                {article?.id &&
                                <ArticleSidebarSection articlePublished={article}/>
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
        getArticleDetail: (data) => dispatch(webJournalArticleDetail(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(ArticleDetail);
