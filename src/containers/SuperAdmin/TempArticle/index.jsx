import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faPlusCircle, faTrash} from "@fortawesome/fontawesome-free-solid";
import Loader from "../../../components/Loader";
import {connect, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {compose} from "redux";
import DeleteModal from "../../../components/DeleteModal";
import {tempArticleDelete, tempArticleList} from "../../../stores/SuperAdmin/TempArticle/actions";

function TempArticle({getTempArticleList, deleteTempArticle}) {
    const {
        isTempArticleListFetching,
        isTempArticleListFetchingError,
        tempArticles,
        isTempArticleDeleting,
        isTempArticleDeletingError,
        isTempArticleDeleted
    } = useSelector(state => state?.TempArticleReducer);

    useEffect(() => {
        getTempArticleList();
    }, []);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteTempArticle({id: deleteId})
    }

    useEffect(() => {
        if(isTempArticleDeleted){
            getTempArticleList();
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isTempArticleDeleted]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Temp Articles</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>TempArticles</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/temp-article/create"><FontAwesomeIcon
                        icon={faPlusCircle}/> Add New TempArticle</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        {isTempArticleListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {tempArticles?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Article Link</th>
                                            <th>Journal Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tempArticles?.map((tempArticle, index) => (
                                            <tr key={tempArticle?.id}>
                                                <td>{++index}</td>
                                                <td><img src={tempArticle?.image} width={100}/></td>
                                                <td>{tempArticle?.article_title}</td>
                                                <td>{tempArticle?.journal_name}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/super-admin/temp-article/edit/${tempArticle?.id}`}
                                                            variant="info" size="sm"><FontAwesomeIcon
                                                        icon={faPencilAlt}/></Button>
                                                    &nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => handleDelete(tempArticle?.id)}
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

                        {isTempArticleListFetchingError && <p>{isTempArticleListFetchingError}</p>}
                    </Container>
                </section>
            </main>
            <DeleteModal
                title="Delete TempArticle"
                setDeleteId={setDeleteId}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                deleteAction={deleteAction}
                isDeleting={isTempArticleDeleting}
                isDeletingError={isTempArticleDeletingError}
            />
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getTempArticleList: (data) => dispatch(tempArticleList(data)),
        deleteTempArticle: (data) => dispatch(tempArticleDelete(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(TempArticle);
