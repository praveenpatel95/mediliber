import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faPlusCircle, faTrash} from "@fortawesome/fontawesome-free-solid";
import {Link} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    journalCategoryDelete,
    journalCategoryList
} from "../../../stores/JournalCategory/actions";
import {compose} from "redux";
import DeleteModal from "../../../components/DeleteModal";
import Loader from "../../../components/Loader";

function JournalCategory({getJournalCategoryList, deleteJournalCategory}) {

    const {
        isJournalCategoryListFetching,
        isJournalCategoryListFetchingError,
        journalCategories,
        isJournalCategoryDeleted,
        isJournalCategoryDeleting,
        isJournalCategoryDeletingError,
    } = useSelector(state => state?.JournalCategoryReducer);

    useEffect(() => {
        getJournalCategoryList();
    }, []);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteJournalCategory({id: deleteId})
    }

    useEffect(() => {
        if(isJournalCategoryDeleted){
            getJournalCategoryList();
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isJournalCategoryDeleted]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Journal Categories</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Journal Categories</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/journal-category/create"><FontAwesomeIcon
                        icon={faPlusCircle}/> Add New Category</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        {isJournalCategoryListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {journalCategories?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Category Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {journalCategories?.map((category, index) => (
                                            <tr key={category?.id}>
                                                <td>{++index}</td>
                                                <td>{category?.category_name}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/super-admin/journal-category/edit/${category?.id}`}
                                                            variant="info" size="sm"><FontAwesomeIcon
                                                        icon={faPencilAlt}/></Button>
                                                    &nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => handleDelete(category?.id)}
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

                        {isJournalCategoryListFetchingError && <p>{isJournalCategoryListFetchingError}</p>}
                    </Container>
                </section>
            </main>
            <DeleteModal
                title="Delete Journal Category"
                setDeleteId={setDeleteId}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                deleteAction={deleteAction}
                isDeleting={isJournalCategoryDeleting}
                isDeletingError={isJournalCategoryDeletingError}
            />
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournalCategoryList: (data) => dispatch(journalCategoryList(data)),
        deleteJournalCategory: (data) => dispatch(journalCategoryDelete(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalCategory);