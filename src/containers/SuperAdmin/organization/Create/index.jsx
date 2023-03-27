import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Col, Form, Spinner} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/fontawesome-free-solid";
import useValidator from "../../../../utils/useValidator";
import * as Yup from "yup";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect} from "react";
import {
    organizationGet, organizationUpdate
} from "../../../../stores/SuperAdmin/Organization/actions";
import {organizationCreate} from "../../../../stores/SuperAdmin/Organization/actions";

function OrganizationCreate({createOrganization, getOrganization, updateOrganization}) {
    let {organizationId} = useParams();

    const {
        isOrganizationCreating,
        isOrganizationCreatingError,
        isOrganizationCreated,

        isOrganizationGetFetching,
        isOrganizationGetFetchingError,
        organization
    } = useSelector(state => state?.OrganizationReducer);

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('name', values.name)
        formData.append('image', values.image)
        if (organizationId) {
            updateOrganization({formData, id: organizationId});
        } else {
            createOrganization(formData);
        }

    }

    //get by id
    useEffect(() => {
        if (organizationId) {
            getOrganization({id: organizationId})
        }
    }, [organizationId]);


    const navigate = useNavigate();
    useEffect(() => {
        if (isOrganizationCreated) {
            navigate('/super-admin/organization');
        }
    }, [isOrganizationCreated]);

    const {
        values,
        setValues,
        errors,
        handleSubmit,
        touched,
        clearFormState
    }
        = useValidator({
        initialValues: {
            name: "",
            image: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
        }),
        onSubmit,
    });

    useEffect(() => {
        if (organization) {
            setValues(
                {
                    ...values,
                    name: organization?.name,
                })
        }
    }, [organization]);

    const handleResetForm = () => {
        clearFormState();
    }
    const handleImage = (file) => {
        setValues({...values, image: file})
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>{organizationId ? "Update Organization" : "Create New Organization"}</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/super-admin/organization`}}>Organizations</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>{organizationId ? "Update Organization" : "Create New Organization"}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/organization"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isOrganizationGetFetchingError &&
                                    <Form.Text className="text-danger">{isOrganizationGetFetchingError}</Form.Text>}
                                <Form validated={true} onSubmit={handleSubmit}>

                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Organization Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter organization name"
                                            value={values?.name}
                                            onChange={e => setValues({...values, name: e.target.value})}
                                            required
                                        />
                                        {touched?.name && errors?.name ? (
                                            <Form.Text className="text-danger">{errors?.name}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Organization Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            required={organizationId ? false : true}
                                            accept="image/*"
                                            onChange={e => handleImage(e.target.files[0])}
                                        />
                                        {organization?.image && <a href={organization?.image} target="_blank">Uploaded file</a>}
                                        {touched?.image && errors?.image ? (
                                            <Form.Text className="text-danger">{errors?.image}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>

                                    <div className="mt-3">
                                        {isOrganizationCreating ?

                                            <Button variant="primary" type="button" size="lg" disabled>
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                /> Submitting...
                                            </Button>
                                            :
                                            <div>
                                                <Button variant="primary" type="submit" size="lg">
                                                    Submit
                                                </Button>
                                                &nbsp;&nbsp;
                                                <Button variant="dark" type="button" onClick={handleResetForm}
                                                        size="lg">
                                                    Reset
                                                </Button>
                                            </div>

                                        }
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                </section>
            </main>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        createOrganization: (data) => dispatch(organizationCreate(data)),
        getOrganization: (data) => dispatch(organizationGet(data)),
        updateOrganization: (data) => dispatch(organizationUpdate(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(OrganizationCreate);