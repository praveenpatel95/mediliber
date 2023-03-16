import {Alert, Button, Modal, Spinner} from "react-bootstrap";
import {journalCategoryDelete, journalCategoryList} from "../../stores/JournalCategory/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect} from "react";

function DeleteModal({
                         setDeleteId, deleteModal, setDeleteModal,
                         deleteAction,
                         isDeleting,
                         isDeletingError,
                         title
                     }) {

    const handleClose = () => {
        setDeleteId('')
        setDeleteModal(false)
    }


    return (
        <Modal show={deleteModal} onHide={handleClose} backdrop="static"
               keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to delete it?</Modal.Body>
            {isDeletingError &&
                <Alert variant="danger">
                    {isDeletingError}
                </Alert>
            }
            <Modal.Footer>
                {isDeleting ?
                    <Button variant="danger" disabled onClick={handleClose}>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        /> Deleting...
                    </Button>
                    :
                    <>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={deleteAction}>
                            Yes, Confirmed
                        </Button>
                    </>
                }

            </Modal.Footer>
        </Modal>
    )
}

function mapDispatchToProps(dispatch) {
    return {
     //   deleteJournalCategory: (data) => dispatch(journalCategoryDelete(data)),
        getJournalCategoryList: (data) => dispatch(journalCategoryList(data))
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(DeleteModal);