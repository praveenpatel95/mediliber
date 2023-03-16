import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/fontawesome-free-solid";
import useValidator from "../../../../utils/useValidator";
import * as Yup from "yup";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect} from "react";
import {journalUserCreate} from "../../../../stores/JournalUsers/actions";
import {journalList} from "../../../../stores/Journals/actions";

function JournalUserCreate({createJournalUser, getJournals}) {
    useEffect(() => {
        getJournals();
    }, []);
    const {
        isJournalUserCreating,
        isJournalUserCreatingError,
        isJournalUserCreated

    } = useSelector(state => state?.JournalUserReducer);

    const {journals} = useSelector(state => state?.JournalReducer)
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('journal_id', values.journal_id)
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('password_confirmation', values.password_confirm)
        createJournalUser(formData);

    }

    const navigate = useNavigate();
    useEffect(() => {
        if (isJournalUserCreated) {
            navigate('/super-admin/journal/access/users');
        }
    }, [isJournalUserCreated]);

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
            journal_id: "",
            name: "",
            email: "",
            password: "",
            password_confirm: "",
        },
        validationSchema: Yup.object({
            journal_id: Yup.number().required('Journal id is required'),
            name: Yup.string().required('User name is required'),
            email: Yup.string().email("Invalid Email address!").required("Email address is required."),
            password: Yup.string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&-_]{8,}$/,
                    'Password must be strong.')
                .required('Password is required.'),
            password_confirm: Yup.string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&-_]{8,}$/,
                    'Password must be strong.')
                .required('Confirm Password is required.')
                .oneOf([Yup.ref('password'), null], "Confirm password should match with password."),

        }),
        onSubmit,
    });

    const handleResetForm = () => {
        clearFormState();
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Create New User</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: `/super-admin/journal/access/users`}}>Journal
                                Categories</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>Create New User</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/journal/access/users"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                <Form validated={true} onSubmit={handleSubmit}>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Access for Journal</Form.Label>
                                        <Form.Select
                                            value={values?.journal_id}
                                            onChange={e => setValues({
                                                ...values,
                                                journal_id: e.target.value
                                            })}
                                            required
                                        >
                                            <option value="">--Select a Journal--</option>
                                            {journals?.map((journal) => (
                                                <option value={journal?.id}>{journal?.name}</option>
                                            ))}

                                        </Form.Select>

                                        {touched?.journal_id && errors?.journal_id ? (
                                            <Form.Text className="text-danger">{errors?.journal_id}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    <Row>
                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter user name"
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
                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>User Email Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter user login email address"
                                                value={values?.email}
                                                onChange={e => setValues({...values, email: e.target.value})}
                                                required
                                            />
                                            {touched?.email && errors?.email ? (
                                                <Form.Text className="text-danger">{errors?.email}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                value={values?.password}
                                                onChange={e => setValues({...values, password: e.target.value})}
                                                required
                                            />
                                            <Form.Text muted>Minimum eight characters, at least one uppercase letter,
                                                one
                                                lowercase letter, one number and one special character.</Form.Text>
                                            <br/>
                                            {touched?.password && errors?.password ? (
                                                <Form.Text className="text-danger">{errors?.password}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                value={values?.password_confirm}
                                                onChange={e => setValues({...values, password_confirm: e.target.value})}
                                                required
                                            />
                                            {touched?.password_confirm && errors?.password_confirm ? (
                                                <Form.Text
                                                    className="text-danger">{errors?.password_confirm}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                    </Row>
                                    {isJournalUserCreatingError &&
                                        <Form.Text className="text-danger">{isJournalUserCreatingError}</Form.Text>}


                                    <div className="mt-3">
                                        {isJournalUserCreating ?

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
        createJournalUser: (data) => dispatch(journalUserCreate(data)),
        getJournals: (data) => dispatch(journalList(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalUserCreate);