import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Badge, Breadcrumb, Button, Card, Col, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faCode, faFile, faFileAlt, faFilePdf, faTextHeight} from "@fortawesome/fontawesome-free-solid";
import {getJournalArticleDetail, getJournalArticleList} from "../../../../stores/Admin/Article/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import React, {useEffect, useState} from "react";
import moment from "moment";
import Loader from "../../../../components/Loader";
import UpdateArticleStatus from "./UpdateArticleStatus";

function ArticleView({getArticleDetail}) {
    let {articleId} = useParams();
    const {
        isJournalArticleDetailFetching,
        isJournalArticleDetailFetchingError,
        article,
    } = useSelector(state => state?.JournalArticleReducer);

    useEffect(() => {
        getArticleDetail(articleId)
    }, [articleId]);


    const [updateModalStatus, setUpdateModalStatus] = useState(false);
    const [updateStatus, setUpdateStatus] = useState('');
    const handleChangeStatus = (e) => {
        setUpdateModalStatus(true)
        setUpdateStatus(e)
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Article detail</title>
            </Helmet>
            {isJournalArticleDetailFetching ?
                <div className="my-5 py-5 text-center"><Loader/></div>
                :
                <main className="py-4">
                    <Container className="d-flex justify-content-between">
                        <div>
                            <Breadcrumb>
                                <Breadcrumb.Item linkAs={Link}
                                                 linkProps={{to: `/admin/dashboard`}}>Home</Breadcrumb.Item>
                                <Breadcrumb.Item linkAs={Link}
                                                 linkProps={{to: `/admin/articles`}}>Articles</Breadcrumb.Item>
                                <Breadcrumb.Item active>Article detail</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        {article?.status != "Published" &&
                            <select onChange={e => handleChangeStatus(e.target.value)}>
                                <option value="">--Select--</option>
                                {article?.status === "New" &&
                                    <option value="Accepted">Accepted</option>
                                }
                                <option value="Rejected">Rejected</option>
                                {article?.status != "New" &&
                                    <>
                                        <option value="Review">In Review</option>
                                        <option value="Published">Published</option>
                                    </>
                                }
                            </select>
                        }
                        <Button variant="default" as={Link} to="/admin/articles"><FontAwesomeIcon
                            icon={faArrowLeft}/>&nbsp;Back</Button>

                    </Container>
                    <section className="my-4">
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <Card>
                                        <Card.Body>
                                            <h5>{article?.title}</h5>
                                            <p>
                                                <b>Article Type</b><br/>
                                                {article?.article_type}
                                            </p>

                                            <p><b>Abstract:</b><br/>
                                                <span dangerouslySetInnerHTML={{__html: article?.abstract}}></span>
                                            </p>
                                            {article?.status === "Published" &&
                                                <div>
                                                    <table className="table table-bordered">
                                                        <tr>
                                                            <th>Received Date</th>
                                                            <th>Accepted Date</th>
                                                            <th>Published Date</th>
                                                        </tr>
                                                        <tr>
                                                            <td>{moment(article?.created_at).format('DD-MMM-YYYY')}</td>
                                                            <td>{moment(article?.article_published?.accepted_date).format('DD-MMM-YYYY')}</td>
                                                            <td>{moment(article?.article_published?.published_date).format('DD-MMM-YYYY')}</td>
                                                        </tr>
                                                    </table>
                                                    <p><b>Keywords:</b><br/>
                                                        {article?.article_published?.keyword}
                                                    </p>
                                                    <p><b>Reference:</b><br/>
                                                        <span
                                                            dangerouslySetInnerHTML={{__html: article?.article_published?.references}}></span>
                                                    </p>
                                                    <p>
                                                        <a href= {article?.article_published?.pdf} className="btn btn-danger text-white btn-sm"
                                                           target="_blank"><b><FontAwesomeIcon icon={faFilePdf}/> PDF File</b></a>
                                                        <a href= {article?.article_published?.full_text} className="btn btn-info text-white btn-sm ms-2"
                                                           target="_blank"><b><FontAwesomeIcon icon={faFile}/> Full Text</b></a>
                                                        <a href= {article?.article_published?.xml_path} className="btn btn-success text-white btn-sm ms-2"
                                                           target="_blank"><b><FontAwesomeIcon icon={faCode}/> XML</b></a>
                                                    </p>
                                                </div>
                                            }

                                            <p><b>Uploaded files</b><br/>
                                                <a href={article?.manuscript_path} className="text-success"
                                                   target="_blank"><b><FontAwesomeIcon icon={faFileAlt}/> Manuscript</b></a>

                                                {article?.cover_letter_path && <span><br/>
                                               <a href={article?.cover_letter_path} className="text-info"
                                                  target="_blank"><b><FontAwesomeIcon
                                                   icon={faFileAlt}/> Cover Letter</b></a>
                                           </span>
                                                }
                                                {article?.supplemental_files_path && <span><br/>
                                               <a href={article?.supplemental_files_path} className="text-warning"
                                                  target="_blank"><b><FontAwesomeIcon icon={faFileAlt}/> Supplemental Files</b></a>
                                           </span>
                                                }
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={4}>
                                    <Card>
                                        <Card.Header>
                                            {moment(article?.created_at).format('DD-MMM-YYYY')}
                                            <Badge bg="default"
                                                   className={`${article?.status} ms-4`}> {article?.status}</Badge>
                                        </Card.Header>
                                        <Card.Body>
                                            {article?.article_authors?.map((articleAuthor, index) => (
                                                <p key={articleAuthor?.id}>
                                                    {articleAuthor?.author?.first_name + " " + articleAuthor?.author?.last_name}<sup>{++index}</sup><br/>
                                                    {articleAuthor?.author?.affiliation}
                                                </p>
                                            ))}


                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                    </section>
                    {updateModalStatus &&
                        <UpdateArticleStatus
                            newStatus={updateStatus}
                            setUpdateModalStatus={setUpdateModalStatus}
                            updateModalStatus={updateModalStatus}
                            articleId={articleId}
                            getArticleDetail={getArticleDetail}
                        />
                    }
                </main>
            }
        </HelmetProvider>

    )
}

function mapDispatchToProps(dispatch) {
    return {
        getArticleDetail: (articleId) => dispatch(getJournalArticleDetail(articleId)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(ArticleView);
