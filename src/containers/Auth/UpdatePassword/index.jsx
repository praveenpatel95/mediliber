import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import useValidator from "../../../utils/useValidator";
import * as Yup from "yup";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {updateUserPassword} from "../../../stores/Auth/actions";

function UpdatePassword({updateUserPassword}) {
    const {isPasswordUpdating, isPasswordUpdatingError} = useSelector(state => state?.AuthReducer)
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('old_password', values.old_password)
        formData.append('password', values.password)
        formData.append('password_confirmation', values.password_confirm)
        updateUserPassword(formData);
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
            old_password: "",
            password: "",
            password_confirm: "",
        },
        validationSchema: Yup.object({
            old_password: Yup.string().required('Old password is required'),
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
                <title>Update Password</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <section className="my-4">
                    <Container>
                        <Row>
                            <Col sm={6} className="m-auto">
                                <Card>
                                    <Card.Header>
                                        <h4>Update Password</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form validated={true} onSubmit={handleSubmit}>
                                            <Form.Group as={Col} md="12" className="mb-3">
                                                <Form.Label>Old Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Enter old password"
                                                    value={values?.old_password}
                                                    onChange={e => setValues({...values, old_password: e.target.value})}
                                                    required
                                                />
                                                {touched?.old_password && errors?.old_password ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.old_password}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>

                                            <Form.Group as={Col} md="12" className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    value={values?.password}
                                                    onChange={e => setValues({...values, password: e.target.value})}
                                                    required
                                                />
                                                <Form.Text muted>Minimum eight characters, at least one uppercase
                                                    letter,
                                                    one
                                                    lowercase letter, one number and one special character.</Form.Text>
                                                <br/>
                                                {touched?.password && errors?.password ? (
                                                    <Form.Text className="text-danger">{errors?.password}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            <Form.Group as={Col} md="12" className="mb-3">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    value={values?.password_confirm}
                                                    onChange={e => setValues({
                                                        ...values,
                                                        password_confirm: e.target.value
                                                    })}
                                                    required
                                                />
                                                {touched?.password_confirm && errors?.password_confirm ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.password_confirm}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            {isPasswordUpdatingError &&
                                                <Form.Text
                                                    className="text-danger">{isPasswordUpdatingError}</Form.Text>}
                                            <div className="mt-4">
                                                {isPasswordUpdating ?
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
                                    </Card.Body>
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
        updateUserPassword: (data) => dispatch(updateUserPassword(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(UpdatePassword);
