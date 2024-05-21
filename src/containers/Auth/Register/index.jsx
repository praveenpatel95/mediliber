import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import useValidator from "../../../utils/useValidator";
import * as Yup from "yup";
import {connect, useDispatch, useSelector} from "react-redux";
import {login, register} from "../../../stores/Auth/actions";
import {compose} from "redux";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getCountryList} from "../../../stores/Common/Country/actions";

function Register({authorRegister, getCountryList}) {

    const dispatch = useDispatch();
    const {
        loginError,
        isLoggingIn,
        isAuthenticated,
        user
    } = useSelector(state => state?.AuthReducer);
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('first_name', values.first_name)
        formData.append('last_name', values.last_name)
        formData.append('title', values.title)
        formData.append('country', values.country)
        formData.append('title', values.title)
        formData.append('affiliation', values.affiliation)
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('password_confirmation', values.password_confirm)
        authorRegister(formData);
    }

    useEffect(() => {
        getCountryList();
    }, []);

    const {CountryList} = useSelector(state => state?.CountryReducer);
    const {isRegistered, isRegistering} = useSelector(state => state?.AuthReducer);

    const navigate = useNavigate();

    useEffect(() => {
        if(isRegistered){
            navigate('/auth/verify');
        }
    }, [isRegistered])

    const {
        values,
        setValues,
        errors,
        handleSubmit,
        touched
    }
        = useValidator({
        initialValues: {
            first_name: "",
            last_name: "",
            title: "",
            country: "",
            affiliation: "",
            email: "",
            password: "",
            password_confirm: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required('First name is required'),
            last_name: Yup.string().required('Last name is required'),
            title: Yup.string().required('Title is required'),
            country: Yup.string().required('Country is required'),
            affiliation: Yup.string().required('Affiliation is required'),
            email: Yup.string().email("Invalid Email!").required('Email is required'),
            password: Yup.string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&-_]{8,}$/,
                    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.')
                .required('Password is required.'),
            password_confirm: Yup.string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&-_]{8,}$/,
                    'Password must be strong.')
                .required('Confirm Password is required.')
                .oneOf([Yup.ref('password'), null], "Confirm password should match with password."),

        }),
        onSubmit,
    });



    const titles = [
        'Mr', 'Mrs', 'Miss', 'Ms', 'Dr', 'Professor'
    ];



    return (
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <section className="py-5">
                <Container>
                    <Row>
                        <Col sm={6} className="m-auto">
                            <Card className="px-3 py-2">
                                <Card.Body>
                                    <h1 className="text-center">Create an account</h1>
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
                                                    {titles?.map((title) => (
                                                        <option>{title}</option>
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
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email address"
                                                value={values?.email}
                                                onChange={e => setValues({...values, email: e.target.value})}
                                                required
                                            />
                                            {touched?.email && errors?.email ? (
                                                <Form.Text  className="text-danger">{errors?.email}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter password"
                                                value={values?.password}
                                                onChange={e => setValues({...values, password: e.target.value})}
                                                required
                                            />
                                            {touched?.password && errors?.password ? (
                                                <Form.Text  className="text-danger">{errors?.password}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter confirm password"
                                                value={values?.password_confirm}
                                                onChange={e => setValues({...values, password_confirm: e.target.value})}
                                                required
                                            />
                                            {touched?.password_confirm && errors?.password_confirm ? (
                                                <Form.Text  className="text-danger">{errors?.password_confirm}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <div className="d-grid gap-2 mt-3">
                                            {isRegistering ?

                                                <Button variant="primary" type="button" size="lg" disabled>
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    /> Checking...
                                                </Button>
                                                :
                                                <Button variant="primary" type="submit" size="lg">
                                                    Register
                                                </Button>

                                            }
                                        </div>
                                        {loginError &&  <Form.Text className="text-danger">{loginError}</Form.Text>}
                                    </Form>
                                    <p className="mt-3 text-center">Already an account? <Link to="/auth/login" className="theme_text_color">Login</Link></p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        authorRegister: (data) => dispatch(register(data)),
        getCountryList: () => dispatch(getCountryList()),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Register);

