import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faPlusCircle, faTrash} from "@fortawesome/fontawesome-free-solid";
import Loader from "../../../components/Loader";
import {connect, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {compose} from "redux";
import DeleteModal from "../../../components/DeleteModal";
import {contactEnquiryDelete, contactEnquiryList} from "../../../stores/SuperAdmin/ContactEqnuiry/actions";

function ContactEnquiry({getContactList, deleteContactEnquiry}) {
    const {
        isContactEnquiryListFetching,
        isContactEnquiryListFetchingError,
        contactEnquiries,
        isContactEnquiryDeleting,
        isContactEnquiryDeletingError,
        isContactEnquiryDeleted
    } = useSelector(state => state?.ContactEnquiryReducer);

    useEffect(() => {
        getContactList();
    }, []);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteContactEnquiry({id: deleteId})
    }

    useEffect(() => {
        if (isContactEnquiryDeleted) {
            getContactList();
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isContactEnquiryDeleted]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Contact Enquires</title>
            </Helmet>
            <main className="py-4">
                <Container fluid className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Contact Enquires</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </Container>
                <section className="my-4">
                    <Container fluid>
                        <Card>
                            <Card.Body>

                                {isContactEnquiryListFetching ?
                                    <div className="my-5 text-center">
                                        <Loader/>
                                    </div>
                                    :
                                    <div>
                                        {contactEnquiries?.length > 0 ?
                                            <Table striped bordered hover size="sm">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Journal</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Subject</th>
                                                    <th>Message</th>
                                                    <th>Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {contactEnquiries?.map((enquiry, index) => (
                                                    <tr key={enquiry?.id}>
                                                        <td>{++index}</td>
                                                        <td className="text-uppercase">{enquiry.journal_name}</td>
                                                        <td>{enquiry.name}</td>
                                                        <td>{enquiry.email}</td>
                                                        <td>{enquiry.subject}</td>
                                                        <td>{enquiry.message}</td>
                                                        <td>
                                                            <Button variant="danger"
                                                                    onClick={() => handleDelete(enquiry.id)}
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

                                {isContactEnquiryListFetchingError && <p>{isContactEnquiryListFetchingError}</p>}

                            </Card.Body>
                        </Card>
                    </Container>
                </section>
            </main>
            <DeleteModal
                title="Delete Contact Enquiry"
                setDeleteId={setDeleteId}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                deleteAction={deleteAction}
                isDeleting={isContactEnquiryDeleting}
                isDeletingError={isContactEnquiryDeletingError}
            />
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getContactList: (data) => dispatch(contactEnquiryList(data)),
        deleteContactEnquiry: (data) => dispatch(contactEnquiryDelete(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(ContactEnquiry);
