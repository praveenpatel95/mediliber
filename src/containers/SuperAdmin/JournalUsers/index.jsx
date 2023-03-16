import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faTrash} from "@fortawesome/fontawesome-free-solid";
import Loader from "../../../components/Loader";
import {connect, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {compose} from "redux";
import {journalUserDelete, journalUsers} from "../../../stores/JournalUsers/actions";
import DeleteModal from "../../../components/DeleteModal";

function JournalUsers({getJournalUsers, deleteJournalUser}) {
    useEffect(() => {
        getJournalUsers();
    }, []);
    const {
        isJournalUsersFetching,
        isJournalUsersFetchingError,
        accessUsers,
        isJournalUserDeleted,
        isJournalUserDeleting,
        isJournalUserDeletingError
    } = useSelector(state => state?.JournalUserReducer);

    //Delete user
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteJournalUser({id: deleteId})
    }

    useEffect(() => {
        if(isJournalUserDeleted){
            getJournalUsers();
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isJournalUserDeleted]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Journal Access Users</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Journal Access Users</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/journal/access/user/create"><FontAwesomeIcon
                        icon={faPlusCircle}/> Add New User</Button>
                </Container>

                <section className="my-4">
                    <Container>
                        {isJournalUsersFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {accessUsers?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>User Name</th>
                                            <th>Email ID</th>
                                            <th>Journal Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {accessUsers?.map((accessUser, index) => (
                                            <tr key={accessUser?.id}>
                                                <td>{++index}</td>
                                                <td>{accessUser?.user?.name}</td>
                                                <td>{accessUser?.user?.email}</td>
                                                <td>{accessUser?.journal?.name}</td>
                                                <td>

                                                    <Button variant="danger"
                                                            onClick={() => handleDelete(accessUser?.id)}
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

                        {isJournalUsersFetchingError && <p>{isJournalUsersFetchingError}</p>}
                    </Container>
                </section>
            </main>
            <DeleteModal
                title="Delete Journal Access User"
                setDeleteId={setDeleteId}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                deleteAction={deleteAction}
                isDeleting={isJournalUserDeleting}
                isDeletingError={isJournalUserDeletingError}
            />

        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournalUsers: (data) => dispatch(journalUsers(data)),
        deleteJournalUser: (data) => dispatch(journalUserDelete(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalUsers);
