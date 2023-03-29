import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect} from "react";
import Loader from "../../../components/Loader";
import useValidator from "../../../utils/useValidator";
import * as Yup from "yup";
import {getWebSetting, updateWebSetting} from "../../../stores/Common/WebSetting/actions";

function WebSetting({getDetail, updateDetail}) {
    const {
        isWebSettingDetailFetching,
        isWebSettingDetailFetchingError,
        webSettingDetail,
        isWebSettingUpdating,
        isWebSettingUpdatingError
    } = useSelector(state => state?.WebSettingReducer);

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('address', values.address ? values.address :'')
        formData.append('help_email', values.help_email ? values.help_email :"")
        formData.append('query_email', values.query_email ? values.query_email :"")
        formData.append('special_issue_email', values.special_issue_email ? values.special_issue_email :"")
        formData.append('fb_link', values.fb_link ? values.fb_link :"")
        formData.append('twitter_link', values.twitter_link ? values.twitter_link : "")
        formData.append('linkedin_link', values.linkedin_link ? values.linkedin_link :"")
        formData.append('youtube_link', values.youtube_link ? values.youtube_link :"")
        updateDetail(formData)
    }

    const {
        values,
        setValues,
        handleSubmit,
    }
        = useValidator({
        initialValues: {
            address: "",
            help_email: "",
            query_email: "",
            special_issue_email: "",
            fb_link: "",
            twitter_link: "",
            linkedin_link: "",
            youtube_link: "",
        },
        validationSchema: Yup.object().shape({}),
        onSubmit,
    });

    useEffect(() => {
        getDetail();
    }, []);

    useEffect(() => {
        if (webSettingDetail?.id) {
            setValues({
                ...values,
                address: webSettingDetail.address,
                help_email: webSettingDetail.help_email,
                query_email: webSettingDetail.query_email,
                special_issue_email: webSettingDetail.special_issue_email,
                fb_link: webSettingDetail.fb_link,
                twitter_link: webSettingDetail.twitter_link,
                linkedin_link: webSettingDetail.linkedin_link,
                youtube_link: webSettingDetail.youtube_link,
            })
        }
    }, [webSettingDetail]);


    return (
        <HelmetProvider>
            <Helmet>
                <title>Web setting detail</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isWebSettingDetailFetchingError &&
                                    <Form.Text className="text-danger">{isWebSettingDetailFetchingError}</Form.Text>}

                                {isWebSettingDetailFetching ?
                                    <div className="m-auto text-center pt-5">
                                        <Loader/>
                                    </div>
                                    :
                                    <Form validated={true} onSubmit={handleSubmit}>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter address"
                                                value={values?.address}
                                                onChange={e => setValues({...values, address: e.target.value})}
                                                as="textarea"
                                            />
                                        </Form.Group>
                                        <Row>
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>Help Email</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter help email"
                                                    value={values?.help_email}
                                                    onChange={e => setValues({...values, help_email: e.target.value})}
                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>Query Email</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter query email"
                                                    value={values?.query_email}
                                                    onChange={e => setValues({...values, query_email: e.target.value})}
                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>Special issue Email</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Special issue email"
                                                    value={values?.special_issue_email}
                                                    onChange={e => setValues({...values, special_issue_email: e.target.value})}
                                                />
                                            </Form.Group>
                                        </Row>
                                        <h4>Social Links</h4>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Facebook link</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter facebook link"
                                                value={values?.fb_link}
                                                onChange={e => setValues({...values, fb_link: e.target.value})}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Twitter link</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter twitter link"
                                                value={values?.twitter_link}
                                                onChange={e => setValues({...values, twitter_link: e.target.value})}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Linkedin link</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter linkedin link"
                                                value={values?.linkedin_link}
                                                onChange={e => setValues({...values, linkedin_link: e.target.value})}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Youtube link</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter youtube link"
                                                value={values?.youtube_link}
                                                onChange={e => setValues({...values, youtube_link: e.target.value})}
                                            />
                                        </Form.Group>

                                        {isWebSettingUpdatingError &&
                                            <Form.Text className="text-danger">{isWebSettingUpdatingError}</Form.Text>}

                                        <div className="mt-3">
                                            {isWebSettingUpdating ?
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
                                                </div>

                                            }
                                        </div>
                                    </Form>
                                }
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
        getDetail: (data) => dispatch(getWebSetting(data)),
        updateDetail: (data) => dispatch(updateWebSetting(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(WebSetting);