import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import useValidator from "../../../utils/useValidator";
import * as Yup from "yup";
import {connect, useDispatch, useSelector} from "react-redux";
import {login} from "../../../stores/Auth/actions";
import {compose} from "redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Login({callLogin}) {

    const dispatch = useDispatch();
    const {
        loginError,
        isLoggingIn,
        isAuthenticated,
        user
    } = useSelector(state => state?.AuthReducer);
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('email', values.email)
        formData.append('password', values.password)
        callLogin(formData);
    }

    const {
        values,
        setValues,
        errors,
        handleSubmit,
        touched
    }
        = useValidator({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid Email!").required('Email is required'),
            password: Yup.string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&-_]{8,}$/,
                    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.')
                .required('Password is required.'),
        }),
        onSubmit,
    });

    const navigate = useNavigate();
    useEffect(() => {
        if(isAuthenticated && user){
            if(user?.role_type === 'super_admin'){
                navigate('/super-admin/dashboard');
            }
            else if(user?.role_type === 'admin'){
                navigate('/admin/dashboard');
            }

        }
    }, [isAuthenticated, user]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <section className="py-5">
                <Container>
                    <Row>
                        <Col sm={5} className="m-auto">
                            <Card className="px-3 py-2">
                                <Card.Body>
                                    <h1 className="text-center">Login</h1>
                                    <Form validated={true} onSubmit={handleSubmit}>
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
                                        <div className="d-grid gap-2 mt-3">
                                            {isLoggingIn ?

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
                                                    Login
                                                </Button>

                                            }
                                        </div>
                                        {loginError &&  <Form.Text className="text-danger">{loginError}</Form.Text>}
                                    </Form>
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
        callLogin: (data) => dispatch(login(data))
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Login);

