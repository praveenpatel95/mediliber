import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Badge, Breadcrumb, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPlusCircle, faTrash} from "@fortawesome/fontawesome-free-solid";
import Loader from "../../../components/Loader";
import {connect, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {articleAdminDelete, getJournalArticleList} from "../../../stores/Admin/Article/actions";
import moment from "moment/moment";
import DeleteModal from "../../../components/DeleteModal";

function JournalArticles({getJournalArticleList, deleteArticle}) {
    const [filterStatus, setFilterStatus] = useState('');
    useEffect(() => {
        getJournalArticleList(filterStatus);
    }, [filterStatus]);

    const {
        isJournalArticleListFetching,
        isJournalArticleListFetchingError,
        articles,
        isArticleDeleting,
        isArticleDeletingError,
        isArticleUpdated,
    } = useSelector(state => state?.JournalArticleReducer);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteArticle({id: deleteId})
    }

    useEffect(() => {
        if (isArticleUpdated) {
            getJournalArticleList(filterStatus);
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isArticleUpdated]);


    return (
        <HelmetProvider>
            <Helmet>
                <title>Articles</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Articles</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <select onChange={e => setFilterStatus(e.target.value)}>
                        <option value="">--Filter by Status--</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Review">In Review</option>
                        <option value="Published">Published</option>
                    </select>
                    <Button variant="primary" as={Link} to="/admin/article/create"><FontAwesomeIcon
                        icon={faPlusCircle}/> Add New Article</Button>

                </Container>
                <section className="my-4">
                    <Container>
                        {isJournalArticleListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {articles?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th width="25%">Title</th>
                                            <th>Article Type</th>
                                            <th>Submitted</th>
                                            <th>Authors</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {articles?.map((article, index) => (
                                            <tr key={article?.id}>
                                                <td>{++index}</td>
                                                <td>{
                                                    article?.status === "Published" ?
                                                        <Link className="text-info" to={`/admin/article/edit/${article?.id}`}>{article?.title}</Link>
                                                        :
                                                        article?.title
                                                }
                                                </td>
                                                <td>{article?.article_type}</td>
                                                <td>{moment(article?.created_at).format('DD-MMM-YYYY')}</td>
                                                <td>{
                                                    article?.article_authors?.map((articleAuthor, ind) => (
                                                        <small>{articleAuthor?.author?.first_name}
                                                            {articleAuthor?.is_main && <Badge bg="dark">CA</Badge>}
                                                            <br/></small>

                                                    ))
                                                }</td>
                                                <td><Badge bg="default"
                                                           className={article?.status}>{article?.status}</Badge></td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/admin/article/view/${article?.id}`}
                                                            variant="warning" size="sm"
                                                            title="View detail"><FontAwesomeIcon
                                                        icon={faEye}/></Button>
                                                    <Button variant="danger" className="ms-2"
                                                            onClick={() => handleDelete(article?.id)}
                                                            size="sm"><FontAwesomeIcon icon={faTrash}/></Button>
                                                </td>
                                            </tr>
                                        ))}

                                        </tbody>
                                    </Table>
                                    :
                                    <p>No data found</p>
                                }
                            </div>
                        }

                        {isJournalArticleListFetchingError && <p>{isJournalArticleListFetchingError}</p>}
                    </Container>
                </section>
                <DeleteModal
                    title="Delete Article"
                    setDeleteId={setDeleteId}
                    deleteModal={deleteModal}
                    setDeleteModal={setDeleteModal}
                    deleteAction={deleteAction}
                    isDeleting={isArticleDeleting}
                    isDeletingError={isArticleDeletingError}
                />
            </main>

        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournalArticleList: (data) => dispatch(getJournalArticleList(data)),
        deleteArticle: (data) => dispatch(articleAdminDelete(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalArticles);
