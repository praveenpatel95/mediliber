import React, {useEffect, useState} from "react";
import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";
import HeadBanner from "./HeadBanner";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {faEnvelopeOpen, faHome} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMainPageDetail} from "../../../../stores/Common/Pages/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {getWebSetting} from "../../../../stores/Common/WebSetting/actions";
import useValidator from "../../../../utils/useValidator";
import * as Yup from "yup";
import axios from "axios";

function Contact({getPageDetail, getWebSettingDetail}) {
    const pageSlug = 'contact-us';
    useEffect(() => {
        if (pageSlug) {
            getPageDetail(pageSlug);
        }
    }, [pageSlug]);

    useEffect(() => {
        getWebSettingDetail();
    }, []);

    const {
        isMainPageDetailFetching,
        isMainPageDetailFetchingError,
        mainPageData
    } = useSelector(state => state?.WebPageReducer);

    const {
        webSettingDetail,
    } = useSelector(state => state?.WebSettingReducer);

    const generateRandomNumber = () => Math.floor(Math.random() * 1000000);

    const [captchaValue, setCaptchaValue] = useState(generateRandomNumber());
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(null);

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('subject', values.subject)
        formData.append('message', values.message)
        formData.append('journal_name', 'medliber')
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        setFormError('')
        setFormSubmitted(false);
        axios.post(API_BASE_URL + '/v1/contact/enquiry', formData)
            .then(response => {
                setFormSubmitted(true);
                clearFormState();
            })
            .catch(error => {
                if (error.response.data.error) {
                    setFormError(error.response.data.message)
                }
            });
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
            subject: "",
            message: "",
            code: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email("Invalid Email address!").required('Email is required'),
            subject: Yup.string().required('Subject is required'),
            message: Yup.string().required('Message is required'),
            code: Yup.string()
                .required('Code is required.')
                .oneOf([`${captchaValue}`, null], "Wrong captcha."),

        }),
        onSubmit,
    });
    const regenerateCaptcha = () => {
        setCaptchaValue(generateRandomNumber());
        setValues({...values, code: ''});
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>{mainPageData?.title}</title>
            </Helmet>
            <main>
                <HeadBanner pageData={mainPageData}/>
                <section className="py-5">
                    <Container>
                        <Row>
                            <Col sm={5}>
                                <h2 className="text-secondaryDark">Our Office</h2>
                                <Row className="py-3">
                                    <Col sm={3}><FontAwesomeIcon icon={faHome}
                                                                 className="fa-4x text-secondaryDark"/></Col>
                                    <Col sm={9}>
                                        <h5>MedLiber pulishing group</h5>
                                        <p>{webSettingDetail?.address}
                                        </p>
                                    </Col>
                                </Row>
                                <br />
                                <h2 className="text-secondaryDark">Drop a email</h2>
                                <Row className="py-3">
                                    <Col sm={3}><FontAwesomeIcon icon={faEnvelopeOpen}
                                                                 className="fa-4x text-secondaryDark"/></Col>
                                    <Col sm={9}>
                                        <p><strong>For Help</strong><br/>
                                            <a href={`mailto:${webSettingDetail?.help_email}`}
                                               className="text-secondaryDark">{webSettingDetail?.help_email}</a>
                                        </p>
                                        <p><strong>For query</strong><br/>
                                            <a href={`mailto:${webSettingDetail?.query_email}`}
                                               className="text-secondaryDark">{webSettingDetail?.query_email}</a>
                                        </p>
                                        <p><strong>Special Issues</strong><br/>
                                            <a href={`mailto:${webSettingDetail?.special_issue_email}`}
                                               className="text-secondaryDark">{webSettingDetail?.special_issue_email}</a>
                                        </p>

                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={2}>
                                <div className="divider-dashed-vertical"></div>
                            </Col>
                            <Col sm={5}>
                                <h2 className="text-secondaryDark">Reach to us</h2>
                                {formSubmitted &&
                                    <h5 className="text-warning">Your form has been submitted successfully.</h5>}
                                {formError && <h5 className="text-danger">{formError}</h5>}
                                <Row className="py-3">
                                    <Form validated={true} onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Form.Label as={Col} md="2">Name <span
                                                className="text-danger">*</span></Form.Label>
                                            <Form.Group as={Col} md="10">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your name"
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
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label as={Col} md="2">Email <span
                                                className="text-danger">*</span></Form.Label>
                                            <Form.Group as={Col} md="10">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your email"
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
                                        <Row className="mb-3">
                                            <Form.Label as={Col} md="2">Subject <span
                                                className="text-danger">*</span></Form.Label>
                                            <Form.Group as={Col} md="10">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your subject"
                                                    value={values?.subject}
                                                    onChange={e => setValues({...values, subject: e.target.value})}
                                                    required
                                                />
                                                {touched?.subject && errors?.subject ? (
                                                    <Form.Text className="text-danger">{errors?.subject}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label as={Col} md="2">Message</Form.Label>
                                            <Form.Group as={Col} md="10">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your message"
                                                    value={values?.message}
                                                    onChange={e => setValues({...values, message: e.target.value})}
                                                    required
                                                    as="textarea"
                                                />
                                                {touched?.message && errors?.message ? (
                                                    <Form.Text className="text-danger">{errors?.message}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label as={Col} md="2">Captcha</Form.Label>
                                            <Form.Group as={Col} md="4">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Image Text"
                                                    value={values?.code}
                                                    onChange={e => setValues({...values, code: e.target.value})}
                                                    required
                                                />
                                                {touched?.code && errors?.code ? (
                                                    <Form.Text className="text-danger">{errors?.code}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            <Col md="2" className="bg-dark text-white pt-2 mb-0">{captchaValue}</Col>
                                            <Col md="2">
                                                <button type="button" className="btn btn-default"
                                                        onClick={regenerateCaptcha}><img
                                                    src={`${process.env.PUBLIC_URL}/reloading.png`}/></button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Button type="submit" className="btn col-md-3 offset-md-2">Submit</Button>
                                        </Row>
                                    </Form>
                                </Row>
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
        getPageDetail: (slug) => dispatch(getMainPageDetail(slug)),
        getWebSettingDetail: (data) => dispatch(getWebSetting(data)),
    }
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Contact);
