import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import useValidator from "../../../utils/useValidator";
import * as Yup from "yup";
import {connect, useSelector} from "react-redux";
import {useEffect} from "react";
import {compose} from "redux";
import {updateProfile} from "../../../stores/Auth/actions";

function UpdateProfile({updateUserProfile}) {
    const {isProfileUpdating, isProfileUpdatingError, user} = useSelector(state => state?.AuthReducer)

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('name', values.name)
        formData.append('email', values.email)
        updateUserProfile(formData);
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
            name: "",
            email: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('User name is required'),
            email: Yup.string().email("Invalid Email address!").required("Email address is required."),
        }),
        onSubmit,
    });

    useEffect(() => {
        setValues({
            ...values,
            name: user?.name,
            email: user?.email,
        });
    }, [user]);

    const handleResetForm = () => {
        clearFormState();
    }
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
                                        <Form validated={true} onSubmit={handleSubmit}>
                                            <Form.Group as={Col} md="12" className="mb-3">
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
                                            <Form.Group as={Col} md="12" className="mb-3">
                                                <Form.Label>Email Address</Form.Label>
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
                                            {isProfileUpdatingError &&
                                                <Form.Text className="text-danger">{isProfileUpdatingError}</Form.Text>}


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
        updateUserProfile: (data) => dispatch(updateProfile(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(UpdateProfile);
