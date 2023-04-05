import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "react-bootstrap/Container";
import {Breadcrumb, Button, Card, Col, Form, Spinner} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/fontawesome-free-solid";
import useValidator from "../../../../utils/useValidator";
import * as Yup from "yup";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useEffect} from "react";
import {tempArticleCreate, tempArticleGet, tempArticleUpdate} from "../../../../stores/SuperAdmin/TempArticle/actions";
import Loader from "../../../../components/Loader";


function TempArticleCreate({createTempArticle, getTempArticle, updateTempArticle}) {
    let {articleId} = useParams();

    const {
        isTempArticleCreating,
        isTempArticleCreatingError,
        isTempArticleCreated,

        isTempArticleGetFetching,
        isTempArticleGetFetchingError,
        tempArticle
    } = useSelector(state => state?.TempArticleReducer);

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('doi_link', values.doi_link)
        formData.append('article_title', values.article_title)
        formData.append('journal_name', values.journal_name)
        formData.append('article_link', values.article_link)
        formData.append('image', values.image)
        if (articleId) {
            updateTempArticle({formData, id: articleId});
        } else {
            createTempArticle(formData);
        }

    }

    //get by id
    useEffect(() => {
        if (articleId) {
            getTempArticle({id: articleId})
        }
    }, [articleId]);


    const navigate = useNavigate();
    useEffect(() => {
        if (isTempArticleCreated) {
            navigate('/super-admin/temp-article');
        }
    }, [isTempArticleCreated]);

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
            doi_link: "",
            article_title: "",
            journal_name: "",
            article_link: "",
            image: "",
        },
        validationSchema: Yup.object({
            doi_link: Yup.string().required('DOI link is required'),
            article_title: Yup.string().required('Article title is required'),
            journal_name: Yup.string().required('Journal name is required'),
            article_link: Yup.string().required('Article link is required'),
        }),
        onSubmit,
    });

    useEffect(() => {
        if (tempArticle) {
            setValues(
                {
                    ...values,
                    doi_link: tempArticle?.doi_link,
                    article_title: tempArticle?.article_title,
                    journal_name: tempArticle?.journal_name,
                    article_link: tempArticle?.article_link,
                })
        }
    }, [tempArticle]);

    const handleResetForm = () => {
        clearFormState();
    }
    const handleImage = (file) => {
        setValues({...values, image: file})
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>{articleId ? "Update Temp Article" : "Create New Temp Article"}</title>
            </Helmet>
            <main className="py-4 bg-grey-lime">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/super-admin/dashboard`}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link}
                                             linkProps={{to: `/super-admin/organization`}}>Temp
                                Articles</Breadcrumb.Item>
                            <Breadcrumb.Item
                                active>{articleId ? "Update Temp Article" : "Create New Temp Article"}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Button variant="primary" as={Link} to="/super-admin/temp-article"><FontAwesomeIcon
                        icon={faArrowLeft}/> Back</Button>
                </Container>
                <section className="my-4">
                    <Container>
                        {isTempArticleGetFetching ?
                           <div className="my-5 text-center">
                               <Loader/>
                           </div>
                            :
                            <Card>
                                <Card.Body>
                                    {isTempArticleGetFetchingError &&
                                        <Form.Text className="text-danger">{isTempArticleGetFetchingError}</Form.Text>}
                                    <Form validated={true} onSubmit={handleSubmit}>

                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>DOI Link</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter DOI link"
                                                value={values?.doi_link}
                                                onChange={e => setValues({...values, doi_link: e.target.value})}
                                                required
                                            />
                                            {touched?.doi_link && errors?.doi_link ? (
                                                <Form.Text className="text-danger">{errors?.doi_link}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Article Title</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter article name"
                                                value={values?.article_title}
                                                onChange={e => setValues({...values, article_title: e.target.value})}
                                                required
                                            />
                                            {touched?.article_title && errors?.article_title ? (
                                                <Form.Text className="text-danger">{errors?.article_title}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Journal Name</Form.Label>
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
                                            <Form.Label>Article link</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter article link"
                                                value={values?.article_link}
                                                onChange={e => setValues({...values, article_link: e.target.value})}
                                                required
                                            />
                                            {touched?.article_link && errors?.article_link ? (
                                                <Form.Text className="text-danger">{errors?.article_link}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3">
                                            <Form.Label>Banner Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                required={articleId ? false : true}
                                                accept="image/*"
                                                onChange={e => handleImage(e.target.files[0])}
                                            />
                                            {tempArticle?.image &&
                                                <a href={tempArticle?.image} target="_blank">Uploaded file</a>}
                                            {touched?.image && errors?.image ? (
                                                <Form.Text className="text-danger">{errors?.image}</Form.Text>
                                            ) : (
                                                ''
                                            )}
                                        </Form.Group>

                                        <div className="mt-3">
                                            {isTempArticleCreating ?

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
                        }
                    </Container>
                </section>
            </main>
        </HelmetProvider>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        createTempArticle: (data) => dispatch(tempArticleCreate(data)),
        getTempArticle: (data) => dispatch(tempArticleGet(data)),
        updateTempArticle: (data) => dispatch(tempArticleUpdate(data)),
    };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(TempArticleCreate);