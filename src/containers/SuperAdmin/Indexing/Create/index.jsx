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
import {indexingCreate, indexingGet, indexingUpdate} from "../../../../stores/SuperAdmin/Indexing/actions";

function IndexingCreate({createIndexing, getIndexing, updateIndexing}) {
    let {indexingId} = useParams();

    const {
        isIndexingCreating,
        isIndexingCreatingError,
        isIndexingCreated,

        isIndexingGetFetching,
        isIndexingGetFetchingError,
        indexing
    } = useSelector(state => state?.IndexingReducer);

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('name', values.name)
        formData.append('image', values.image)
        if (indexingId) {
            updateIndexing({formData, id: indexingId});
        } else {
            createIndexing(formData);
        }

    }

    //get by id
    useEffect(() => {
        if (indexingId) {
            getIndexing({id: indexingId})
        }
    }, [indexingId]);


    const navigate = useNavigate();
    useEffect(() => {
        if (isIndexingCreated) {
            navigate('/super-admin/indexing');
        }
    }, [isIndexingCreated]);

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
        if (indexing) {
            setValues(
                {
                    ...values,
                    name: indexing?.name,
                })
        }
    }, [indexing]);

    const handleResetForm = () => {
        clearFormState();
    }
    const handleImage = (file) => {
        setValues({...values, image: file})
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>{indexingId ? "Update Indexing" : "Create New Indexing"}</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/super-admin/indexing`}}>Indexings</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>{indexingId ? "Update Indexing" : "Create New Indexing"}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/indexing"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isIndexingGetFetchingError &&
                                    <Form.Text className="text-danger">{isIndexingGetFetchingError}</Form.Text>}
                                <Form validated={true} onSubmit={handleSubmit}>

                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Indexing Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter indexing name"
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
                                        <Form.Label>Indexing Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            required={indexingId ? false : true}
                                            accept="image/*"
                                            onChange={e => handleImage(e.target.files[0])}
                                        />
                                        {indexing?.image && <a href={indexing?.image} target="_blank">Uploaded file</a>}
                                        {touched?.image && errors?.image ? (
                                            <Form.Text className="text-danger">{errors?.image}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>

                                    <div className="mt-3">
                                        {isIndexingCreating ?

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
        createIndexing: (data) => dispatch(indexingCreate(data)),
        getIndexing: (data) => dispatch(indexingGet(data)),
        updateIndexing: (data) => dispatch(indexingUpdate(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(IndexingCreate);