import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {compose} from "redux";
import {updateJournalArticleStatus} from "../../../../../stores/Admin/Article/actions";
import {useNavigate} from "react-router-dom";

function UpdateArticleStatus({
                                 articleId,
                                 newStatus,
                                 setUpdateModalStatus,
                                 updateModalStatus,
                                 updateArticleStatus,
                                 getArticleDetail
                             }) {
    const handleClose = () => {
        setUpdateModalStatus(false)
    }

    const navigate = useNavigate();
    const handleAction = () => {
        if (newStatus != 'Published') {
            updateArticleStatus({'id': articleId, status: newStatus})
            setUpdateModalStatus(false)
            getArticleDetail(articleId)
        } else {
            navigate(`/admin/article/publish/${articleId}`)
        }
    }


    return (
        <Modal show={updateModalStatus} onHide={handleClose} backdrop="static"
               keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to {newStatus} it?</Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleAction}>
                    Yes, Confirmed
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        updateArticleStatus: (data) => dispatch(updateJournalArticleStatus(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(UpdateArticleStatus);