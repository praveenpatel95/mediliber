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
import {journalCreate, journalGet, journalUpdate} from "../../../../stores/SuperAdmin/Journals/actions";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {journalCategoryList} from "../../../../stores/SuperAdmin/JournalCategory/actions";

function JournalCreate({createJournal, getJournal, updateJournal, journalCategoryList}) {
    let {journalId} = useParams();
    useEffect(() => {
        journalCategoryList()
    }, []);
    const {
        isJournalCreating,
        isJournalCreatingError,
        isJournalCreated,

        isJournalGetFetching,
        isJournalGetFetchingError,
        journal
    } = useSelector(state => state?.JournalReducer);

    const {
        journalCategories
    } = useSelector(state => state?.JournalCategoryReducer);
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('journal_category_id', values.journal_category_id)
        formData.append('name', values.journal_name)
        formData.append('banner_content', values.banner_content)
        formData.append('journal_profile', values.journal_profile ? values.journal_profile :"")
        formData.append('editor_spotlight', values.editor_spotlight ? values.editor_spotlight : "")
        formData.append('special_issues', values.special_issues ? values?.special_issues :"")
        if (values.banner) {
            formData.append('banner', values.banner)
        }

        if (journalId) {

            updateJournal({formData, id: journalId});
        } else {
            createJournal(formData);
        }

    }

    //get category by id
    useEffect(() => {
        if (journalId) {
            getJournal({id: journalId})
        }
    }, [journalId]);



    const navigate = useNavigate();
    useEffect(() => {
        if (isJournalCreated) {
            navigate('/super-admin/journals');
        }
    }, [isJournalCreated]);

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
            journal_category_id: "",
            journal_name: "",
            banner: "",
            banner_content: "",
            journal_profile: "",
            editor_spotlight: "",
            special_issues: "",
        },
        validationSchema: Yup.object({
            journal_category_id: Yup.number().required('Journal category is required'),
            journal_name: Yup.string().required('Journal name is required'),
            banner_content: Yup.string().required('Banner content is required'),
        }),
        onSubmit,
    });

    useEffect(() => {
        if (journal) {
            setValues(
                {
                    ...values,
                    journal_category_id: journal?.journal_category_id,
                    journal_name: journal?.name,
                    banner_content: journal?.banner_content,
                    journal_profile: journal?.journal_profile,
                    editor_spotlight: journal?.editor_spotlight,
                    special_issues: journal?.special_issues,
                })
        }
    }, [journal]);

    const handleResetForm = () => {
        clearFormState();
    }
    const handleImage = (file) => {
        setValues({...values, banner: file})
    }


    return (
        <HelmetProvider>
            <Helmet>
                <title>{journalId ? "Update Journal" : "Create New Journal"}</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/super-admin/journals`}}>Journals</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>{journalId ? "Update Journal" : "Create New Journal"}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/journals"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isJournalGetFetchingError &&
                                    <Form.Text className="text-danger">{isJournalGetFetchingError}</Form.Text>}
                                <Form validated={true} onSubmit={handleSubmit}>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Journal Category</Form.Label>
                                        <Form.Select
                                            value={values?.journal_category_id}
                                            onChange={e => setValues({
                                                ...values,
                                                journal_category_id: e.target.value
                                            })}
                                            required
                                        >
                                            <option value="">--Select--</option>
                                            {journalCategories?.map((category) => (
                                                <option value={category?.id}>{category?.category_name}</option>
                                            ))}

                                        </Form.Select>

                                        {touched?.journal_category_id && errors?.journal_category_id ? (
                                            <Form.Text className="text-danger">{errors?.journal_category_id}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Journal Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter journal name"
                                            value={values?.journal_name}
                                            onChange={e => setValues({...values, journal_name: e.target.value})}
                                            required
                                        />
                                        {touched?.journal_name && errors?.journal_name ? (
                                            <Form.Text className="text-danger">{errors?.journal_name}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Journal Banner</Form.Label>
                                        <Form.Control
                                            type="file"
                                            required={journalId ? false : true}
                                            accept="image/*"
                                            onChange={e => handleImage(e.target.files[0])}
                                        />
                                        {touched?.banner && errors?.banner ? (
                                            <Form.Text className="text-danger">{errors?.banner}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Banner Content</Form.Label>
                                        <ReactQuill theme="snow"
                                                    value={values?.banner_content}
                                                    onChange={(e) => setValues({...values, banner_content: e})}/>
                                        {touched?.banner_content && errors?.banner_content ? (
                                            <Form.Text className="text-danger">{errors?.banner_content}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Profile Content</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Journal profile content"
                                            value={values?.journal_profile}
                                            onChange={e => setValues({...values, journal_profile: e.target.value})}
                                            as="textarea"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Editor Spotlight</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter editor spotlight content"
                                            value={values?.editor_spotlight}
                                            onChange={e => setValues({...values, editor_spotlight: e.target.value})}
                                            as="textarea"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Special Issues content</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter special issues content"
                                            value={values?.special_issues}
                                            onChange={e => setValues({...values, special_issues: e.target.value})}
                                            as="textarea"
                                        />
                                    </Form.Group>
                                    {isJournalCreatingError &&
                                        <Form.Text className="text-danger">{isJournalCreatingError}</Form.Text>}


                                    <div className="mt-3">
                                        {isJournalCreating ?

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
        createJournal: (data) => dispatch(journalCreate(data)),
        getJournal: (data) => dispatch(journalGet(data)),
        updateJournal: (data) => dispatch(journalUpdate(data)),
        journalCategoryList: (data) => dispatch(journalCategoryList(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalCreate);