import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import useValidator from "../../../utils/useValidator";
import * as Yup from "yup";
import {connect, useSelector} from "react-redux";
import {useEffect} from "react";
import {compose} from "redux";
import {getAuthorProfile, updateAuthorProfile} from "../../../stores/Author/Profile/actions";
import {getCountryList} from "../../../stores/Common/Country/actions";
import Loader from "../../../components/Loader";

function AuthorProfile({fetchAuthorProfile, getCountryList, updateProfile}) {

    useEffect(() => {
        fetchAuthorProfile();
    }, []);

    useEffect(() => {
        getCountryList();
    }, []);
    const {
        isAuthorProfileFetching,
        isAuthorProfileFetchingError,
        AuthorProfile,
        isProfileUpdating,
        isProfileUpdatingError,
    } = useSelector(state => state?.AuthorReducer)

    const {CountryList} = useSelector(state => state?.CountryReducer);
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('first_name', values.first_name)
        formData.append('last_name', values.last_name)
        formData.append('title', values.title)
        formData.append('country', values.country)
        formData.append('affiliation', values.affiliation)
        updateProfile(formData);
    }

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
            first_name: "",
            last_name: "",
            title: "",
            country: "",
            affiliation: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required('First name is required'),
            last_name: Yup.string().required("Last name is required."),
            title: Yup.string().required("Title is required."),
            country: Yup.string().required("Country is required."),
            affiliation: Yup.string().required("Affiliation is required."),
        }),
        onSubmit,
    });

    useEffect(() => {
        if(AuthorProfile?.id){
            setValues({
                ...values,
                first_name: AuthorProfile?.first_name,
                last_name: AuthorProfile?.last_name,
                title: AuthorProfile?.title,
                country: AuthorProfile?.country,
                affiliation: AuthorProfile?.affiliation,
            });
        }

    }, [AuthorProfile]);

    const handleResetForm = () => {
        clearFormState();
    }

    const titles = [
        'Mr', 'Mrs', 'Miss', 'Ms', 'Dr', 'Professor'
    ];

    return (
        <HelmetProvider>
            <Helmet>
                <title>Update Profile detail</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <section className="my-4">

                    <Container>
                        <Row>
                            <Col sm={6} className="m-auto">
                                <Card>
                                    <Card.Header>
                                        <h4>Update Profile</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        {isAuthorProfileFetching ?
                                        <div className="text-center my-5">
                                            <Loader />
                                        </div>
                                        :
                                        <Form validated={true} onSubmit={handleSubmit}>
                                            <Row>
                                                <Form.Group as={Col} md="6" className="mb-3">
                                                    <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter first name"
                                                        value={values?.first_name}
                                                        onChange={e => setValues({...values, first_name: e.target.value})}
                                                        required
                                                    />
                                                    {touched?.first_name && errors?.first_name ? (
                                                        <Form.Text  className="text-danger">{errors?.first_name}</Form.Text>
                                                    ) : (
                                                        ''
                                                    )}
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" className="mb-3">
                                                    <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter last name"
                                                        value={values?.last_name}
                                                        onChange={e => setValues({...values, last_name: e.target.value})}
                                                        required
                                                    />
                                                    {touched?.last_name && errors?.last_name ? (
                                                        <Form.Text  className="text-danger">{errors?.last_name}</Form.Text>
                                                    ) : (
                                                        ''
                                                    )}
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group as={Col} md="6" className="mb-3">
                                                    <Form.Label>Title <span className="text-danger">*</span></Form.Label>
                                                    <Form.Select
                                                        value={values?.title}
                                                        onChange={e => setValues({
                                                            ...values,
                                                            title: e.target.value
                                                        })}
                                                        required
                                                    >
                                                        <option value="">--Select--</option>
                                                        {titles?.map((userTitle) => (
                                                            <option>{userTitle}</option>
                                                        ))}

                                                    </Form.Select>
                                                    {touched?.title && errors?.title ? (
                                                        <Form.Text  className="text-danger">{errors?.title}</Form.Text>
                                                    ) : (
                                                        ''
                                                    )}
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" className="mb-3">
                                                    <Form.Label>Country <span className="text-danger">*</span></Form.Label>
                                                    <Form.Select
                                                        value={values?.country}
                                                        onChange={e => setValues({
                                                            ...values,
                                                            country: e.target.value
                                                        })}
                                                        required
                                                    >
                                                        <option value="">--Select--</option>
                                                        {CountryList?.map((country, key) => (
                                                            <option key={key}>{country?.country_name}</option>
                                                        ))}

                                                    </Form.Select>
                                                    {touched?.country && errors?.country ? (
                                                        <Form.Text  className="text-danger">{errors?.country}</Form.Text>
                                                    ) : (
                                                        ''
                                                    )}
                                                </Form.Group>
                                            </Row>
                                            <Form.Group as={Col} md="12" className="mb-3">
                                                <Form.Label>Affiliation <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter affiliation"
                                                    value={values?.affiliation}
                                                    onChange={e => setValues({...values, affiliation: e.target.value})}
                                                    required
                                                />
                                                {touched?.affiliation && errors?.affiliation ? (
                                                    <Form.Text  className="text-danger">{errors?.affiliation}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            <div className="mt-4">
                                                {isProfileUpdating ?

                                                    <Button variant="primary" type="button" size="lg" disabled>
                                                        <Spinner
                                                            as="span"
                                                            animation="border"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        /> Updating...
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
                                        }
                                    </Card.Body>
                                    {isProfileUpdatingError && <p>{isProfileUpdatingError}</p>}
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </main>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAuthorProfile: () => dispatch(getAuthorProfile()),
        updateProfile: (data) => dispatch(updateAuthorProfile(data)),
        getCountryList: () => dispatch(getCountryList()),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(AuthorProfile);
