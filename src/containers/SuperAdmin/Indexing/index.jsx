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
import {indexingDelete, indexingList} from "../../../stores/SuperAdmin/Indexing/actions";
import DeleteModal from "../../../components/DeleteModal";

function Indexing({getIndexingList, deleteIndexing}) {
    const {
        isIndexingListFetching,
        isIndexingListFetchingError,
        indexingList,
        isIndexingDeleting,
        isIndexingDeletingError,
        isIndexingDeleted
    } = useSelector(state => state?.IndexingReducer);

    useEffect(() => {
        getIndexingList();
    }, []);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteIndexing({id: deleteId})
    }

    useEffect(() => {
        if(isIndexingDeleted){
            getIndexingList();
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isIndexingDeleted]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Indexings</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Indexings</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/indexing/create"><FontAwesomeIcon
                        icon={faPlusCircle}/> Add New Indexing</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        {isIndexingListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {indexingList?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Indexing Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {indexingList?.map((indexing, index) => (
                                            <tr key={indexing?.id}>
                                                <td>{++index}</td>
                                                <td><img src={indexing?.image} width={100}/></td>
                                                <td>{indexing?.name}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/super-admin/indexing/edit/${indexing?.id}`}
                                                            variant="info" size="sm"><FontAwesomeIcon
                                                        icon={faPencilAlt}/></Button>
                                                    &nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => handleDelete(indexing?.id)}
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

                        {isIndexingListFetchingError && <p>{isIndexingListFetchingError}</p>}
                    </Container>
                </section>
            </main>
            <DeleteModal
                title="Delete Indexing"
                setDeleteId={setDeleteId}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                deleteAction={deleteAction}
                isDeleting={isIndexingDeleting}
                isDeletingError={isIndexingDeletingError}
            />
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getIndexingList: (data) => dispatch(indexingList(data)),
        deleteIndexing: (data) => dispatch(indexingDelete(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Indexing);
