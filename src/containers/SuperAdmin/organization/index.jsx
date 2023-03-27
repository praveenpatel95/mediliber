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
import {organizationList, organizationDelete} from "../../../stores/SuperAdmin/Organization/actions";

function Organization({getOrganizationList, deleteOrganization}) {
    const {
        isOrganizationListFetching,
        isOrganizationListFetchingError,
        organizationList,
        isOrganizationDeleting,
        isOrganizationDeletingError,
        isOrganizationDeleted
    } = useSelector(state => state?.OrganizationReducer);

    useEffect(() => {
        getOrganizationList();
    }, []);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (deleteId) => {
        setDeleteId(deleteId)
        setDeleteModal(true);
    }

    const deleteAction = () => {
        deleteOrganization({id: deleteId})
    }

    useEffect(() => {
        if(isOrganizationDeleted){
            getOrganizationList();
            setDeleteModal(false);
            setDeleteId('');
        }
    }, [isOrganizationDeleted]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Organizations</title>
            </Helmet>
            <main className="py-4">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Organizations</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/organization/create"><FontAwesomeIcon
                        icon={faPlusCircle}/> Add New Organization</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        {isOrganizationListFetching ?
                            <div className="my-5 text-center">
                                <Loader/>
                            </div>
                            :
                            <div>
                                {organizationList?.length > 0 ?
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Organization Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {organizationList?.map((organization, index) => (
                                            <tr key={organization?.id}>
                                                <td>{++index}</td>
                                                <td><img src={organization?.image} width={100}/></td>
                                                <td>{organization?.name}</td>
                                                <td>
                                                    <Button as={Link}
                                                            to={`/super-admin/organization/edit/${organization?.id}`}
                                                            variant="info" size="sm"><FontAwesomeIcon
                                                        icon={faPencilAlt}/></Button>
                                                    &nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => handleDelete(organization?.id)}
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

                        {isOrganizationListFetchingError && <p>{isOrganizationListFetchingError}</p>}
                    </Container>
                </section>
            </main>
            <DeleteModal
                title="Delete Organization"
                setDeleteId={setDeleteId}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                deleteAction={deleteAction}
                isDeleting={isOrganizationDeleting}
                isDeletingError={isOrganizationDeletingError}
            />
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getOrganizationList: (data) => dispatch(organizationList(data)),
        deleteOrganization: (data) => dispatch(organizationDelete(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Organization);
