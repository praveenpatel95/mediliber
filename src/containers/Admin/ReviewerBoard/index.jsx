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
import {reviewerBoardDelete, reviewerBoardList} from "../../../stores/Admin/ReviewerBoard/actions";

function ReviewerBoard({getReviewerBoard, deleteReviewerBoard}) {
    const {
        isReviewerBoardListFetching,
        isReviewerBoardListFetchingError,
        reviewerBoards,
        isReviewerBoardDeleted,
        isReviewerBoardDeleting,
        isReviewerBoardDeletingError
    } = useSelector(state => state?.AdminReviewerBoardReducer);

    useEffect(() => {
        getReviewerBoard();
    }, []);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteReviewerBoard({id: deleteId})
    }

    useEffect(() => {
        if(isReviewerBoardDeleted){
            getReviewerBoard();
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isReviewerBoardDeleted]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Reviewer Board</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Reviewer Board</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/admin/reviewer-board/create"><FontAwesomeIcon
                        icon={faPlusCircle}/> Add New Reviewer Board</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        {isReviewerBoardListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {reviewerBoards?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th>Member No</th>
                                            <th>Affiliation</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {reviewerBoards?.map((reviewer, index) => (
                                            <tr key={reviewer?.id}>
                                                <td>{++index}</td>
                                                <td>{reviewer?.first_name +" "+reviewer?.last_name}</td>
                                                <td>{reviewer?.email}</td>
                                                <td>{reviewer?.member_no}</td>
                                                <td>{reviewer?.affiliation}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/admin/reviewer-board/edit/${reviewer?.id}`}
                                                            variant="info" size="sm"><FontAwesomeIcon
                                                        icon={faPencilAlt}/></Button>
                                                    &nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => handleDelete(reviewer?.id)}
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

                        {isReviewerBoardListFetchingError && <p>{isReviewerBoardListFetchingError}</p>}
                    </Container>
                </section>
            </main>
            <DeleteModal
                title="Delete Reviewer Board"
                setDeleteId={setDeleteId}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                deleteAction={deleteAction}
                isDeleting={isReviewerBoardDeleting}
                isDeletingError={isReviewerBoardDeletingError}
            />
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getReviewerBoard: (data) => dispatch(reviewerBoardList(data)),
        deleteReviewerBoard: (data) => dispatch(reviewerBoardDelete(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(ReviewerBoard);
