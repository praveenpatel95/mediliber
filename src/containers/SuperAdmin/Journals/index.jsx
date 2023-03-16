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
import {journalDelete, journalList} from "../../../stores/Journals/actions";
import DeleteModal from "../../../components/DeleteModal";

function Journals({getJournals, deleteJournal}) {
    const {
        isJournalListFetching,
        isJournalListFetchingError,
        journals,
        isJournalDeleting,
        isJournalDeletingError,
        isJournalDeleted
    } = useSelector(state => state?.JournalReducer);

    useEffect(() => {
        getJournals();
    }, []);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteJournal({id: deleteId})
    }

    useEffect(() => {
        if(isJournalDeleted){
            getJournals();
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isJournalDeleted]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Journals</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Journals</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/journal/create"><FontAwesomeIcon
                        icon={faPlusCircle}/> Add New Journal</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        {isJournalListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {journals?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Banner</th>
                                            <th>Journal Name</th>
                                            <th>Category</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {journals?.map((journal, index) => (
                                            <tr key={journal?.id}>
                                                <td>{++index}</td>
                                                <td><img src={journal?.banner} width={100}/></td>
                                                <td>{journal?.name}</td>
                                                <td>{journal?.journal_category?.category_name}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/super-admin/journal/edit/${journal?.id}`}
                                                            variant="info" size="sm"><FontAwesomeIcon
                                                        icon={faPencilAlt}/></Button>
                                                    &nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => handleDelete(journal?.id)}
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

                        {isJournalListFetchingError && <p>{isJournalListFetchingError}</p>}
                    </Container>
                </section>
            </main>
            <DeleteModal
                title="Delete Journal"
                setDeleteId={setDeleteId}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                deleteAction={deleteAction}
                isDeleting={isJournalDeleting}
                isDeletingError={isJournalDeletingError}
            />
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getJournals: (data) => dispatch(journalList(data)),
        deleteJournal: (data) => dispatch(journalDelete(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Journals);
