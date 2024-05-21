import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import {getJournalProfile, updateJournalProfile} from "../../../stores/Admin/Journal/actions";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect, useState} from "react";
import Loader from "../../../components/Loader";
import useValidator from "../../../utils/useValidator";
import * as Yup from "yup";
import {webJournalCategoryList} from "../../../stores/Common/JournalCategory/actions";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
function JournalProfile({fetchJournal, updateJournal, getJournalCategories}) {
    const {
        isJournalFetching,
        isJournalFetchingError,
        journalData,
        isJournalUpdating,
        isJournalUpdatingError
    } = useSelector(state => state?.AdminJournalReducer);

    const {
        isJournalCategoryListFetching,
        isJournalCategoryListFetchingError,
        journalCategories
    } = useSelector(state => state?.WebJournalCategoryReducer);

    const [bannerContent, setBannerContent] = useState('');
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('journal_category_id', values.journal_category_id)
        formData.append('name', values.journal_name)
        formData.append('banner_content', bannerContent)
        formData.append('journal_profile', values.journal_profile ? values.journal_profile : "")
        formData.append('editor_spotlight', values.editor_spotlight ? values.editor_spotlight : "")
        formData.append('special_issues', values.special_issues ? values?.special_issues : "")
        formData.append('acceptance_rate', values.acceptance_rate ? values?.acceptance_rate : "")
        formData.append('submission_final_decision', values.submission_final_decision ? values?.submission_final_decision : "")
        formData.append('acceptance_publication', values.acceptance_publication ? values?.acceptance_publication : "")
        formData.append('citi_score', values.citi_score ? values?.citi_score : "")
        formData.append('citation_indicator', values.citation_indicator ? values?.citation_indicator : "")
        formData.append('impact_factor', values.impact_factor ? values?.impact_factor : "")
        formData.append('apc', values.apc ? values?.apc : "")
        formData.append('apc_visible', values.apc_visible)
        formData.append('twitter_feed', values.twitter_feed ? values.twitter_feed : "")
        if (values.banner) {
            formData.append('banner', values.banner)
        }
        updateJournal(formData)
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
            journal_category_id: "",
            journal_name: "",
            banner: "",
            journal_profile: "",
            editor_spotlight: "",
            special_issues: "",
            acceptance_rate: "",
            submission_final_decision: "",
            acceptance_publication: "",
            citi_score: "",
            citation_indicator: "",
            impact_factor: "",
            apc: "",
            apc_visible: "Yes",
            twitter_feed: "",
        },
        validationSchema: Yup.object().shape({
            journal_category_id: Yup.number().required('Journal category is required'),
            journal_name: Yup.string().required('Journal name is required'),
            acceptance_rate: Yup.number().notRequired(),
            submission_final_decision: Yup.number().notRequired(),
            acceptance_publication: Yup.number().notRequired(),
            citi_score: Yup.string().notRequired().matches(/^\d*(\.\d{0,3})?$/, 'Enter only decimal number ex 1.223'),
            citation_indicator: Yup.string().notRequired().matches(/^\d*(\.\d{0,3})?$/, 'Enter only decimal number ex 1.223'),
            impact_factor: Yup.string().notRequired().matches(/^\d*(\.\d{0,3})?$/, 'Enter only decimal number ex 1.223'),
            apc: Yup.number().notRequired(),
            apc_visible: Yup.string().required(),
        }),
        onSubmit,
    });

    useEffect(() => {
        getJournalCategories();
    }, []);

    useEffect(() => {
        fetchJournal();
    }, []);

    useEffect(() => {
        if (journalData?.id) {
            setValues({
                ...values,
                journal_name: journalData.name,
                journal_profile: journalData.journal_profile,
                editor_spotlight: journalData.editor_spotlight,
                special_issues: journalData.special_issues,
                acceptance_rate: journalData?.acceptance_rate,
                submission_final_decision: journalData?.submission_final_decision,
                acceptance_publication: journalData?.acceptance_publication,
                citi_score: journalData?.citi_score,
                citation_indicator: journalData?.citation_indicator,
                impact_factor: journalData?.impact_factor,
                apc: journalData?.apc,
                apc_visible: journalData?.apc_visible,
                journal_category_id: journalData?.journal_category_id,
                twitter_feed: journalData?.twitter_feed,
            });
            setBannerContent(journalData?.banner_content)
        }
    }, [journalData]);

    const handleImage = (file) => {
        setValues({...values, banner: file})
    }

    const handleResetForm = () => {
        clearFormState();
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Journal detail</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <section className="my-4">
                    <Container>
                        <Card>
                            <Card.Body>
                                {isJournalFetchingError &&
                                    <Form.Text className="text-danger">{isJournalFetchingError}</Form.Text>}

                                {isJournalFetching ?
                                    <div className="m-auto text-center pt-5">
                                        <Loader/>
                                    </div>
                                    :
                                    <Form validated={true} onSubmit={handleSubmit}>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Journal Category <span
                                                className="text-danger">*</span></Form.Label>
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
                                                <Form.Text
                                                    className="text-danger">{errors?.journal_category_id}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Journal Name <span className="text-danger">*</span></Form.Label>
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
                                                required={journalData?.id ? false : true}
                                                accept="image/*"
                                                onChange={e => handleImage(e.target.files[0])}
                                            />
                                            {journalData &&
                                                <a href={journalData?.banner} className="text-info" target="_blank">Uploaded
                                                    Banner</a>}
                                            {touched?.banner && errors?.banner ? (
                                                <Form.Text className="text-danger">{errors?.banner}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Banner Content <span
                                                className="text-danger">*</span></Form.Label>
                                            <CKEditor
                                                data={bannerContent}
                                                editor={ ClassicEditor }
                                                onReady={ editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                } }
                                                onChange={ ( event, editor ) => {
                                                    setBannerContent(editor.getData());
                                                } }
                                            />


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
                                        <h4>Journal metrics</h4>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>Acceptance Rate</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter acceptance rate"
                                                    value={values?.acceptance_rate}
                                                    onChange={e => setValues({
                                                        ...values,
                                                        acceptance_rate: e.target.value
                                                    })}
                                                />
                                                {touched?.acceptance_rate && errors?.acceptance_rate ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.acceptance_rate}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>Submission Final Decision</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter submission final decision"
                                                    value={values?.submission_final_decision}
                                                    onChange={e => setValues({
                                                        ...values,
                                                        submission_final_decision: e.target.value
                                                    })}
                                                />
                                                {touched?.submission_final_decision && errors?.submission_final_decision ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.submission_final_decision}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>Acceptance Publication</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter Acceptance publication"
                                                    value={values?.acceptance_publication}
                                                    onChange={e => setValues({
                                                        ...values,
                                                        acceptance_publication: e.target.value
                                                    })}
                                                />
                                                {touched?.acceptance_publication && errors?.acceptance_publication ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.acceptance_publication}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>Citi Score</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter citi score"
                                                    value={values?.citi_score}
                                                    onChange={e => setValues({
                                                        ...values,
                                                        citi_score: e.target.value
                                                    })}
                                                    step="0.999"
                                                />
                                                {touched?.citi_score && errors?.citi_score ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.citi_score}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>Citation Indicator</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter citation indicator"
                                                    value={values?.citation_indicator}
                                                    onChange={e => setValues({
                                                        ...values,
                                                        citation_indicator: e.target.value
                                                    })}
                                                    step="0.999"
                                                />
                                                {touched?.citation_indicator && errors?.citation_indicator ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.citation_indicator}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>Impact Factor</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter impact factor"
                                                    value={values?.impact_factor}
                                                    onChange={e => setValues({
                                                        ...values,
                                                        impact_factor: e.target.value
                                                    })}
                                                    step="0.999"
                                                />
                                                {touched?.impact_factor && errors?.impact_factor ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.impact_factor}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" className="mb-3">
                                                <Form.Label>APC <small>(In Euro €)</small></Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter apc"
                                                    value={values?.apc}
                                                    onChange={e => setValues({
                                                        ...values,
                                                        apc: e.target.value
                                                    })}
                                                />
                                                {touched?.apc && errors?.apc ? (
                                                    <Form.Text
                                                        className="text-danger">{errors?.apc}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>

                                            <Form.Group as={Col} md="6" className="mb-3">
                                                <Form.Label>APC show on website</Form.Label>
                                                <br/>
                                                <Form.Check
                                                    inline
                                                    label="Yes"
                                                    name="group1"
                                                    type="radio"
                                                    value="Yes"
                                                    checked={values.apc_visible === "Yes"}
                                                    onChange={e => setValues({...values, apc_visible: e.target.value})}
                                                    required

                                                />
                                                <Form.Check
                                                    inline
                                                    label="No"
                                                    name="group1"
                                                    type="radio"
                                                    value="No"
                                                    checked={values.apc_visible === "No"}
                                                    onChange={e => setValues({...values, apc_visible: e.target.value})}
                                                    required

                                                />
                                                {touched?.apc_visible && errors?.apc_visible ? (
                                                    <Form.Text className="text-danger">{errors?.apc_visible}</Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </Form.Group>
                                        </Row>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Twitter feed link</Form.Label>
                                            <Form.Control
                                                type="url"
                                                placeholder="Enter twitter link for feed"
                                                value={values?.twitter_feed}
                                                onChange={e => setValues({
                                                    ...values,
                                                    twitter_feed: e.target.value
                                                })}
                                            />
                                            {touched?.twitter_feed && errors?.twitter_feed ? (
                                                <Form.Text
                                                    className="text-danger">{errors?.twitter_feed}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        {isJournalUpdatingError &&
                                            <Form.Text className="text-danger">{isJournalUpdatingError}</Form.Text>}

                                        <div className="mt-3">
                                            {isJournalUpdating ?
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
        fetchJournal: (data) => dispatch(getJournalProfile(data)),
        updateJournal: (data) => dispatch(updateJournalProfile(data)),
        getJournalCategories: (data) => dispatch(webJournalCategoryList(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(JournalProfile);