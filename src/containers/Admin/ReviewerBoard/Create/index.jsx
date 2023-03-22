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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import {
    reviewerBoardCreate,
    reviewerBoardGet,
    reviewerBoardUpdate
} from "../../../../stores/Admin/ReviewerBoard/actions";
import moment from "moment";

function ReviewerBoardCreate({createReviewerBoard, getReviewerBoard, updateReviewerBoard}) {
    let {ReviewerId} = useParams();

    const {
        isReviewerBoardCreating,
        isReviewerBoardCreatingError,
        isReviewerBoardCreated,

        isReviewerBoardGetFetching,
        isReviewerBoardGetFetchingError,
        reviewerBoard,

    } = useSelector(state => state?.AdminReviewerBoardReducer);


    const onSubmit = () => {
        const formData = new FormData();
        formData.append('first_name', values.first_name)
        formData.append('last_name', values.last_name)
        formData.append('affiliation', values.affiliation)
        formData.append('mobile_no', values.mobile_no)
        formData.append('earning_policy', values.earning_policy)
        formData.append('whatsapp_no', values.whatsapp_no ? values.whatsapp_no : "")
        formData.append('certificate', values.certificate ? values?.certificate : "")
        formData.append('expected_submission_date', values.expected_submission_date ? moment(values.expected_submission_date).format("DD-MM-YYYY") : "")
        formData.append('agreement_file', values.agreement_file ? values?.agreement_file : "")
        formData.append('cv', values.cv ? values?.cv : "")
        formData.append('google_scholar', values.google_scholar ? values?.google_scholar : "")
        formData.append('research_gate', values.research_gate ? values?.research_gate : "")
        formData.append('orcid', values.orcid ? values?.orcid : "")

        if (ReviewerId) {
            updateReviewerBoard({formData, id: ReviewerId});
        } else {
            createReviewerBoard(formData);
        }
    }

    //get category by id
    useEffect(() => {
        if (ReviewerId) {
            getReviewerBoard({id: ReviewerId})
        }
    }, [ReviewerId]);


    const navigate = useNavigate();
    useEffect(() => {
        if (isReviewerBoardCreated) {
            navigate('/admin/reviewer-board');
        }
    }, [isReviewerBoardCreated]);

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
            affiliation: "",
            mobile_no: "",
            whatsapp_no: "",
            certificate: "",
            earning_policy: "",
            expected_submission_date: "",
            agreement_file: "",
            cv: "",
            google_scholar: "",
            research_gate: "",
            orcid: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required('First name is required'),
            last_name: Yup.string().required('Last name is required'),
            affiliation: Yup.string().required('Affiliation is required'),
            mobile_no: Yup.string().required('Mobile no is required'),
            earning_policy: Yup.string().required('Earning policy is required'),
        }),
        onSubmit,
    });

    useEffect(() => {
        if (reviewerBoard) {
            setValues(
                {
                    ...values,
                    first_name: reviewerBoard?.first_name,
                    last_name: reviewerBoard?.last_name,
                    affiliation: reviewerBoard?.affiliation,
                    mobile_no: reviewerBoard?.mobile_no,
                    whatsapp_no: reviewerBoard?.whatsapp_no,
                    earning_policy: reviewerBoard?.earning_policy,
                    expected_submission_date: reviewerBoard?.expected_submission_date ? moment(reviewerBoard?.expected_submission_date).toDate() : null,
                    google_scholar: reviewerBoard?.google_scholar,
                    research_gate: reviewerBoard?.research_gate,
                    orcid: reviewerBoard?.orcid,
                })
        }
    }, [reviewerBoard]);

    const handleResetForm = () => {
        clearFormState();
    }
    const handleImage = (e) => {
        setValues({...values, [e.target.name]: e.target.files[0]})
    }


    return (
        <HelmetProvider>
            <Helmet>
                <title>{ReviewerId ? "Update Journal" : "Create New Journal"}</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/admin/reviewer-board`}}>Reviewer
                                Board</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>{ReviewerId ? "Update Reviewer Board" : "Create Reviewer Board"}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/admin/reviewer-board"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isReviewerBoardGetFetchingError &&
                                    <Form.Text className="text-danger">{isReviewerBoardGetFetchingError}</Form.Text>}
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
                                                <Form.Text className="text-danger">{errors?.first_name}</Form.Text>
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
                                                <Form.Text className="text-danger">{errors?.last_name}</Form.Text>
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
                                            <Form.Text className="text-danger">{errors?.affiliation}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    <Row>
                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>Mobile No <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter mobile no"
                                                value={values?.mobile_no}
                                                onChange={e => setValues({...values, mobile_no: e.target.value})}
                                                required
                                            />
                                            {touched?.mobile_no && errors?.mobile_no ? (
                                                <Form.Text className="text-danger">{errors?.mobile_no}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>Whatsapp No</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter whatsapp no"
                                                value={values?.whatsapp_no}
                                                onChange={e => setValues({...values, whatsapp_no: e.target.value})}
                                            />
                                            {touched?.whatsapp_no && errors?.whatsapp_no ? (
                                                <Form.Text className="text-danger">{errors?.whatsapp_no}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                    </Row>
                                    <Row>

                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>Certificate {!ReviewerId ?
                                                <span className="text-danger">*</span> : ""}</Form.Label>
                                            <Form.Control
                                                type="file"
                                                required={ReviewerId ? false : true}
                                                accept="image/*,.pdf,.docx"
                                                name="certificate"
                                                onChange={e => handleImage(e)}
                                            />
                                            {reviewerBoard?.certificate &&
                                                <a href={reviewerBoard?.certificate} className="text-info"
                                                   target="_blank">Uploaded
                                                    file</a>}
                                            {touched?.certificate && errors?.certificate ? (
                                                <Form.Text className="text-danger">{errors?.certificate}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>

                                        <Form.Group as={Col} md="3" className="mb-3">
                                            <Form.Label>Earning Policy</Form.Label>
                                            <br/>
                                            <Form.Check
                                                inline
                                                label="Yes"
                                                name="group1"
                                                type="radio"
                                                value="Yes"
                                                checked={values.earning_policy === "Yes"}
                                                onChange={e => setValues({...values, earning_policy: e.target.value})}
                                                required

                                            />
                                            <Form.Check
                                                inline
                                                label="No"
                                                name="group1"
                                                type="radio"
                                                value="No"
                                                checked={values.earning_policy === "No"}
                                                onChange={e => setValues({...values, earning_policy: e.target.value})}
                                                required

                                            />
                                            {touched?.earning_policy && errors?.earning_policy ? (
                                                <Form.Text className="text-danger">{errors?.earning_policy}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        {values?.earning_policy === "Yes" &&
                                            <Form.Group as={Col} md="3" className="mb-3">
                                                <Form.Label>Expected Submission Date</Form.Label>
                                                <DatePicker
                                                    className="form-control"
                                                    selected={values?.expected_submission_date}
                                                    dateFormat="dd-MMM-yyyy"
                                                    onChange={(date) => setValues({
                                                        ...values,
                                                        expected_submission_date: date
                                                    })}
                                                />

                                                {touched?.expected_submission_date && errors?.expected_submission_date ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.expected_submission_date}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                        }
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>Agreement File</Form.Label>
                                            <Form.Control
                                                type="file"
                                                accept="image/*,.pdf,.docx"
                                                name="agreement_file"
                                                onChange={e => handleImage(e)}/>
                                            {reviewerBoard?.agreement_file &&
                                                <a href={reviewerBoard?.agreement_file} className="text-info"
                                                   target="_blank">Uploaded
                                                    file</a>}
                                            {touched?.agreement_file && errors?.agreement_file ? (
                                                <Form.Text className="text-danger">{errors?.agreement_file}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" className="mb-3">
                                            <Form.Label>CV</Form.Label>
                                            <Form.Control
                                                type="file"
                                                accept="image/*,.pdf,.docx"
                                                name="cv"
                                                onChange={e => handleImage(e)}
                                            />
                                            {reviewerBoard?.cv &&
                                                <a href={reviewerBoard?.cv} className="text-info" target="_blank">Uploaded
                                                    file</a>}
                                            {touched?.cv && errors?.cv ? (
                                                <Form.Text className="text-danger">{errors?.cv}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                    </Row>
                                    <h5 className="py-3">Profile link</h5>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Google Scholar</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter google scholar"
                                            value={values?.google_scholar}
                                            onChange={e => setValues({...values, google_scholar: e.target.value})}
                                        />
                                        {touched?.google_scholar && errors?.google_scholar ? (
                                            <Form.Text className="text-danger">{errors?.google_scholar}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Research Gate</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter research gate"
                                            value={values?.research_gate}
                                            onChange={e => setValues({...values, research_gate: e.target.value})}
                                        />
                                        {touched?.research_gate && errors?.research_gate ? (
                                            <Form.Text className="text-danger">{errors?.research_gate}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb-3">
                                        <Form.Label>Orcid</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter orcid"
                                            value={values?.orcid}
                                            onChange={e => setValues({...values, orcid: e.target.value})}
                                        />
                                        {touched?.orcid && errors?.orcid ? (
                                            <Form.Text className="text-danger">{errors?.orcid}</Form.Text>
                                        ) : (
                                            ''
                                        )}
                                    </Form.Group>

                                    {isReviewerBoardCreatingError &&
                                        <Form.Text className="text-danger">{isReviewerBoardCreatingError}</Form.Text>}


                                    <div className="mt-3">
                                        {isReviewerBoardCreating ?

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
        createReviewerBoard: (data) => dispatch(reviewerBoardCreate(data)),
        getReviewerBoard: (data) => dispatch(reviewerBoardGet(data)),
        updateReviewerBoard: (data) => dispatch(reviewerBoardUpdate(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(ReviewerBoardCreate);