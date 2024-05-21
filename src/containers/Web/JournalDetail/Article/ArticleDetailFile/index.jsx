import {Link, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {HelmetProvider} from "react-helmet-async";
import {webArticleFileDetail} from "../../../../../stores/Common/Article/actions";
import {compose} from "redux";
import Loader from "../../../../../components/Loader";

function ArticleDetailFile({getArticleFileDetail}) {
    let {fileId, journalSlug} = useParams();
    const {
        journalDetail
    } = useSelector(state => state?.CommonJournalReducer);

    useEffect(() => {
        getArticleFileDetail(fileId);
    }, [fileId]);

    const {
        isArticleFileDetailFetching,
        isArticleFileDetailFetchingError,
        articleFileDetail,
    } = useSelector(state => state?.WebJournalArticleReducer);


    return (
        <HelmetProvider>
            <Helmet>
                <title>Article File</title>
            </Helmet>
            <main className="py-3 mb-5">
                <Container fluid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/journal/${journalSlug}`}}>{journalDetail?.name}</Breadcrumb.Item>
                            <Breadcrumb.Item active>Article No: {articleFileDetail?.article_id}</Breadcrumb.Item>
                            <Breadcrumb.Item active>Article {articleFileDetail?.type}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
                <section>
                    <Container>
                        <Row>
                            {isArticleFileDetailFetching ?
                                <Loader/>
                                :
                                <Col className="col-sm-10 m-auto">
                                    <h6>{articleFileDetail?.article?.article_type}</h6>
                                    <h2>{articleFileDetail?.article?.title}</h2>
                                    <Card className="p-5">
                                        <div>
                                            <h6>{articleFileDetail?.title}</h6>
                                            <img src={articleFileDetail?.file_path}
                                                 className="img-fluid img-thumbnail"/>
                                        </div>
                                    </Card>
                                </Col>
                            }
                        </Row>
                    </Container>
                </section>
            </main>

        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getArticleFileDetail: (data) => dispatch(webArticleFileDetail(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(ArticleDetailFile);

