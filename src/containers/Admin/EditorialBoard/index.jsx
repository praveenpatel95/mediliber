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
import {editorialBoardDelete, editorialBoardList} from "../../../stores/Admin/EditorialBoard/actions";

function EditorialBoard({getEditorialBoard, deleteEditorialBoard}) {
    const {
        isEditorialBoardListFetching,
        isEditorialBoardListFetchingError,
        editorialBoards,
        isEditorialBoardDeleted,
        isEditorialBoardDeleting,
        isEditorialBoardDeletingError
    } = useSelector(state => state?.AdminEditorialBoardReducer);

    useEffect(() => {
        getEditorialBoard();
    }, []);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteEditorialBoard({id: deleteId})
    }

    useEffect(() => {
        if(isEditorialBoardDeleted){
            getEditorialBoard();
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isEditorialBoardDeleted]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Editorial Board</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Editorial Board</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/admin/editorial-board/create"><FontAwesomeIcon
                        icon={faPlusCircle}/> Add New Editorial Board</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        {isEditorialBoardListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {editorialBoards?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Mobile No</th>
                                            <th>Member No</th>
                                            <th>Affiliation</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {editorialBoards?.map((editorial, index) => (
                                            <tr key={editorial?.id}>
                                                <td>{++index}</td>
                                                <td><img src={editorial?.photo} height={50}/></td>
                                                <td>{editorial?.first_name +" "+editorial?.last_name}</td>
                                                <td>{editorial?.mobile_no}</td>
                                                <td>{editorial?.member_no}</td>
                                                <td>{editorial?.affiliation}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/admin/editorial-board/edit/${editorial?.id}`}
                                                            variant="info" size="sm"><FontAwesomeIcon
                                                        icon={faPencilAlt}/></Button>
                                                    &nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => handleDelete(editorial?.id)}
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

                        {isEditorialBoardListFetchingError && <p>{isEditorialBoardListFetchingError}</p>}
                    </Container>
                </section>
            </main>
            <DeleteModal
                title="Delete Editorial Board"
                setDeleteId={setDeleteId}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                deleteAction={deleteAction}
                isDeleting={isEditorialBoardDeleting}
                isDeletingError={isEditorialBoardDeletingError}
            />
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getEditorialBoard: (data) => dispatch(editorialBoardList(data)),
        deleteEditorialBoard: (data) => dispatch(editorialBoardDelete(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(EditorialBoard);
