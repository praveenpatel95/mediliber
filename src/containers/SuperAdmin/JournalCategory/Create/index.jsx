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
import {
    journalCategoryCreate,
    journalCategoryGet,
    journalCategoryUpdate
} from "../../../../stores/SuperAdmin/JournalCategory/actions";
import {useEffect} from "react";

function JournalCategoryCreate({createJournalCategory, getJournalCategory, updateJournalCategory}) {
    let {categoryId} = useParams();
    const {
        isJournalCategoryCreating,
        isJournalCategoryCreated,
        errorJournalCategoryCreate,

        isJournalCategoryGetFetching,
        isJournalCategoryGetFetchingError,
        journalCategory
    } = useSelector(state => state?.JournalCategoryReducer);
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('category_name', values.category_name)
        if (categoryId) {
            updateJournalCategory({formData, id: categoryId});
        } else {
            createJournalCategory(formData);
        }

    }

    //get category by id
    useEffect(() => {
        if (categoryId) {
            getJournalCategory({id: categoryId})
        }
    }, [categoryId]);


    useEffect(() => {
        if (journalCategory) {
            setValues({...values, category_name: journalCategory?.category_name})
        }
    }, [journalCategory])

    const navigate = useNavigate();
    useEffect(() => {
        if (isJournalCategoryCreated) {
            navigate('/super-admin/journal-categories');
        }
    }, [isJournalCategoryCreated]);

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
            category_name: "",
        },
        validationSchema: Yup.object({
            category_name: Yup.string().required('Journal category is required'),
        }),
        onSubmit,
    });

    const handleResetForm = () => {
        clearFormState();
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>{categoryId ? "Update Category" : "Create New Category"}</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/journal-categories`}}>Journal
                                Categories</Breadcrumb.Item>
                            <Breadcrumb.Item active>{categoryId ? "Update Category" : "Create New Category"}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/journal-categories"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isJournalCategoryGetFetchingError &&
                                    <Form.Text className="text-danger">{isJournalCategoryGetFetchingError}</Form.Text>}
                                <Form validated={true} onSubmit={handleSubmit}>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Journal category</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter journal category"
                                            value={values?.category_name}
                                            onChange={e => setValues({...values, category_name: e.target.value})}
                                            required
                                        />
                                        {touched?.category_name && errors?.category_name ? (
                                            <Form.Text className="text-danger">{errors?.category_name}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    {errorJournalCategoryCreate &&
                                        <Form.Text className="text-danger">{errorJournalCategoryCreate}</Form.Text>}


                                    <div className="mt-3">
                                        {isJournalCategoryCreating ?

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
        createJournalCategory: (data) => dispatch(journalCategoryCreate(data)),
        getJournalCategory: (data) => dispatch(journalCategoryGet(data)),
        updateJournalCategory: (data) => dispatch(journalCategoryUpdate(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalCategoryCreate);